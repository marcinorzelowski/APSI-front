import { Component, OnInit } from '@angular/core';
import {DataService} from '../../service/data.service';
import {Test} from '../../model/test.model';

@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.css']
})
export class TestListComponent implements OnInit {
  tests: Test[] = [];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getTests().subscribe(
      (data: Test[]) => this.tests = data
    );
  }

}
