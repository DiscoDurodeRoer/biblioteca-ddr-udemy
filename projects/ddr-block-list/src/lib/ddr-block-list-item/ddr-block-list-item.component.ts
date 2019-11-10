import { DdrAction } from './../bean/ddr-action';
import { DdrBlockItem } from './../bean/ddr-block-item';
import { Component, OnInit, Input, Output, EventEmitter, TemplateRef, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ddr-block-list-item',
  templateUrl: './ddr-block-list-item.component.html',
  styleUrls: ['./ddr-block-list-item.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DdrBlockListItemComponent implements OnInit {

  @Input() blockItem: DdrBlockItem;
  @Input() id: string;

  @Input() templateHeader: TemplateRef<any>;
  @Input() templateInfoAdditional: TemplateRef<any>;
  @Input() templateData: TemplateRef<any>;

  @Input() showHeader: boolean;
  @Input() showInfoAdditional: boolean;
  @Input() showActions: boolean;
  @Input() showBorder: boolean;

  @Output() actionSelected: EventEmitter<DdrAction>;
  @Output() closeOptions: EventEmitter<string>;

  public showOptions: boolean;

  constructor() {
    this.actionSelected = new EventEmitter<DdrAction>();
    this.closeOptions = new EventEmitter<string>();
  }

  ngOnInit() {
    this.showActions = this.showActions && this.blockItem.actions && this.blockItem.actions.length > 0;
  }

  sendAction($event, action: DdrAction){
    $event.stopPropagation();
    this.showOptions = false;
    let actionSended = Object.assign({}, action);
    actionSended.item = this.blockItem.item;
    this.actionSelected.emit(actionSended);
  }

  openOptions($event){
    $event.stopPropagation();
    this.showOptions = !this.showOptions;
    this.closeOptions.emit(this.id);
  }

  hideOptions(){
    this.showOptions = false;
  }

}
