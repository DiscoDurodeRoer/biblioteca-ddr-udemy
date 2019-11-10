import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { GetDataConfPipe } from './get-data-conf.pipe';



@NgModule({
  declarations: [
    GetDataConfPipe
  ],
  imports: [
    HttpClientModule
  ],
  exports: [GetDataConfPipe]
})
export class DdrConfigurationModule { }
