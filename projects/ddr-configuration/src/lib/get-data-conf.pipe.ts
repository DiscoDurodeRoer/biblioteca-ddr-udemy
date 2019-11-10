import { Pipe, PipeTransform } from '@angular/core';
import { DdrConfigurationService } from './ddr-configuration.service';

@Pipe({
  name: 'getDataConf'
})
export class GetDataConfPipe implements PipeTransform {

  constructor(private ddrConfiguration: DdrConfigurationService){ }

  transform(path: string): any {
    return this.ddrConfiguration.getData(path);
  }

}
