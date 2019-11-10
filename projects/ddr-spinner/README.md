# DdrSpinner

Component to show a spinner.

## Installation

Using npm:

`npm install ddr-spinner`

## Usage

In module:

```ts


// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Modules
import { AppRoutingModule } from './app-routing.module';
import { DdrExampleModule } from 'ddr-example';
import { DdrJoinPipeModule } from 'ddr-join-pipe';
import { DdrSpinnerModule } from 'ddr-spinner';

// Components
import { AppComponent } from './app.component';
import { ShowcaseDdrSpinnerComponent } from './examples/example-ddr-spinner/example-ddr-spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleDdrSpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DdrSpinnerModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

```
In your ts:

```ts
import { DdrSpinnerService } from 'ddr-spinner';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'example-ddr-spinner',
  templateUrl: './example-ddr-spinner.component.html',
  styleUrls: ['./example-ddr-spinner.component.css']
})
export class ExampleDdrSpinnerComponent implements OnInit {

  public embedded: boolean;

  constructor(private ddrSpinner: DdrSpinnerService) { 
    this.embedded = false;
  }

  ngOnInit() {
  }

  activateSpinner(){
    this.ddrSpinner.showSpinner();

    setTimeout(() => {
      this.ddrSpinner.hideSpinner();
    }, 50000);
  }

  changeMode(){
    this.embedded = !this.embedded;
  }

}


```

In your html:

```html

<div>
    {{'Mode: ' + (embedded ? 'Embedded' : 'No embedded')}}
</div>

<div>
    <button (click)="activateSpinner()">Activate spinner</button>
    <button (click)="changeMode()">Change mode</button>    
</div>

<div class="embedded">

    <ddr-spinner *ngIf="embedded" [embedded]="true"></ddr-spinner>

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam id cumque laudantium culpa voluptatum ea accusantium facere quam eos suscipit, voluptates unde possimus mollitia, illo quos incidunt fugit labore iure?</p>
</div>

<ddr-spinner *ngIf="!embedded"></ddr-spinner>
```


