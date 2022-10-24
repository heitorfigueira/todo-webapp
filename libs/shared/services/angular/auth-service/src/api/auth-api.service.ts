import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

import { Session, SigninRequest, SignupRequest } from '@authentication-domain';

export enum AuthApiEndpoints {
  SIGNIN = "Auth/signin",
  SIGNUP = "Auth/signup",
  SIGNOFF = "Auth/signoff"
}

@Injectable({
  providedIn: 'root',
})
export class AuthApiService {
  BASE_URL = 'https://localhost:7090/'

  constructor(private http: HttpClient) {}

  signin(param: SigninRequest) {
    return this.post(this.BASE_URL + AuthApiEndpoints.SIGNIN, param);
  }

  signup(param: SignupRequest) {
    return this.post(this.BASE_URL + AuthApiEndpoints.SIGNUP, param);
  }

  signoff(param: Session) {
    return this.post(this.BASE_URL + AuthApiEndpoints.SIGNOFF, param);
  }

  private post<TType>(url: string, param: TType) {
    return this.http.post(url, param).pipe(catchError(this.handleError))
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
