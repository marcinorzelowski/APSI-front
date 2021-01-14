import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {DataService} from '../../service/data.service';

@Component({
  selector: 'app-spec-add',
  templateUrl: './spec-add.component.html',
  styleUrls: ['./spec-add.component.css']
})
export class SpecAddComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  onSubmit(addScenario: NgForm): void {
    const name = addScenario.value.name;
    const paramInt1 = addScenario.value.paramInt1;
    const paramStr2 = addScenario.value.paramStr2;
    const paramStr3 = addScenario.value.paramStr3;

    this.dataService.addSpec({'spec_name': name, 'paramInt1': paramInt1, 'paramStr2': paramStr2, 'paramStr3': paramStr3}).subscribe();
  }
}
