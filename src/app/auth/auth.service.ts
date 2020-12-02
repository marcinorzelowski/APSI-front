import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

const AUTH_API = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http: HttpClient) { }

  register(email: string, password: string): Observable<any>{
    return this.http.post(AUTH_API + '/register', {
      email,
      password
    });
  }
}
