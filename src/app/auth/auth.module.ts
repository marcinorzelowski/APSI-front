import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AuthRoutingModule} from './register/auth-routing.module';



@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  exports: [
    RegisterComponent,
    AuthRoutingModule
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
