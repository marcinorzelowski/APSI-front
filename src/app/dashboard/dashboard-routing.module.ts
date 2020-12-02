import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [{
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DasbboardRoutingModule { }
