import { Component, OnInit } from '@angular/core';
import {DataService} from '../../service/data.service';
import {Specification} from '../../model/specification.model';

@Component({
  selector: 'app-spec-list',
  templateUrl: './spec-list.component.html',
  styleUrls: ['./spec-list.component.css']
})
export class SpecListComponent implements OnInit {
  specs: Specification[] = [];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getSpecs().then(
      (data: Specification[]) => this.specs = data
    );
  }
}
