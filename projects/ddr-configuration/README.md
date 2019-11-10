# DdrConfiguration

Service to load configuration from JSON.

## Installation

Using npm:

`npm install ddr-configuration`

## Usage

JSON data:

```js
{
    "value1": "value1",
    "value2": "value2",
    "showElement": true,
    "value3":{
        "subvalue1": "nested value"
    },
    "values": [
        {
            "label": "label1",
            "value": "value1"
        },
        {
            "label": "label2",
            "value": "value2"
        },
        {
            "label": "label3",
            "value": "value3"
        }
    ]
}
```

In app.module:

```ts

// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

// Modulos
import { AppRoutingModule } from './app-routing.module';
import { DdrConfigurationModule, DdrConfigurationService } from 'ddr-configuration';

// Componentes
import { AppComponent } from './app.component';
import { ExampleDdrConfigurationComponent } from './example/example-ddr-configuration/example-ddr-configuration.component';

export function configFactory(provider: DdrConfigurationService) {
  return () => provider.getDataFromJSON('assets/data/data.json');
}

@NgModule({
  declarations: [
    AppComponent,
    ShowcaseDdrConfigurationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DdrConfigurationModule
  ],
  providers: [
    DdrConfigurationService,
    {
      provide: APP_INITIALIZER,
      useFactory: configFactory,
      deps: [DdrConfigurationService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

```
In your ts:

```ts
import { DdrConfigurationService } from 'ddr-configuration';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-ddr-configuration',
  templateUrl: './example-ddr-configuration.component.html',
  styleUrls: ['./example-ddr-configuration.component.css']
})
export class ExampleDdrConfigurationComponent implements OnInit {

  constructor(private config: DdrConfigurationService) {
    console.log(this.config.getAllData());
    console.log(this.config.getData('variable2'))
  }

  ngOnInit() {
  }

}

```

In your html:

```html

<h3>Get simple value</h3>
<p>
  {{'value1' | getDataConf}}
</p>


<h3>Get nested value</h3>
<p>
  {{'value3.subvalue1' | getDataConf}}
</p>

<h3>Show value depends state</h3>
<p *ngIf="'showElement' | getDataConf">
  Show me!
</p>

<h3>Show values of array</h3>
<p *ngFor="let item of ('values' | getDataConf)">
  {{item.label + " - " + item.value}}
</p>

```

