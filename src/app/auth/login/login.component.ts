import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService,
              private route: ActivatedRoute,
              private router: Router) { }
  loginGroup: FormGroup;



  ngOnInit(): void {
    this.loginGroup = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.minLength(8), Validators.email]),
      password: new FormControl('', [Validators.required])
    });

  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    this.authService.login(
      this.loginGroup.controls.email.value,
      this.loginGroup.controls.password.value
    ).subscribe(
      () => this.router.navigate(['../dashboard'], {relativeTo: this.route})
    );
  }

  goToRegisterPage(): void {
    this.router.navigate(['../register'], {relativeTo: this.route});
  }
}
