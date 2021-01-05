import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import {environment} from '../../environments/environment';
import {User} from './user.model';
import {catchError, tap} from 'rxjs/operators';

const AUTH_API = environment.apiUrl;
export interface AuthData {
  access_token: string;
  refresh_token: string;
}

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedUser = new BehaviorSubject<User>(null);
  constructor(private http: HttpClient) { }

  register(email: string, password: string): Observable<any>{
    console.log('hola.');
    return this.http.post<AuthData>(AUTH_API + '/register', {
      email,
      password
    },
      httpOptions).pipe(
      catchError(this.handleError),
      tap(responseData => {
        console.log(responseData);
        this.handleAuthentication(
          email,
          responseData
        );
      })
    );
  }

  login(email: string, password: string): Observable<any>{
    return this.http.post(AUTH_API + '/login', {
      email,
      password
    });
  }

  private handleAuthentication(
    email: string,
    authData: AuthData
  ): void {
    const user = new User(email, authData.access_token, authData.refresh_token);
    this.loggedUser.next(user);
    localStorage.setItem('userData', JSON.stringify(user));
  }

  private handleError(errorResponse: HttpErrorResponse): Observable<never> {
    return throwError(errorResponse.error.message);
  }
}
