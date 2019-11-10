import { trigger, state, style, transition, animate } from '@angular/animations';
import { DdrSelectItem } from './../bean/ddr-select-item';
import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation, ContentChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'ddr-dropdown',
  templateUrl: './ddr-dropdown.component.html',
  styleUrls: ['./ddr-dropdown.component.css'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('overlayAnimation', [
      state('void', style({
        transform: 'translateY(5%)',
        opacity: 0
      })),
      state('visible', style({
        transform: 'translate(0)',
        opacity: 1
      })),
      transition('void => visible', animate('225ms ease-out')),
      transition('visible => void', animate('195ms ease-in'))
    ])
  ]
})
export class DdrDropdownComponent implements OnInit {

  @ContentChild(TemplateRef, {static: false}) template: TemplateRef<any>;

  @Input() options: DdrSelectItem[] = [];
  @Input() valueSelect: any;
  @Input() labelNoResults: string = 'No results';

  @Output() select: EventEmitter<DdrSelectItem>;

  public showItems: boolean;
  public optionsShow: DdrSelectItem[];
  public valueShow: string;

  constructor() {
    this.showItems = false;
    this.select = new EventEmitter<DdrSelectItem>();
  }

  ngOnInit() {

    if(this.valueSelect){
      this.preload();
    }

    this.optionsShow = this.options.slice(0);
  }

  preload(){
    let optionFound = this.options.find(option => option.value === this.valueSelect);
    if(optionFound){
      this.valueShow = optionFound.label;
      this.selectItem(optionFound);
    }
  }

  showPanelOptions() {
    this.showItems = !this.showItems;
  }

  filter(searchWord: string) {
    this.optionsShow = this.options.filter(option => option.label.toLowerCase().includes(searchWord.toLowerCase()))
  }

  selectItem(item){
    this.showItems = false;
    console.log(item);
    this.valueShow = item.label;
    this.select.emit(item);
  }

  hidePanelItems(){
    this.showItems = false;
  }

}
