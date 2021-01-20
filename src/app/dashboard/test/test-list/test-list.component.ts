import {Component, OnInit} from '@angular/core';
import {DataService} from '../../service/data.service';
import {Test} from '../../model/test.model';
import {HttpErrorResponse} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.css']
})
export class TestListComponent implements OnInit {
  tests: Test[] = [];

  constructor(private dataService: DataService, private router: Router) {
  }

  ngOnInit(): void {
    this.dataService.getTests().subscribe(
      (data: Test[]) => this.tests = data
    );
  }

  onClick(name: string): void {
    this.dataService.runTest(name)
      .then((response) => {
        alert(this.mapResponse(response.msg));
        return response;
      })
      .catch((error: HttpErrorResponse) => alert(this.mapResponse(error.message)));
  }

  private mapResponse(msg: string): string {
    if (msg === 'success') {
      return 'Running test was successful';
    } else {
      return 'Somethin went wrong';
    }
  }
}
