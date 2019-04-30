import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { AddUserService } from '../../shared/service/add-user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-viewdetails',
  templateUrl: './viewdetails.component.html',
  styleUrls: ['./viewdetails.component.scss']
})
export class ViewdetailsComponent implements OnInit {

  public userName: any;
  public userId: any;
  public role: any;
  public relation : any = {
    type : '',
    name: ''
  }
  public dob: any;
  public age: any;
  public whatsapp: any;
  public referedBy:any;
  public address: any;
  public reason: any;
  public bloodgroup: any;
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
  constructor(private dialogRef: MatDialogRef<ViewdetailsComponent>, private _http: HttpClient, public snackBar: MatSnackBar
    , @Inject(MAT_DIALOG_DATA) data, public adduser: AddUserService) {
    this.patientList = data.data;
  
  }

  ngOnInit() {
  }
  close() {
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
        duration: 3000
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

      if  (this.role != "patient")
      {
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
              duration: 3000
            })
            this.dialogRef.close('success');
          }
        })
      }
      else
      {
        this.adduser.addUser({
          userName: this.userName,
          userId: this.userId,
          role: this.role,
          firstName: this.firstName,
          lastName: this.lastName,
          password: this.password,
          relationType: this.relation.type,
          relationName: this.relation.name,
          dob: this.dob,
          age: this.age,
          whatsapp: this.whatsapp,
          referedBy: this.referedBy,
          address: this.address,
          reason: this.reason,
          bloodgroup: this.bloodgroup,
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
              duration: 3000
            })
            this.dialogRef.close('success');
          }
        })
      }

    }

  }

  dobChange(event)
  {
    console.log(event);
    var ageDifMs = Date.now() - event.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    console.log("Age is: ", Math.abs(ageDate.getUTCFullYear() - 1970)) ;
    this.age = Math.abs(ageDate.getUTCFullYear() - 1970);
  }

}
