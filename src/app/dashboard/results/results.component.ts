import {Component, OnInit} from '@angular/core';
import {DataService} from '../service/data.service';
import {Result} from '../model/result.model';
import {Test} from "../model/test.model";


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  results: Result[] = [];
  chartResults = [];

  failedTests = [];
  passedTests = [];

  testNames = [];

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {

    this.dataService.getTests().subscribe(
      (data: Test[]) => {
        data.forEach(t => this.testNames.push(t.name)); });

    this.dataService.getResults().then(
      (data: Result[]) => this.results = data);

/*    this.dataService.getResults().then(
      (data: Result[]) => this.results = data
    );
    this.dataService.getTests().subscribe(
      (data: Test[]) => {
        data.forEach(t => this.testNames.push(t.name));
        this.dataService.getResultsCharts(this.testNames[0]).then(
          dataCharts => {
            const i = 0;
            dataCharts.forEach(
              d => {
                this.chartResults.push(
                  {
                    name: 'spec' + i.toString(),
                    value: d.time
                  });
              }
            );
          }
        );
      }
    );*/

    for (let i = 0; i < 4; i++) {
      this.chartResults.push(
        {
          name: 'Specification  ' + i.toString(),
          value: Math.floor(Math.random() * (400 - 0)) + 0
        }
      );
    }

  }

  reloadData(value: string): void {
    console.log('the selected value is ' + value);
    const chartNewData = [];
    for (let i = 0; i < 4; i++) {
      chartNewData.push(
        {
          name: 'Specification  ' + i.toString(),
          value: Math.floor(Math.random() * (400 - 0)) + 0
        }
      );
      this.chartResults = [...chartNewData];
    }
/*    this.dataService.getResultsCharts(value).then(
      data => {
        data.forEach(
          d => {
            this.chartResults.push(
              {
                name: d.spec_name,
                value: d.time
              });

          }
        );
      }
    );*/
  }
}
