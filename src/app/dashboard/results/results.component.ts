import { Component, OnInit } from '@angular/core';
import {DataService} from '../service/data.service';
import {Result} from '../model/result.model';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  results: Result[] = [];
  chartResults = [];

  // failedTests = [];
  // passedTests = [];

  testNames = ['first', 'second'];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {

      // this.dataService.getResults().then(
      //   (data: Result[]) => this.results = data
      // );
    // this.dataService.getTests().subscribe(
    //   (data: Test[]) => {
    //     data.forEach(t => this.testNames.push(t.name));
    //     this.dataService.getResultsCharts(this.testNames[0]).then(
    //       dataCharts => {
    //         dataCharts.forEach(
    //           d => {
    //             this.chartResults.push(
    //               {
    //                 name: d.spec_name,
    //                 value: d.time
    //               });
    //
    //           }
    //         );
    //       }
    //     );
    //   }
    // );
    //
      for (let i = 0; i < 10; i++) {
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
    for (let i = 0; i < 10; i++) {
      chartNewData.push(
        {
          name: 'Specification  ' + i.toString(),
          value: Math.floor(Math.random() * (400 - 0)) + 0
        }
      );
      this.chartResults = [...chartNewData];
    }
    // this.dataService.getResultsCharts(value).then(
    //   data => {
    //     data.forEach(
    //       d => {
    //         this.chartResults.push(
    //           {
    //             name: d.spec_name,
    //             value: d.time
    //           });
    //
    //       }
    //     );
    //   }
    // );
  }
}
