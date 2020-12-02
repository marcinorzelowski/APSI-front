import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  loginGroup: FormGroup;



  ngOnInit(): void {
    this.loginGroup = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.minLength(8), Validators.email]),
      password: new FormControl('', [Validators.required])
    });

  }

  onSubmit() {

  }
}
