import {Component, OnInit} from '@angular/core';
import {Scenario} from '../../model/scenario.model';
import {DataService} from '../../service/data.service';
import {Specification} from '../../model/specification.model';
import {NgForm} from '@angular/forms';
import {Test} from '../../model/test.model';

@Component({
  selector: 'app-test-add',
  templateUrl: './test-add.component.html',
  styleUrls: ['./test-add.component.css']
})
export class TestAddComponent implements OnInit {

  scenarios: Scenario[] = [];
  specifications: Specification[] = [];
  testTypes: { id: number, name: string }[] = [
    {id: 1, name: 'One'},
    {id: 2, name: 'Two'},
    {id: 3, name: 'Three'},
  ];

  testType: string;
  scenarioName: string;
  specName: string;

  constructor(private dataService: DataService) {

  }

  ngOnInit(): void {
    this.dataService.getScenarios().subscribe(res => {
      this.scenarios = res;
      this.scenarioName = this.scenarios[0]['name'];
    });
    this.dataService.getSpecs().subscribe(res => {
      this.specifications = res;
      this.specName = this.specifications[0]['spec_name'];
    });
    this.testType = this.testTypes[0]['name'];
  }

  onSubmit(addTest: NgForm): void {
    const name: string = addTest.value.name;
    const data: string = addTest.value.data;
    const executeDate: Date = addTest.value.executeDate;
    const testType: string = addTest.value.testName;
    const scenarioName: string = addTest.value.scenarioName;
    const specName: string = addTest.value.specName;
    this.dataService.addTest(name, data, executeDate, testType, scenarioName, specName).subscribe();
  }
}
