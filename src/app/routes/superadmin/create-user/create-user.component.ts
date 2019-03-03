import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { AddUserService } from '../../../shared/service/add-user.service';
import { element } from '@angular/core/src/render3';

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
  public adminPermission = {
    "adminhome": true, 
    "assignpatient": true, 
    "addquestions": true
  }
  public doctorPermissions = { 
    "doctorhome": true, 
    "assignpatient": true, 
    "addquestions": true, 
    "consultation": true 
  };
  public patientPermissions = { 
    "patienthome": true 
  };
  public doctorList; patientList: any; adminList: any;


  public data: any;
  constructor(private dialogRef: MatDialogRef<CreateUserComponent>, private _http: HttpClient, public snackBar: MatSnackBar
    , @Inject(MAT_DIALOG_DATA) data, public adduser: AddUserService) {
    this.role = data.role;
    this.doctorList = data.doctorList;
    this.patientList = data.patientList;
    this.adminList = data.adminList;
  }

  ngOnInit() {
  }
  cancel() {
    this.dialogRef.close();
  }
  save() {
    let ItemsFound;

    if (this.role == 'doctor') {
      ItemsFound = this.doctorList.filter(elmnt => {
        return (elmnt.userName == this.userName || elmnt.userId == this.userId)
      });
      console.log("Item Exist: ", ItemsFound)
    }
    else if (this.role == 'admin') {
      ItemsFound = this.adminList.filter(elmnt => {
        return (elmnt.userName == this.userName || elmnt.userId == this.userId)
      });
      console.log("Item Exist: ", ItemsFound)
    }
    else if (this.role == 'patient') {
      ItemsFound = this.patientList.filter(elmnt => {
        return (elmnt.userName == this.userName || elmnt.userId == this.userId)
      });
      console.log("Item Exist: ", ItemsFound)
    }


    if (ItemsFound.length > 0) {
      this.snackBar.open("UserName/UserID already taken. Please enter some other UserName/UserID", '', {
        duration: 2000
      })
    }
    else {
      let permissionKey;
      if (this.role == 'admin') {
        permissionKey = this.adminPermission;
      }
      else if (this.role == "doctor")
        permissionKey = this.doctorPermissions;
      else
        permissionKey = this.patientPermissions;
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
          routePermissions: permissionKey,
          functionalPermissions: {
          }
        }
      }).subscribe(userData => {
        console.log(userData);
        if (userData["success"]) {
          this.snackBar.open(`${this.role} added successfuly`, '', {
            duration: 2000
          })
          this.dialogRef.close('success');
        }
      })
    }

  }
}
