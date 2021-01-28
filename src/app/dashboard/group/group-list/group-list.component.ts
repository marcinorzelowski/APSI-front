import {Component, OnInit} from '@angular/core';
import {DataService} from '../../service/data.service';
import {HttpErrorResponse} from '@angular/common/http';
import {Router} from '@angular/router';
import {Group} from '../../model/group.model';

@Component({
  selector: 'app-test-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css']
})
export class GroupListComponent implements OnInit {
  groups: Group[] = [];

  constructor(private dataService: DataService, private router: Router) {
  }

  ngOnInit(): void {
    this.dataService.getGroup().subscribe(
      (data: Group[]) => this.groups = data
    );
  }

  onClick(name: string): void {
    this.dataService.runGroup(name)
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
