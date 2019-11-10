import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DdrSpinnerComponent } from './ddr-spinner/ddr-spinner.component';

@NgModule({
  declarations: [DdrSpinnerComponent],
  imports: [
    CommonModule
  ],
  exports: [DdrSpinnerComponent]
})
export class DdrSpinnerModule { }
