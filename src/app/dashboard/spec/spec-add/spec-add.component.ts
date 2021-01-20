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

  onSubmit(addScenario: NgForm): void {
    const name = addScenario.value.name;
    const paramInt1 = addScenario.value.paramInt1;
    const paramStr2 = addScenario.value.paramStr2;
    const paramStr3 = addScenario.value.paramStr3;

    const specToAdd = {
      'spec_name': name,
      'paramInt1': paramInt1,
      'paramStr2': paramStr2,
      'paramStr3': paramStr3
    }

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
      return 'Somethin went wrong';
    }
  }
}
