import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerGroup: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.registerGroup = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.minLength(8), Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    return true;

  }

}
