# DdrLoadIFrame

Directive to indicate that an iframe is loaded

## Installation

Using npm:

`npm install ddr-load-iframe`

## Usage

In app.module:

```ts

// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Modulos
import { AppRoutingModule } from './app-routing.module';
import { DdrLoadIframeModule } from 'ddr-load-iframe';

// Componentes
import { AppComponent } from './app.component';
import { ExampleDdrLoadIframeComponent } from './example/example-ddr-load-iframe/showcase-ddr-load-iframe.component';


@NgModule({
  declarations: [
    AppComponent,
    ShowcaseDdrLoadIframeComponent
  ],
  imports: [
    BrowserModule,
    DdrLoadIframeModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


```
In your ts:

```ts
import { Component, OnInit } from '@angular/core';
import { DdrSpinnerService } from 'ddr-spinner';

@Component({
  selector: 'app-example-ddr-load-iframe',
  templateUrl: './example-ddr-load-iframe.component.html',
  styleUrls: ['./v-ddr-load-iframe.component.css']
})
export class ExampleDdrLoadIframeComponent implements OnInit {

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

```

In your html:

```html
<iframe src="http://discoduroderoer.es" ddrLoadIframe (loadIframe)="load()"></iframe>

<ddr-spinner></ddr-spinner>

```

## Outputs

| Output  | Description |
| ------------- | ------------- |
| loadIframe  | Event when iframe is loaded |
