import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

// Modulos
import { AppRoutingModule } from './app-routing.module';
import { DdrExampleModule } from 'ddr-example';
import { DdrJoinPipeModule } from 'ddr-join-pipe';
import { DdrSpinnerModule } from 'ddr-spinner';
import { DdrToastModule } from 'ddr-toast';
import { DdrClickOutsideModule } from 'ddr-click-outside';
import { DdrDropdownModule } from 'ddr-dropdown';
import { DdrLoadIframeModule } from 'ddr-load-iframe';
import { DdrConfigurationModule, DdrConfigurationService } from 'ddr-configuration';
import { DdrDetailModule } from 'ddr-detail';
import { DdrBlockListModule } from 'ddr-block-list';


// Componentes
import { AppComponent } from './app.component';
import { ShowcaseDdrJoinPipeComponent } from './showcase/showcase-ddr-join-pipe/showcase-ddr-join-pipe.component';
import { ShowcaseDdrExampleComponent } from './showcase/showcase-ddr-example/showcase-ddr-example.component';
import { ShowcaseDdrSpinnerComponent } from './showcase/showcase-ddr-spinner/showcase-ddr-spinner.component';
import { ShowcaseDdrToastComponent } from './showcase/showcase-ddr-toast/showcase-ddr-toast.component';
import { ShowcaseDdrClickOutsideComponent } from './showcase/showcase-ddr-click-outside/showcase-ddr-click-outside.component';
import { ShowcaseDdrDropdownComponent } from './showcase/showcase-ddr-dropdown/showcase-ddr-dropdown.component';
import { ShowcaseDdrLoadIframeComponent } from './showcase/showcase-ddr-load-iframe/showcase-ddr-load-iframe.component';
import { ShowcaseDdrConfigurationComponent } from './showcase/showcase-ddr-configuration/showcase-ddr-configuration.component';
import { ShowcaseDdrDetailComponent } from './showcase/showcase-ddr-detail/showcase-ddr-detail.component';
import { ShowcaseDdrBlockListComponent } from './showcase/showcase-ddr-block-list/showcase-ddr-block-list.component';

export function configFactory(provider: DdrConfigurationService) {
  return () => provider.getDataFromJSON('assets/data/data.json');
}

@NgModule({
  declarations: [
    AppComponent,
    ShowcaseDdrExampleComponent,
    ShowcaseDdrJoinPipeComponent,
    ShowcaseDdrSpinnerComponent,
    ShowcaseDdrToastComponent,
    ShowcaseDdrClickOutsideComponent,
    ShowcaseDdrDropdownComponent,
    ShowcaseDdrLoadIframeComponent,
    ShowcaseDdrConfigurationComponent,
    ShowcaseDdrDetailComponent,
    ShowcaseDdrBlockListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DdrExampleModule,
    DdrJoinPipeModule,
    DdrSpinnerModule,
    DdrToastModule,
    DdrClickOutsideModule,
    DdrDropdownModule,
    DdrLoadIframeModule,
    DdrConfigurationModule,
    DdrDetailModule,
    DdrBlockListModule
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
