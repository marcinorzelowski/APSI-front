import {Component, OnInit} from '@angular/core';
import {Scenario} from '../model/scenario.model';
import {DataService} from '../service/data.service';

@Component({
  selector: 'app-scenario',
  templateUrl: './scenario.component.html',
  styleUrls: ['./scenario.component.css']
})
export class ScenarioComponent implements OnInit {
  scenarios: Scenario[] = [];

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.dataService.getScenarios().then(
      (data: Scenario[]) => {
        this.scenarios = data;
      }
    );
  }
}
