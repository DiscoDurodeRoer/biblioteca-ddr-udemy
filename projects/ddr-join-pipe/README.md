# DdrJoinPipe

Pipe to show in a string from an array.

## Installation

Using npm:

`npm install ddr-join-pipe`

## Usage

In module:

```ts

// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Modules
import { AppRoutingModule } from './app-routing.module';
import { DdrJoinPipeModule } from 'ddr-join-pipe';

@NgModule({
  declarations: [
    AppComponent,
    SampleDdrJoinPipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DdrJoinPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
In your ts:

```ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample-ddr-join-pipe',
  templateUrl: './sample-ddr-join-pipe.component.html',
  styleUrls: ['./sample-ddr-join-pipe.component.css']
})
export class SampleDdrJoinPipeComponent {

  valores: string[];

  constructor() {
    this.valores = [
      "valor1",
      "valor2",
      "valor3",
      "valor4",
      "valor5"
    ]

  }

}

```

In your html:

```html
{{valores | join}}
```


