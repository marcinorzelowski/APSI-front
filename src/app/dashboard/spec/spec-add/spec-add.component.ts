import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {DataService} from '../../service/data.service';
import {Router} from '@angular/router';
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-spec-add',
  templateUrl: './spec-add.component.html',
  styleUrls: ['./spec-add.component.css']
})
export class SpecAddComponent implements OnInit {

  constructor(private dataService: DataService, private router: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit(addSpec: NgForm): void {
    const name = addSpec.value.name;
    const url = addSpec.value.uerel;

    const specToAdd = {
      'spec_name': name,
      'url': url
    };

    this.dataService.addSpec(specToAdd)
      .then((response) => {
        alert(this.mapResponse(response.msg));
        return response;
      })
      .catch((error: HttpErrorResponse) => alert(this.mapResponse(error.message)))
      .then(() => this.router.navigate(['dashboard']));
  }

  private mapResponse(msg: string): string {
    if (msg === 'success') {
      return 'Adding spec was successful';
    } else {
      return 'Something went wrong. Insert another Specification name';
    }
  }
}
