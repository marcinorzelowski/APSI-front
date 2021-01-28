import {Component, OnInit} from '@angular/core';
import {DataService} from '../../service/data.service';
import {Specification} from '../../model/specification.model';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';
import {Test} from '../../model/test.model';

@Component({
  selector: 'app-group-add',
  templateUrl: './group-add.component.html',
  styleUrls: ['./group-add.component.css']
})
export class GroupAddComponent implements OnInit {

  specifications: Specification[] = [];
  tests: Test[] = [];
  testName: string;
  speccName: string;

  constructor(private dataService: DataService, private router: Router) {

  }

  ngOnInit(): void {
    this.dataService.getSpecs().then(res => {
      this.specifications = res;
      this.speccName = this.specifications[0].spec_name;
    });
    this.dataService.getTests().subscribe(
      (data: Test[]) => {
        this.tests = data;
        this.testName = data[0].name;
      });
  }

  onSubmit(addGroup: NgForm): void {
    const name: string = addGroup.value.name;
    const testName: string = addGroup.value.testName;
    const specName: string = addGroup.value.specName;
    this.dataService.addGroup(name, testName, specName)
      .then((response) => {
        alert(this.mapResponse(response.msg));
        return response;
      })
      .catch((error: HttpErrorResponse) => alert(this.mapResponse(error.message)))
      .then(() => this.router.navigate(['dashboard']));
  }

  private mapResponse(msg: string): string {
    if (msg === 'success') {
      return 'Adding group was successful';
    } else {
      return 'Something went wrong. Add another entry';
    }
  }
}
