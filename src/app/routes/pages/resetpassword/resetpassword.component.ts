import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../../../shared/service/login.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {

  oldPassword: any;
  newPassword: any;
  confirmNewPassword: any;
  data: any;


  constructor(private dialogRef: MatDialogRef<ResetpasswordComponent>, private loginService: LoginService, private _http: HttpClient, public snackBar: MatSnackBar
    , @Inject(MAT_DIALOG_DATA) data, ) {
    this.data = data;
  }

  ngOnInit() {
  }

  resetPassword() {
    if(this.newPassword === this.confirmNewPassword)
    {
      let resetData = {
        role: this.data.role,
        userName: this.data.logindata.userName,
        oldPassword: this.oldPassword,
        newPassword: this.newPassword
      }
      this.loginService.resetPassword(resetData).subscribe(resetRes => {
        console.log(resetRes);
        if(resetRes["success"])
        {
            this.snackBar.open("Password Reset Successful",'',{
              duration:2000
            });
            this.dialogRef.close("success");
        }
        else
        {
          this.snackBar.open("Incorrect Details. Please try again.",'',{
            duration: 2000
          })
        }
      })
    }
    else
    {
      this.snackBar.open("New Password doesn't match with the confirm password",'',{
        duration: 2000
      })
    }
 
  }
}
