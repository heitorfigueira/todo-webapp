import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

import { Session, SigninRequest, SignupRequest } from '@authentication-domain';
@Injectable({
  providedIn: 'root',
})
export class AuthApiService {
  constructor(private http: HttpClient) {}

  signin(param: SigninRequest) {
    const url = `https://localhost:7090/Auth/signin`;
    return this.http.post(url, param).pipe(
      catchError(this.handleError)
    );
  }

  signup(param: SignupRequest) {
    const url = `https://localhost:7090/Auth/signup`;
    return this.http.post(url, param).pipe(
      catchError(this.handleError)
    );
  }

  signoff(param: Session) {
    const url = `https://localhost:7090/Auth/signoff`;
    return this.http.post(url, param).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
