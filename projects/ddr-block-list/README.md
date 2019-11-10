# DdrBlockList

Component to show data in blocks like table.

## Installation

Using npm:

`npm install ddr-block-list`

## Usage

In app.module:

```ts
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

// Modulos
import { AppRoutingModule } from './app-routing.module';
import { DdrBlockListModule } from 'ddr-block-list';


// Componentes
import { AppComponent } from './app.component';
import { ExampleDdrBlockListComponent } from './example/example-ddr-block-list/showcase-ddr-block-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleDdrBlockListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DdrBlockListModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


```
In your ts:

```ts

import { DdrAction } from './../../../../projects/ddr-block-list/src/lib/bean/ddr-action';
import { DdrBlockItem } from 'ddr-block-list';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-ddr-block-list',
  templateUrl: './example-ddr-block-list.component.html',
  styleUrls: ['./example-ddr-block-list.component.css']
})
export class ExampleDdrBlockListComponent implements OnInit {

  public blockItems: DdrBlockItem[];

  public CANCEL_APPOITMENT: string = "CANCEL_APPOITMENT"
  public BEFORE_APPOINTMENTS: string = "BEFORE_APPOINTMENTS"

  constructor() {
    this.blockItems = [];
  }

  ngOnInit() {

    let items = [
      {
        "date": "2019-09-09",
        "status": "complete",
        "client": "Fernando",
        "age": 29
      },
      {
        "date": "2019-10-10",
        "status": "canceled",
        "client": "Pepe",
        "age": 17
      },
      {
        "date": "2019-09-09",
        "status": "in course",
        "client": "Manuel",
        "age": 80
      },
      {
        "date": "2019-12-12",
        "status": "unknown",
        "client": "Fernando",
        "age": 10
      },
      {
        "date": "2019-09-09",
        "status": "complete",
        "client": "Fernando",
        "age": 29
      },
      {
        "date": "2019-10-10",
        "status": "canceled",
        "client": "Pepe",
        "age": 17
      },
      {
        "date": "2019-09-09",
        "status": "in course",
        "client": "Manuel",
        "age": 80
      },
      {
        "date": "2019-12-12",
        "status": "unknown",
        "client": "Fernando",
        "age": 10
      },
      {
        "date": "2019-09-09",
        "status": "complete",
        "client": "Fernando",
        "age": 29
      },
      {
        "date": "2019-10-10",
        "status": "canceled",
        "client": "Pepe",
        "age": 17
      },
      {
        "date": "2019-09-09",
        "status": "in course",
        "client": "Manuel",
        "age": 80
      },
      {
        "date": "2019-12-12",
        "status": "unknown",
        "client": "Fernando",
        "age": 10
      },
      {
        "date": "2019-09-09",
        "status": "complete",
        "client": "Fernando",
        "age": 29
      },
      {
        "date": "2019-10-10",
        "status": "canceled",
        "client": "Pepe",
        "age": 17
      },
      {
        "date": "2019-09-09",
        "status": "in course",
        "client": "Manuel",
        "age": 80
      },
      {
        "date": "2019-12-12",
        "status": "unknown",
        "client": "Fernando",
        "age": 10
      },
      {
        "date": "2019-09-09",
        "status": "complete",
        "client": "Fernando",
        "age": 29
      },
      {
        "date": "2019-10-10",
        "status": "canceled",
        "client": "Pepe",
        "age": 17
      },
      {
        "date": "2019-09-09",
        "status": "in course",
        "client": "Manuel",
        "age": 80
      },
      {
        "date": "2019-12-12",
        "status": "unknown",
        "client": "Fernando",
        "age": 10
      },
      {
        "date": "2019-09-09",
        "status": "complete",
        "client": "Fernando",
        "age": 29
      },
      {
        "date": "2019-10-10",
        "status": "canceled",
        "client": "Pepe",
        "age": 17
      },
      {
        "date": "2019-09-09",
        "status": "in course",
        "client": "Manuel",
        "age": 80
      },
      {
        "date": "2019-12-12",
        "status": "unknown",
        "client": "Fernando",
        "age": 10
      },
      {
        "date": "2019-09-09",
        "status": "complete",
        "client": "Fernando",
        "age": 29
      },
      {
        "date": "2019-10-10",
        "status": "canceled",
        "client": "Pepe",
        "age": 17
      },
      {
        "date": "2019-09-09",
        "status": "in course",
        "client": "Manuel",
        "age": 80
      },
      {
        "date": "2019-12-12",
        "status": "unknown",
        "client": "Fernando",
        "age": 10
      },
      {
        "date": "2019-09-09",
        "status": "complete",
        "client": "Fernando",
        "age": 29
      },
      {
        "date": "2019-10-10",
        "status": "canceled",
        "client": "Pepe",
        "age": 17
      },
      {
        "date": "2019-09-09",
        "status": "in course",
        "client": "Manuel",
        "age": 80
      },
      {
        "date": "2019-12-12",
        "status": "unknown",
        "client": "Fernando",
        "age": 10
      },
      {
        "date": "2019-09-09",
        "status": "complete",
        "client": "Fernando",
        "age": 29
      },
      {
        "date": "2019-10-10",
        "status": "canceled",
        "client": "Pepe",
        "age": 17
      },
      {
        "date": "2019-09-09",
        "status": "in course",
        "client": "Manuel",
        "age": 80
      },
      {
        "date": "2019-12-12",
        "status": "unknown",
        "client": "Fernando",
        "age": 10
      }
    ];

    let actions: DdrAction[] = [
      {
        'label': "Cancelar cita",
        'value': this.CANCEL_APPOITMENT
      },
      {
        'label': "Ver anteriores citas",
        "value": this.BEFORE_APPOINTMENTS,
        "icon": "fa fa-file"
      }
    ];

    items.forEach(item => {

      let blockItem = new DdrBlockItem();

      blockItem.item = item;

      switch (item.status) {
        case "complete":
          blockItem.borderColor = "green"
          break;
        case "canceled":
          blockItem.borderColor = "red"
          break;
        case "in course":
          blockItem.borderColor = "blue"
          break;
        case "unknown":
          blockItem.borderColor = "grey"
          break;
      }

      blockItem.actions = item.age >= 18 ? actions : actions.filter((act, index) => index === 0);

      this.blockItems.push(blockItem);

    })


  }

  getAction($event) {
    console.log($event);
  }

  selectItem($event) {
    console.log($event);
  }

}


```

