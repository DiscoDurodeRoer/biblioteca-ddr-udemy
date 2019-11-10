import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { DdrDropdownComponent } from './ddr-dropdown/ddr-dropdown.component';
import { DdrClickOutsideModule } from 'ddr-click-outside';



@NgModule({
  declarations: [DdrDropdownComponent],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    DdrClickOutsideModule
  ],
  exports: [DdrDropdownComponent]
})
export class DdrDropdownModule { }
