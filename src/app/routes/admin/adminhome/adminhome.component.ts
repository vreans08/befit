import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { CreateUserComponent } from '../../superadmin/create-user/create-user.component';
import { AddUserService } from '../../../shared/service/add-user.service';
import { EditUserComponent } from '../../edit-user/edit-user.component';
import { DeleteUserComponent } from '../../delete-user/delete-user.component';
import { ViewdetailsComponent } from '../../viewdetails/viewdetails.component';
@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.scss']
})
export class AdminhomeComponent implements OnInit {
  displayedColumns: string[] = ['firstName', 'lastName', 'userId', 'userName', 'role', 'phone', 'resetRequired','action'];
  DoctordataSource:any;
  PatientdataSource:any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  doctorList: any;
  patientList:any;

  constructor(public dialog: MatDialog, public addUser: AddUserService) { }

  ngOnInit() {
  
   this.getDoctorList();

   this.getPatientList();
  
  }

  getDoctorList(){
    this.addUser.getDoctorList().subscribe(doctorlst => {
      this.doctorList = doctorlst;
      this.DoctordataSource = new MatTableDataSource(this.doctorList);
      this.DoctordataSource.sort = this.sort;
      console.log(this.doctorList);
    });
  };
  getPatientList(){
    this.addUser.getPatientList().subscribe(patientList => {
      this.patientList = patientList;
      this.PatientdataSource = new MatTableDataSource(this.patientList);
      this.PatientdataSource.sort = this.sort;
      console.log(this.patientList);
    });
  };
  addAdmin(value) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.position = {
      'top': '10px'

    };
    dialogConfig.width = "500px";
    dialogConfig.data = {
      role: value,
      doctorList: this.doctorList,
      patientList: this.patientList
        };
    const dialogRef = this.dialog.open(CreateUserComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
      data => {
        console.log("Dialog output:", data);
        if (data == 'success') {
          this.getDoctorList();
          this.getPatientList();
        }

      }
    );
  }
  applyDoctorFilter(filterValue: string) {
    this.DoctordataSource.filter = filterValue.trim().toLowerCase();
  }
  applyPatientFilter(filterValue: string) {
    this.PatientdataSource.filter = filterValue.trim().toLowerCase();
  }

  editUser(element)
  {
    let elm = Object.assign({},element);

    console.log("EDIT USER: ",elm);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.position = {
      'top': '10px'

    };
    dialogConfig.autoFocus = false;
    dialogConfig.width = "500px";
    dialogConfig.data = {
      data: elm
    };
    const dialogRef = this.dialog.open(EditUserComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
      data => {
        console.log("Dialog output:", data);
        if (data == 'success') {
          this.getDoctorList();
          this.getPatientList();
        }

      }
    );
  }


  deleteUser(element)
  {
    let elm = Object.assign({},element);
    console.log("DELETE USER:",elm);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.position = {
      'top': '10px'

    };
    dialogConfig.width = "500px";
    dialogConfig.data = {
      data: elm
    };
    const dialogRef = this.dialog.open(DeleteUserComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
      data => {
        console.log("Dialog output:", data);
        if (data == 'success') {
          this.getDoctorList();
          this.getPatientList();
        }

      }
    );
  }
  viewDetails(data)
  {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.position = {
      'top': '10px'

    };
    dialogConfig.width = "500px";
    dialogConfig.data = {
      data: data
    };
    const dialogRef = this.dialog.open(ViewdetailsComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
      data => {
      }
    );
  }

}
