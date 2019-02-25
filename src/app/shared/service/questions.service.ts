import { Observable, BehaviorSubject, forkJoin, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap, retry, concatMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(public _http:HttpClient) { }

  uploadQuestions(data){
    return this._http.post("http://localhost:5600/uploadQuestions",data) .pipe(
      tap(data => console.log(data)),
      catchError(this.handleError('login', []))
    ); 
  }

  getQuestions(){
    return this._http.get("http://localhost:5600/getQuestions") .pipe(
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
