import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthApiService {
  constructor(private http: HttpClient) {}

  signin(param: any) {
    const limit = 20;
    const url = `https://localhost:7090/Auth/signin`;
    return this.http.post(url, param).pipe(
      map((response: any) => {
        console.log(response)
        return response;
      })
    );
  }
}
