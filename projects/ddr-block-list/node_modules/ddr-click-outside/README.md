# DdrClickOutside

Directive to indicate if you click outside of element.

## Installation

Using npm:

`npm install ddr-click-outside`

## Usage

In app.module:

```ts

// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Modulos
import { AppRoutingModule } from './app-routing.module';
import { DdrClickOutsideModule } from 'ddr-click-outside';

// Componentes
import { AppComponent } from './app.component';
import { ExampleDdrClickOutsideComponent } from './examples/example-ddr-click-outside/example-ddr-click-outside.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowcaseDdrClickOutsideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DdrClickOutsideModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }



```
In your ts:

```ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-ddr-click-outside',
  templateUrl: './example-ddr-click-outside.component.html',
  styleUrls: ['./example-ddr-click-outside.component.css']
})
export class ExampleDdrClickOutsideComponent implements OnInit {

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


```

In your html:

```html
<p>{{'Modo actual: ' +actualMode}}</p>

<button (click)="openEstandar()">Estandar</button>
<button (click)="openDelay()">Delay</button>
<button (click)="openDesactivated()">Desactivated</button>

<div *ngIf="showEstandar" ddrClickOutside (clickOutside)="clickOutside($event)" class="block">
  <p>Click outside this div</p>
</div>

<div *ngIf="showDelay" ddrClickOutside [clickOutsideDelay]="5000" (clickOutside)="clickOutside($event)" class="block">
  <p>Click outside this div</p>
</div>

<div *ngIf="showDesactivated" ddrClickOutside [clickOutsideEnabled]="false" (clickOutside)="clickOutside($event)" class="block">
  <p>Click outside this div</p>
</div>

```

## Inputs

| Input  | Description |
| ------------- | ------------- |
| clickOutsideEnabled  | Active or desativate event |
| clickOutsideDelay  | In x miliseconds, send event.  |

## Outputs

| Output  | Description |
| ------------- | ------------- |
| clickOutside  | Event when click outside, you receive a mouse event |
