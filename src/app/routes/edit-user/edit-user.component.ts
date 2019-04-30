import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { AddUserService } from '../../shared/service/add-user.service';
import * as moment from 'moment';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  public editData: any;
  public randomPassword:any;
  constructor(private dialogRef: MatDialogRef<EditUserComponent>,public adduser: AddUserService, private _http: HttpClient, public snackBar: MatSnackBar
    , @Inject(MAT_DIALOG_DATA) data, ) {
    this.editData = data.data;
  }

  dobChange(event)
  {
    console.log(event);
    var ageDifMs = Date.now() - event.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    console.log("Age is: ", Math.abs(ageDate.getUTCFullYear() - 1970)) ;
    this.editData.age = Math.abs(ageDate.getUTCFullYear() - 1970);
  }
  ngOnInit() {
  }
  save() {
    let editData1 = this.editData;
    if(editData1.resetRequired && this.randomPassword)
    editData1.password = this.randomPassword;
    this.adduser.editUser(editData1).subscribe(userData => {
      console.log(userData);
      if (userData["success"]) {
          this.snackBar.open(`Details Edited successfuly`,'',{
            duration: 3000
          })
          this.dialogRef.close('success');
      }
    })
  }
  cancel(){
this.dialogRef.close();
  }
  generatePassword() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 8; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

   this.randomPassword = text;
  }
}
