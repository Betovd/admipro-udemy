import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficos1Component } from './graficos1/graficos1.component';
import { PromesasComponent } from './promesas/promesas.component';
import { NopagefoundComponent } from '../shared/nopagefound/nopagefound.component';
import { AccoutSetingsComponent } from './accout-setings/accout-setings.component';
import { RxjsComponent } from './rxjs/rxjs.component';



const pagesRouter: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {path: 'dashboard', component: DashboardComponent, data: { titulo: 'Dasboard' }},
      {path: 'progress', component: ProgressComponent, data: { titulo: 'Progress' }},
      {path: 'graficas1', component: Graficos1Component, data: { titulo: 'Gráficas' }},
      {path: 'promesa1', component: PromesasComponent, data: { titulo: 'Promesa' }},
      {path: 'rxjs', component: RxjsComponent, data: { titulo: 'Rxjs Obserbales' }},
      {path: 'accountSetting', component: AccoutSetingsComponent, data: { titulo: 'Ajusntes del tema' }},
      {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
      {path: '**', component: NopagefoundComponent}
     ]
  }
];




@NgModule({
  imports: [RouterModule.forChild(pagesRouter)],
  exports: [RouterModule]
})
export class PagesRoutes { }
