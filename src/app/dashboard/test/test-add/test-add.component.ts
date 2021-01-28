import {Component, OnInit} from '@angular/core';
import {Scenario} from '../../model/scenario.model';
import {DataService} from '../../service/data.service';
import {Specification} from '../../model/specification.model';
import {NgForm} from '@angular/forms';
import {Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-test-add',
  templateUrl: './test-add.component.html',
  styleUrls: ['./test-add.component.css']
})
export class TestAddComponent implements OnInit {

  scenarios: Scenario[] = [];
  specifications: Specification[] = [];
  testTypes: { id: number, name: string }[] = [
    {id: 1, name: 'Integration'},
    {id: 2, name: 'Unit'},
    {id: 3, name: 'Other'},
  ];

  testType: string;
  scenarioName: string;
  specName: string;

  constructor(private dataService: DataService, private router: Router) {

  }

  ngOnInit(): void {
    this.dataService.getScenarios().then(res => {
      this.scenarios = res;
      this.scenarioName = this.scenarios[0]['name'];
    });
    this.dataService.getSpecs().then(res => {
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
    this.dataService.addTest(name, data, executeDate, testType, scenarioName, specName)
      .then((response) => {
        alert(this.mapResponse(response.msg));
        return response;
      })
      .catch((error: HttpErrorResponse) => alert(this.mapResponse(error.message)))
      .then(() => this.router.navigate(['dashboard']));
  }

  private mapResponse(msg: string): string {
    if (msg === 'success') {
      return 'Adding test was successful';
    } else {
      return 'Somethin went wrong';
    }
  }
}
