import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../../core/settings/settings.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { AnyARecord } from 'dns';
import { LoginService } from '../../../shared/service/login.service';
import { MatSnackBar } from '@angular/material';
import { DataService } from '../../../shared/service/data.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    userName: any;
    password: any;
    role: any;
    roles: Array<any> = [
        'admin', 'superAdmin', 'doctor', 'patient'
    ]

    constructor(public loginService: LoginService, public snackbar: MatSnackBar,public dataService:DataService,public router:Router ) {


    }

    ngOnInit() {

    }

    login() {
        this.loginService.login(this.userName, this.password, this.role).subscribe(loginData => {
            console.log(loginData);
            if (loginData["success"])
            {
                this.snackbar.open('Welcome ' + loginData["firstName"], '', {
                    duration: 2000
                });
                this.dataService.setLoginData(loginData);
                if(loginData["role"] == "superAdmin")
                this.router.navigate([
                    "superadmin"
                  ]);
            }
                
            else
                this.snackbar.open('Login failed.', '', {
                    panelClass: "loginFail",
                    duration: 2000
                })
        })
    }
}
