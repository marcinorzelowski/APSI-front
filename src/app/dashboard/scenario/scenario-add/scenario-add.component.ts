import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {DataService} from '../../service/data.service';

@Component({
  selector: 'app-scenario-add',
  templateUrl: './scenario-add.component.html',
  styleUrls: ['./scenario-add.component.css']
})
export class ScenarioAddComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  onSubmit(addScenario: NgForm): void {
    const name = addScenario.value.name;
    const description = addScenario.value.description;
    this.dataService.addScenario(name, description).subscribe();
  }
}
