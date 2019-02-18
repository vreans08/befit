import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { stat } from 'fs';
import { Route } from '@angular/compiler/src/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class RoutepermissionService {

  constructor(public route: Router,public dataService:DataService) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    let loginData = sessionStorage.getItem('loginData');
    loginData = JSON.parse(loginData);
    console.log(route);
    console.log(state);
    console.log(loginData);
    if (loginData["permissions"].routePermissions[route.data.route])
    { 
      this.dataService.setLoginData(loginData);
      return true;
    }
    else
      this.route.navigate([
        "login"
      ])
  }
}
