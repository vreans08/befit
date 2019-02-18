import { Observable, BehaviorSubject, forkJoin, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap, retry, concatMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http: HttpClient) { }
  
  login(userName,password,role) {
    return this._http.post("http://localhost:5600/login",{
      userName : userName,
      password: password,
      role: role
    }) .pipe(
      tap(data => console.log(data)),
      catchError(this.handleError('login', []))
    )
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
