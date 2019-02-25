import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { CreateUserComponent } from '../create-user/create-user.component';
import { AddUserService } from '../../../shared/service/add-user.service';

@Component({
  selector: 'app-superadminhome',
  templateUrl: './superadminhome.component.html',
  styleUrls: ['./superadminhome.component.scss']
})
export class SuperadminhomeComponent implements OnInit {
  displayedColumns: string[] = ['firstName', 'lastName', 'userId', 'userName', 'role', 'phone', 'email', 'resetRequired'];
  AdmindataSource: any;
  DoctordataSource:any;
  PatientdataSource:any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  doctorList: any;
  adminList: any;
  patientList:any;

  constructor(public dialog: MatDialog, public addUser: AddUserService) { }

  ngOnInit() {
   this.getAdminList();
   
   this.getDoctorList();

   this.getPatientList();
  
  }
  getAdminList(){
    this.addUser.getAdminList().subscribe(adminlst => {
      this.adminList = adminlst;
      this.AdmindataSource = new MatTableDataSource(this.adminList);
      this.AdmindataSource.sort = this.sort;
      console.log(this.adminList);
    });
  };
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
      role: value
    };
    const dialogRef = this.dialog.open(CreateUserComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
      data => {
        console.log("Dialog output:", data);
        if (data == 'success') {
          this.getAdminList();
          this.getDoctorList();
          this.getPatientList();
        }

      }
    );
  }
  applyAdminFilter(filterValue: string) {
    this.AdmindataSource.filter = filterValue.trim().toLowerCase();
  }
  applyDoctorFilter(filterValue: string) {
    this.DoctordataSource.filter = filterValue.trim().toLowerCase();
  }
  applyPatientFilter(filterValue: string) {
    this.PatientdataSource.filter = filterValue.trim().toLowerCase();
  }

}
