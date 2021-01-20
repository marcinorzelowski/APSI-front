import { Component, OnInit } from '@angular/core';
import {DataService} from '../../service/data.service';
import {Scenario} from '../../model/scenario.model';

@Component({
  selector: 'app-scenario-list',
  templateUrl: './scenario-list.component.html',
  styleUrls: ['./scenario-list.component.css']
})
export class ScenarioListComponent implements OnInit {
  scenarios: Scenario[] = [];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getScenarios().then(
      (data: Scenario[]) => this.scenarios = data
    );
  }
}
