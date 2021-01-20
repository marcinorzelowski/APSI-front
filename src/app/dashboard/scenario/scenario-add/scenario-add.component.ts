import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {DataService} from '../../service/data.service';
import {Router} from '@angular/router';
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-scenario-add',
  templateUrl: './scenario-add.component.html',
  styleUrls: ['./scenario-add.component.css']
})
export class ScenarioAddComponent implements OnInit {

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(addScenario: NgForm): void {
    const name = addScenario.value.name;
    const description = addScenario.value.description;
    this.dataService.addScenario(name, description)
      .then((response) => {
        alert(this.mapResponse(response.msg));
        return response;
      })
      .catch((error: HttpErrorResponse) => alert(this.mapResponse(error.message)))
      .then(() => this.router.navigate(['dashboard']));
  }

  private mapResponse(msg: string): string {
    if (msg === 'success') {
      return 'Adding scenario was successful';
    } else {
      return 'Somethin went wrong';
    }
  }
}
