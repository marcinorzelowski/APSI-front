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
          responseData.access_token,
          responseData.refresh_token
        );
      })
    );
  }

  login(email: string, password: string): Observable<any>{
    return this.http.post(AUTH_API + '/login', {
      email,
      password
    },
      httpOptions).pipe(
        catchError(this.handleError),
      tap(responseData => {
        console.log(responseData);
        this.handleAuthentication(
          email,
          responseData.access_token,
          responseData.refresh_token
        );
      })
    );
  }

  autoLogin(): any {
    const user = JSON.parse(localStorage.getItem('userData'));
    if (!user) {
      return;
    } else {
      this.handleAuthentication(
        user.email,
        user.authToken,
        user.refreshToken
      );
    }

  }

  getTime(accessToken: string): any {
    const jwtData = accessToken.split('.')[1];
    const decodedJwtJsonData = window.atob(jwtData);
    const decodedJwtData = JSON.parse(decodedJwtJsonData);
    const keys = Object.keys(decodedJwtData);
    const jwtValues = keys.map(k => decodedJwtData[k]);
    return new Date(jwtValues[3] * 1000);
  }


  private handleAuthentication(
    email: string,
    accessToken: string,
    refreshToken: string
  ): void {
    const user = new User(email, accessToken, refreshToken);
    if (this.getTime(user.authToken) > new Date()) {
      this.loggedUser.next(user);
      localStorage.setItem('userData', JSON.stringify(user));
      console.log('Logged in. Token is valid till: ', this.getTime(user.authToken));
    } else {
      console.error('AccessToken is outdated.');
    }
  }

  private handleError(errorResponse: HttpErrorResponse): Observable<never> {
    return throwError(errorResponse.error.message);
  }
}
