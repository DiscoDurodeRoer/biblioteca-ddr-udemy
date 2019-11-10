import { DdrSpinnerService } from 'ddr-spinner';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showcase-ddr-spinner',
  templateUrl: './showcase-ddr-spinner.component.html',
  styleUrls: ['./showcase-ddr-spinner.component.css']
})
export class ShowcaseDdrSpinnerComponent implements OnInit {

  public embedded: boolean;

  constructor(private ddrSpinner: DdrSpinnerService) { 
    this.embedded = false;
  }

  ngOnInit() {
  }

  activarSpinner(){
    this.ddrSpinner.showSpinner();

    setTimeout(() => {
      this.ddrSpinner.hideSpinner();
    }, 50000);
  }

  cambiarModo(){
    this.embedded = !this.embedded;
  }

}
