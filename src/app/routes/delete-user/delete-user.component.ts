import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { AddUserService } from '../../shared/service/add-user.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss']
})
export class DeleteUserComponent implements OnInit {

  public deleteData: any;
  constructor(private dialogRef: MatDialogRef<DeleteUserComponent>,public adduser:AddUserService, private _http: HttpClient, public snackBar: MatSnackBar
    , @Inject(MAT_DIALOG_DATA) data, ) {
    this.deleteData = data.data;
  }

  ngOnInit() {
  }
  deleteUser(){
    let deleteData1 = this.deleteData;
    this.adduser.deleteUser(deleteData1).subscribe(userData => {
      console.log(userData);
      if (userData["success"]) {
          this.snackBar.open(`Details Deleted successfuly`,'',{
            duration: 2000
          })
          this.dialogRef.close('success');
      }
    })
  }

  noDelete(){

  }

}
