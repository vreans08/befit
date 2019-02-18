import { Observable, BehaviorSubject, forkJoin, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap, retry, concatMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddUserService { 

  constructor(public _http:HttpClient) { }


  addUser(data1) {
    return this._http.post("http://localhost:5600/newUser",{
      data1
    }) .pipe(
      tap(data => console.log(data)),
      catchError(this.handleError('login', []))
    )
  }

  getAdminList(){
    return this._http.get("http://localhost:5600/admin") .pipe(
      tap(data => console.log(data)),
      catchError(this.handleError('login', []))
    ); 
  }

  getDoctorList(){
    return this._http.get("http://localhost:5600/doctor") .pipe(
      tap(data => console.log(data)),
      catchError(this.handleError('login', []))
    ); 
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
