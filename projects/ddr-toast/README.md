# DdrToast

Component to show notifications.

## Installation

Using npm:

`npm install ddr-toast`

## Usage

In app.module:

```ts


// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Modules
import { DdrToastModule } from 'ddr-toast';

// Components
import { AppComponent } from './app.component';
import { ExampleDdrToastComponent } from './example/example-ddr-toast/example-ddr-toast.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleDdrToastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DdrToastModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


```
In your ts:

```ts
import { Component, OnInit } from '@angular/core';
import { DdrToastService } from 'ddr-toast';
@Component({
  selector: 'example-ddr-toast',
  templateUrl: './example-ddr-toast.component.html',
  styleUrls: ['./example-ddr-toast.component.css']
})
export class ExampleDdrToastComponent implements OnInit {

  constructor(private toastService: DdrToastService) { }

  ngOnInit() {
  }

  addInfo() {
    this.toastService.addInfoMessage("titulo", "contenido")
  }
  addError() {
    this.toastService.addErrorMessage("titulo", "contenido")
  }
  addWarning() {
    this.toastService.addWarningMessage("titulo", "contenido")
  }
  addSuccess() {
    this.toastService.addSuccessMessage("titulo", "contenido")
  }

}

```

In your html:

```html
<ddr-toast [timeOut]="3000"></ddr-toast>

<button (click)="addInfo()">Mensaje de info</button>
<button (click)="addError()">Mensaje de error</button>
<button (click)="addWarning()">Mensaje de warning</button>
<button (click)="addSuccess()">Mensaje de success</button>
```


