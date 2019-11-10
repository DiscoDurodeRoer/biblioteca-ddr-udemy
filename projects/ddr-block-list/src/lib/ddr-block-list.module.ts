import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DdrBlockListComponent } from './ddr-block-list/ddr-block-list.component';
import { DdrBlockListItemComponent } from './ddr-block-list-item/ddr-block-list-item.component';
import { DdrBlockDataItemComponent } from './ddr-block-data-item/ddr-block-data-item.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    DdrBlockListComponent,
    DdrBlockListItemComponent,
    DdrBlockDataItemComponent
  ],
  imports: [
    CommonModule,
    NgxPaginationModule
  ],
  exports: [
    DdrBlockListComponent,
    DdrBlockDataItemComponent
  ]
})
export class DdrBlockListModule { }
