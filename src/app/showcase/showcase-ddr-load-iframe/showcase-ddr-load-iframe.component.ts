import { Component, OnInit } from '@angular/core';
import { DdrSpinnerService } from 'ddr-spinner';

@Component({
  selector: 'app-showcase-ddr-load-iframe',
  templateUrl: './showcase-ddr-load-iframe.component.html',
  styleUrls: ['./showcase-ddr-load-iframe.component.css']
})
export class ShowcaseDdrLoadIframeComponent implements OnInit {

  constructor(private ddrSpinner: DdrSpinnerService) {
    this.ddrSpinner.showSpinner();
  }

  ngOnInit() {
  }

  load() {
    console.log("Load iframe");
    this.ddrSpinner.hideSpinner();
  }
}