In your html:

```html
<ddr-block-list
  [blockItems]="blockItems"
  labelNoResults="No hay que mostrar"
  previousLabel="Previous"
  nextLabel="Next"
  pagination="5"
  (actionSelected)="getAction($event)"
  (itemSelected)="selectItem($event)">

  <ng-template #templateInfoAdditional let-item="item">
    <span>{{item.date | date: 'dd/MMM/yyyy'}}</span>
  </ng-template>

  <ng-template #templateHeader let-item="item">
    <span>{{item.client}}</span>
  </ng-template>

  <ng-template #templateData let-item="item">

    <ddr-block-data-item
      label="Estado"
      [value]="item.status">
    </ddr-block-data-item>
    <ddr-block-data-item
      label="Edad"
      [value]="item.age">
    </ddr-block-data-item>

  </ng-template>

</ddr-block-list>

```

## Inputs

| Input  | Description |
| ------------- | ------------- |
| blockItems  | Elements to show |
| labelNoResults  | Label when there are not items |
| showHeader  | No show header |
| showInfoAdditional  | No show info-additional |
| showActions  | No show actions |
| pagination  | Pagination |
| previousLabel  | Label previous pagination |
| nextLabel  | Label next pagination |

## Outputs

| Output  | Description |
| ------------- | ------------- |
| itemSelected  | Event when click in item |
| actionSelected  | Event when click action |
