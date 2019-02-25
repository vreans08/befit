import { Observable, BehaviorSubject, forkJoin, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap, retry, concatMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetListService {
  constructor(public _http:HttpClient) { }


  getDoctorList(){
    return this._http.get("http://localhost:5600/doctorList") .pipe(
      tap(data => console.log(data)),
      catchError(this.handleError('login', []))
    ); 
  }
  postDoctorList(data){
    return this._http.post("http://localhost:5600/doctorListUpdate",data) .pipe(
      tap(data => console.log(data)),
      catchError(this.handleError('login', []))
    ); 
  }
  getPatientList(){
    return this._http.get("http://localhost:5600/patientList") .pipe(
      tap(data => console.log(data)),
      catchError(this.handleError('login', []))
    ); 
  }
  postPatientList(data){
    return this._http.post("http://localhost:5600/patientListUpdate",data) .pipe(
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
