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
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getResults().then(
      (data: Result[]) => this.results = data
    );
  }

}
