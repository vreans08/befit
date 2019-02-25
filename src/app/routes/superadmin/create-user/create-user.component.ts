import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { AddUserService } from '../../../shared/service/add-user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  public userName: any;
  public userId: any;
  public role: any;
  public firstName: any;
  public lastName: any;
  public password: any;
  public email: any;
  public phone: any;


  public data: any;
  constructor(private dialogRef: MatDialogRef<CreateUserComponent>, private _http: HttpClient, public snackBar: MatSnackBar
    , @Inject(MAT_DIALOG_DATA) data, public adduser: AddUserService) {
    this.role = data.role
  }

  ngOnInit() {
  }
  cancel() {
    this.dialogRef.close();
  }
  save() {
    let permissionKey;
    if (this.role == 'admin')
      permissionKey = 'adminhome';
    else
      permissionKey = 'doctorhome';
    this.adduser.addUser({
      userName: this.userName,
      userId: this.userId,
      role: this.role,
      firstName: this.firstName,
      lastName: this.lastName,
      password: this.password,
      email: this.email,
      phone: this.phone,
      resetRequired: true,
      permissions: {
        routePermisions: {
          [permissionKey]: true
        },
        functionalPermissions: {
        }
      }
    }).subscribe(userData => {
      console.log(userData);
      if (userData["success"]) {
          this.snackBar.open(`${this.role} added successfuly`,'',{
            duration: 2000
          })
          this.dialogRef.close('success');
      }
    })
  }
}
