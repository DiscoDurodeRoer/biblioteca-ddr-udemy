import { DdrBlockListItemComponent } from './../ddr-block-list-item/ddr-block-list-item.component';
import { DdrBlockItem } from './../bean/ddr-block-item';
import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation, ContentChild, TemplateRef, ViewChildren, Query, QueryList } from '@angular/core';
import { DdrAction } from '../bean/ddr-action';

@Component({
  selector: 'ddr-block-list',
  templateUrl: './ddr-block-list.component.html',
  styleUrls: ['./ddr-block-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DdrBlockListComponent implements OnInit {

  /**
   * Items a mostrar
   */
  @Input() blockItems: DdrBlockItem[];
  
  /**
   * Texto que se mostrará cuando no haya items
   */
  @Input() labelNoResults: string = 'No results';

  /**
   * Indica si queremos mostrar el header del bloque
   */
  @Input() showHeader: boolean = true;

  /**
   * Indica si queremos mostrar la información adicional
   */
  @Input() showInfoAdditional: boolean = true;

  /**
   * Indica si queremos mostrar las acciones
   */
  @Input() showActions: boolean = true;

  /**
   * Indica si queremos mostrar el borde
   */
  @Input() showBorder: boolean = true;

  /**
   * Indica el numero de elementos por página
   */
  @Input() pagination: number = 10;

  /**
   * Texto que se mostrará en el previo de la paginación
   */
  @Input() previousLabel: string = 'Previous';

  /**
   * Texto que se mostrará en el siguiente de la paginación
   */
  @Input() nextLabel: string = 'Next';

  /**
   * Evento al clickar sobre el bloque
   */
  @Output() itemSelected: EventEmitter<any>;

  /**
   * Evento al seleccionar una acción
   */
  @Output() actionSelected: EventEmitter<DdrAction>;

  /**
   * Template de la cabecera
   */
  @ContentChild("templateHeader", { static: false }) templateHeader: TemplateRef<any>;
  
  /**
   * Template de la parte adiccional
   */
  @ContentChild("templateInfoAdditional", { static: false }) templateInfoAdditional: TemplateRef<any>;
  
  /**
   * Template de la parte de datos
   */
  @ContentChild("templateData", { static: false }) templateData: TemplateRef<any>;

  /**
   * Referencia de los bloques hijos
   */
  @ViewChildren(DdrBlockListItemComponent) blocks: QueryList<DdrBlockListItemComponent>;

  /**
   * Indica la pagina actual
   */
  public page: number;

  constructor() {
    this.page = 1;
    this.itemSelected = new EventEmitter<any>();
    this.actionSelected = new EventEmitter<DdrAction>();
  }

  ngOnInit() {
    if(this.pagination < 0){
      this.pagination = 10;
    }
  }

  /**
   * Cierra todos los opciones de los demas bloques
   * @param id id que no cerrará sus opciones
   */
  closeAllOptionsExcept(id: string){

    this.blocks.forEach(block => {
      if(block.id !== id){
        block.showOptions = false;
      }
    });

  }

  /**
   * Emite la acción seleccionada
   * @param $event Acción seleccionada
   */
  sendAction($event){
    this.actionSelected.emit($event);
  }

  /**
   * Emite el item seleccionado
   * @param item Item seleccionado
   */
  selectItem(item: any){
    this.itemSelected.emit(item);
  }


}
