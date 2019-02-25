import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ChartsModule } from 'ng2-charts/ng2-charts';


// Rutas


import { PagesComponent } from './pages.component';
import { PagesRoutes } from './pages.routes';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficos1Component } from './graficos1/graficos1.component';



// Temporal
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficaDonaComponent } from '../components/grafica-dona/grafica-dona.component';
import { AccoutSetingsComponent } from './accout-setings/accout-setings.component';
import { SharedModule } from '../shared/shared.module';



// Components




@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    PagesComponent,
    IncrementadorComponent,
    Graficos1Component,
    GraficaDonaComponent,
    AccoutSetingsComponent
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    PagesComponent,
    Graficos1Component,
    GraficaDonaComponent,
    AccoutSetingsComponent
  ],
  imports: [
    SharedModule,
    PagesRoutes,
    FormsModule,
    ChartsModule
  ],
  providers: []

})

export class PagesModule { }
