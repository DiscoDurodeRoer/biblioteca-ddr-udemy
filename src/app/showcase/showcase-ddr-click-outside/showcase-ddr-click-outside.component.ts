import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showcase-ddr-click-outside',
  templateUrl: './showcase-ddr-click-outside.component.html',
  styleUrls: ['./showcase-ddr-click-outside.component.css']
})
export class ShowcaseDdrClickOutsideComponent implements OnInit {

  showEstandar: boolean;
  showDelay: boolean;
  showDesactivated: boolean;
  actualMode: string;


  constructor() { 
    this.showEstandar = true;
    this.actualMode = 'estandar';
  }

  ngOnInit() {
  }

  clickOutside($event) {
    console.log($event);

  }

  openEstandar() {
    this.showEstandar = true;
    this.showDelay = false;
    this.showDesactivated = false;
    this.actualMode = 'estandar';
  }

  openDelay() {
    this.showEstandar = false;
    this.showDelay = true;
    this.showDesactivated = false;
    this.actualMode = 'delay';
  }

  openDesactivated() {
    this.showEstandar = false;
    this.showDelay = false;
    this.showDesactivated = true;
    this.actualMode = 'desactivated';
  }

}
