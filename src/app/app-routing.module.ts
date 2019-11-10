import { ShowcaseDdrLoadIframeComponent } from './showcase/showcase-ddr-load-iframe/showcase-ddr-load-iframe.component';
import { ShowcaseDdrClickOutsideComponent } from './showcase/showcase-ddr-click-outside/showcase-ddr-click-outside.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowcaseDdrExampleComponent } from './showcase/showcase-ddr-example/showcase-ddr-example.component';
import { ShowcaseDdrJoinPipeComponent } from './showcase/showcase-ddr-join-pipe/showcase-ddr-join-pipe.component';
import { ShowcaseDdrSpinnerComponent } from './showcase/showcase-ddr-spinner/showcase-ddr-spinner.component';
import { ShowcaseDdrToastComponent } from './showcase/showcase-ddr-toast/showcase-ddr-toast.component';
import { ShowcaseDdrDropdownComponent } from './showcase/showcase-ddr-dropdown/showcase-ddr-dropdown.component';
import { ShowcaseDdrConfigurationComponent } from './showcase/showcase-ddr-configuration/showcase-ddr-configuration.component';
import { ShowcaseDdrDetailComponent } from './showcase/showcase-ddr-detail/showcase-ddr-detail.component';
import { ShowcaseDdrBlockListComponent } from './showcase/showcase-ddr-block-list/showcase-ddr-block-list.component';

const routes: Routes = [
  {path: 'ddr-example', component: ShowcaseDdrExampleComponent},
  {path: 'ddr-join-pipe', component: ShowcaseDdrJoinPipeComponent},
  {path: 'ddr-spinner', component: ShowcaseDdrSpinnerComponent},
  {path: 'ddr-toast', component: ShowcaseDdrToastComponent},
  {path: 'ddr-click-outside', component: ShowcaseDdrClickOutsideComponent},
  {path: 'ddr-dropdown', component: ShowcaseDdrDropdownComponent},
  {path: 'ddr-load-iframe', component: ShowcaseDdrLoadIframeComponent},
  {path: 'ddr-configuration', component: ShowcaseDdrConfigurationComponent},
  {path: 'ddr-detail', component: ShowcaseDdrDetailComponent},
  {path: 'ddr-block-list', component: ShowcaseDdrBlockListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
