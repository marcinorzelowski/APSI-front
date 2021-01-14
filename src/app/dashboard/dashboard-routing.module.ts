import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import {NgModule} from '@angular/core';
import {ScenarioComponent} from './scenario/scenario.component';
import {ScenarioAddComponent} from './scenario/scenario-add/scenario-add.component';
import {SpecComponent} from './spec/spec.component';
import {SpecAddComponent} from './spec/spec-add/spec-add.component';
import {TestComponent} from './test/test.component';
import {TestAddComponent} from './test/test-add/test-add.component';
import {TestListComponent} from './test/test-list/test-list.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'scenario', component: ScenarioComponent, children: [
          {path: 'add', component: ScenarioAddComponent}
        ]
      },
      {
        path: 'spec', component: SpecComponent, children: [
          {path: 'add', component: SpecAddComponent}
        ]
      },
      {
        path: 'test', component: TestComponent, children: [
          {path: 'add', component: TestAddComponent},
          {path: 'list', component: TestListComponent}
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DasbboardRoutingModule {
}
