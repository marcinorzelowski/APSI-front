import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../auth.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerGroup: FormGroup;
  errorMessage = null;
  constructor(private authService: AuthService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.registerGroup = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.minLength(8), Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(4)]),
      password2: new FormControl('', [Validators.required, Validators.minLength(4)])
    });
  }

  onSubmit(): void {
    if (this.registerGroup.controls.password.value !== this.registerGroup.controls.password2.value) {
      this.errorMessage = 'Hasła muszą być takie same';
      return;
    }
    if (this.registerGroup.valid) {
      this.authService.register(
        this.registerGroup.controls.email.value,
        this.registerGroup.controls.password.value
      ).subscribe();
    } else {
      this.errorMessage = this.registerGroup.errors;
    }
  }

  goToLoginPage(): void {
    this.router.navigate(['../login'], {relativeTo: this.route});
  }
}
