# DdrDetail

Component to show a detail with custom content.

## Installation

Using npm:

`npm install ddr-detail`

## Usage

In app.module:

```ts
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

// Modulos
import { AppRoutingModule } from './app-routing.module';
import { DdrDetailModule } from 'ddr-detail';

// Componentes
import { AppComponent } from './app.component';
import { ExampleDdrDetailComponent } from './example/example-ddr-detail/example-ddr-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowcaseDdrDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DdrDetailModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

```
In your ts:

```ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-ddr-detail',
  templateUrl: './example-ddr-detail.component.html',
  styleUrls: ['./example-ddr-detail.component.css']
})
export class ExampleDdrDetailComponent implements OnInit {

  public showDetail: boolean;

  constructor() {
    this.showDetail = false;
  }

  ngOnInit() {
  }

  openDetail() {
    this.showDetail = true;
  }

  closeDetail() {
    this.showDetail = false;
  }

}

```

In your html:

```html
<button (click)="openDetail()">Open detail</button>

<ddr-detail *ngIf="showDetail" (close)="closeDetail()">

  <h1 detail-title>Example</h1>

  <div class="row" detail-content>
    <div class="col-12">
      <form>

        <div class="row form-group">
          <div class="col-12">
            <label for="field1">Field 1</label>
            <input type="text" class="form-control" id="field1">
          </div>
        </div>

        <div class="row form-group">
          <div class="col-12">
            <label for="field2">Field 2</label>
            <input type="text" class="form-control" id="field2">
          </div>
        </div>

        <div class="row form-group">
          <div class="col-12">
            <label for="field3">Field 3</label>
            <input type="text" class="form-control" id="field3">
          </div>
        </div>

        <div class="row form-group">
          <div class="col-12">
            <button class="btn btn-block btn-primary" type="button">Save</button>
          </div>
        </div>

      </form>
    </div>
  </div>

</ddr-detail>

```

## Outputs

| Output  | Description |
| ------------- | ------------- |
| close  | Event when click in X |
