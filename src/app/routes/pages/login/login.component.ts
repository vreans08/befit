import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../../core/settings/settings.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { AnyARecord } from 'dns';
import { LoginService } from '../../../shared/service/login.service';
import { MatSnackBar, MatDialog, MatDialogConfig } from '@angular/material';
import { DataService } from '../../../shared/service/data.service';
import { Router } from '@angular/router';
import { ResetpasswordComponent } from '../resetpassword/resetpassword.component';

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

    constructor(public loginService: LoginService, public snackbar: MatSnackBar, public dialog: MatDialog, public dataService: DataService, public router: Router) {


    }

    ngOnInit() {
        sessionStorage.removeItem('loginData');
        sessionStorage.removeItem('mytree');
    }

    login() {
        if (this.role == 'superAdmin')
            this.loginService.login(this.userName, this.password, this.role).subscribe(loginData => {
                console.log(loginData);
                if (loginData["success"]) {
                    if (loginData["resetRequired"]) {

                    }
                    else {
                        this.snackbar.open('Welcome ' + loginData["firstName"], '', {
                            duration: 3000
                        });
                        this.dataService.setLoginData(loginData);
                        if (loginData["role"] == "superAdmin")
                            this.router.navigate([
                                "superadmin"
                            ]);
                    }

                }

                else
                    this.snackbar.open('Login Failed - Invalid Credentials… Please Try Again', '', {
                        panelClass: "loginFail",
                        duration: 3000
                    })
            })
        else if (this.role == 'admin') {
            this.loginService.roleLogin(this.userName, this.password, this.role).subscribe(loginData => {
                console.log(loginData);
                if (loginData["success"]) {
                    if (loginData["resetRequired"]) {
                        console.log("Resest Required ", loginData);
                        this.resetPassword(loginData);
                    }
                    else {
                        console.log("Resest Required ", loginData);
                        this.snackbar.open('Welcome ' + loginData["firstName"], '', {
                            duration: 3000
                        });
                        this.dataService.setLoginData(loginData);
                        if (loginData["role"] == "admin")
                            this.router.navigate([
                                "adminhome"
                            ]);
                    }

                }

                else
                    this.snackbar.open('Login failed.', '', {
                        panelClass: "loginFail",
                        duration: 3000
                    })
            });
        }
        else if (this.role == 'doctor') {
            this.loginService.roleLogin(this.userName, this.password, this.role).subscribe(loginData => {
                console.log(loginData);
                if (loginData["success"]) {
                    if (loginData["resetRequired"]) {
                        console.log("Resest Required ", loginData);
                        this.resetPassword(loginData);

                    }
                    else {
                        console.log("Resest Required ", loginData);
                        this.snackbar.open('Welcome ' + loginData["firstName"], '', {
                            duration: 3000
                        });
                        this.dataService.setLoginData(loginData);
                        if (loginData["role"] == "doctor")
                            this.router.navigate([
                                "doctorhome"
                            ]);
                    }

                }

                else
                    this.snackbar.open('Login failed.', '', {
                        panelClass: "loginFail",
                        duration: 3000
                    })
            });
        }
        else if (this.role == 'patient') {
            this.loginService.roleLogin(this.userName, this.password, this.role).subscribe(loginData => {
                console.log(loginData);
                if (loginData["success"]) {
                    if (loginData["resetRequired"]) {
                        console.log("Resest Required ", loginData);
                        this.resetPassword(loginData);

                    }
                    else {
                        console.log("Resest Required ", loginData);
                        this.snackbar.open('Welcome ' + loginData["firstName"], '', {
                            duration: 3000
                        });
                        this.dataService.setLoginData(loginData);
                        if (loginData["role"] == "patient")
                            this.router.navigate([
                                "patienthome"
                            ]);
                    }

                }

                else
                    this.snackbar.open('Login failed.', '', {
                        panelClass: "loginFail",
                        duration: 3000
                    })
            });
        }
    }

    resetPassword(loginData) {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.position = {
            'top': '10px'

        };
        dialogConfig.width = "500px";
        dialogConfig.data = {
            role: this.role,
            logindata: loginData
        };
        const dialogRef = this.dialog.open(ResetpasswordComponent, dialogConfig);
        dialogRef.afterClosed().subscribe(
            data => {
                console.log("Dialog output:", data);
                if (data == 'success') {
                    this.role = '';
                    this.userName = '';
                    this.password = '';
                    this.snackbar.open("Password reset successful. Please login to continue.",'',{
                        duration: 3000
                    })
                }

            }
        );
    }


}
