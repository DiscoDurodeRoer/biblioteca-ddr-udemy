import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DdrToastComponent } from './ddr-toast/ddr-toast.component';



@NgModule({
  declarations: [DdrToastComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  exports: [DdrToastComponent]
})
export class DdrToastModule { }
