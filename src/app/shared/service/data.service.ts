import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public loginData = new BehaviorSubject<object>({});


  constructor() { }

  setLoginData(data){
    this.loginData.next(data);
    sessionStorage.setItem('loginData',JSON.stringify(data));
  }
}
