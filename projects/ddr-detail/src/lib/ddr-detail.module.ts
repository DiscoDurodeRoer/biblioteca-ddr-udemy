import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DdrDetailComponent } from './ddr-detail/ddr-detail.component';

@NgModule({
  declarations: [DdrDetailComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  exports: [DdrDetailComponent]
})
export class DdrDetailModule { }
