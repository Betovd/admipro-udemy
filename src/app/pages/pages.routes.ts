import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficos1Component } from './graficos1/graficos1.component';
import { NopagefoundComponent } from '../shared/nopagefound/nopagefound.component';



const pagesRouter: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'progress', component: ProgressComponent},
      {path: 'graficas1', component: Graficos1Component},
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
