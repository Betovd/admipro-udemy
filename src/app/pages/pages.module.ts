import { NgModule } from '@angular/core';

// Rutas


import { PagesComponent } from './pages.component';
import { PagesRoutes } from './pages.routes';
import { SharedModule } from './shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';


// Components




@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    PagesComponent
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    PagesComponent
  ],
  imports: [
    SharedModule,
    PagesRoutes
  ],
  providers: []

})

export class PagesModule { }
