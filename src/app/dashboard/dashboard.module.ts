import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard.component';
import {DasbboardRoutingModule} from './dashboard-routing.module';
import {ScenarioComponent} from './scenario/scenario.component';
import {TestComponent} from './test/test.component';
import {TestListComponent} from './test/test-list/test-list.component';
import {TestAddComponent} from './test/test-add/test-add.component';
import {ScenarioListComponent} from './scenario/scenario-list/scenario-list.component';
import {ScenarioAddComponent} from './scenario/scenario-add/scenario-add.component';
import {SpecComponent} from './spec/spec.component';
import {SpecAddComponent} from './spec/spec-add/spec-add.component';
import {SpecListComponent} from './spec/spec-list/spec-list.component';
import {FormsModule} from '@angular/forms';
import {ResultsComponent} from "./results/results.component";


@NgModule({
  declarations: [
    DashboardComponent,
    ScenarioComponent,
    TestComponent,
    TestListComponent,
    TestAddComponent,
    ScenarioListComponent,
    ScenarioAddComponent,
    SpecComponent,
    SpecAddComponent,
    SpecListComponent,
    ResultsComponent],
  imports: [
    CommonModule,
    DasbboardRoutingModule,
    FormsModule
  ]
})
export class DashboardModule {
}
