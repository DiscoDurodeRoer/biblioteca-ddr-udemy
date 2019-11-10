import { DdrConfigurationService } from 'ddr-configuration';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showcase-ddr-configuration',
  templateUrl: './showcase-ddr-configuration.component.html',
  styleUrls: ['./showcase-ddr-configuration.component.css']
})
export class ShowcaseDdrConfigurationComponent implements OnInit {

  constructor(private config: DdrConfigurationService) {
    console.log(this.config.getAllData());
    console.log(this.config.getData('variable2'))
  }

  ngOnInit() {
  }

}
