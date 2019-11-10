# DdrDropdown

Component to show options to choose, we can filter options.

## Installation

Using npm:

`npm install ddr-dropdown`

## Usage

In app.module:

```ts


// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Modulos
import { AppRoutingModule } from './app-routing.module';
import { DdrDropdownModule } from 'ddr-dropdown';

// Componentes
import { AppComponent } from './app.component';
import { ShowcaseDdrDropdownComponent } from './example/example-ddr-dropdown/example-ddr-dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleDdrDropdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DdrDropdownModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

```
In your ts:

```ts
import { DdrSelectItem } from 'ddr-dropdown';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-ddr-dropdown',
  templateUrl: './example-ddr-dropdown.component.html',
  styleUrls: ['./example-ddr-dropdown.component.css']
})
export class ExampleDdrDropdownComponent implements OnInit {

  options: DdrSelectItem[];
  valueSelect: string;

  constructor() { }

  ngOnInit() {
    this.options = [
      new DdrSelectItem('Label1', 'Value1'),
      new DdrSelectItem('Label2', 'Value2'),
      new DdrSelectItem('Label3', 'Value3'),
      new DdrSelectItem('Label4', 'Value4')
    ]
    this.valueSelect = 'Value3';
  }

  selectItem($event){
    console.log($event);
  }

}

```

In your html:

```html
<div class="row">
    <div class="col-4 mt-4">
        <ddr-dropdown 
            [valueSelect]="valueSelect" 
            [options]="options"
            labelNoResults="No results to show"
            (select)="selectItem($event)">

            <ng-template itemTemplate let-item="item">
                {{item.label + " - " + item.value}}
            </ng-template>

        </ddr-dropdown>

        <p>This text you cant see if open dropdown</p>

    </div>
</div>

```

## Inputs

| Input  | Description |
| ------------- | ------------- |
| options  | Options to show |
| valueSelect  | Value of item to preload  |
| labelNoResults  | Label to show when filter items and not found |

## Outputs

| Output  | Description |
| ------------- | ------------- |
| select  | Event when select item |
