import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig, MatPaginator, MatSort, MatTableDataSource, MatSnackBar } from '@angular/material';
import { CreateUserComponent } from '../superadmin/create-user/create-user.component';
import { AddUserService } from '../../shared/service/add-user.service';
import { GetListService } from '../..//shared/service/get-list.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import * as moment from 'moment';
import { DoctorassignComponent } from '../doctorassign/doctorassign.component';

@Component({
  selector: 'app-patientmap',
  templateUrl: './patientmap.component.html',
  styleUrls: ['./patientmap.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', display: 'none' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class PatientmapComponent implements OnInit {
  displayedColumns: string[] = ['firstName', 'lastName', 'userId', 'userName', 'phone', 'email'];
  columnNames = {
    firstName : 'First Name',
    lastName : 'Last Name',
    userId: 'User ID',
    userName : 'User Name',
    phone : 'Phone',
    email : 'Email'
  }
  DoctordataSource: any;
  PatientdataSource: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  assignPatient:any;
  doctorList: any;
  patientList: any;

  constructor(public dialog: MatDialog, public addUser: GetListService, public snackBar: MatSnackBar) { }

  ngOnInit() {

    this.getDoctorList();

    this.getPatientList();

  }
  getDoctorList() {
    this.addUser.getDoctorList().subscribe(doctorlst => {
      this.doctorList = doctorlst;

      this.DoctordataSource = new MatTableDataSource(this.doctorList);
      this.DoctordataSource.sort = this.sort;
      console.log(this.doctorList);
    });
  };
  getPatientList() {
    this.addUser.getPatientList().subscribe(patientList => {
      this.patientList = patientList;
      this.PatientdataSource = new MatTableDataSource(this.patientList);
      this.PatientdataSource.sort = this.sort;
      console.log(this.patientList);
    });
  };
  applyDoctorFilter(filterValue: string) {
    this.DoctordataSource.filter = filterValue.trim().toLowerCase();
  }
  applyPatientFilter(filterValue: string) {
    this.PatientdataSource.filter = filterValue.trim().toLowerCase();
  }

  assignDoctor(data, lastAssign) {
    this.assignPatient = data;
    console.log(data, lastAssign);
    console.log(this.doctorList);
    let DoctorDetails;
    let DoctorId;
    if (lastAssign == 'true') {
      DoctorDetails = this.doctorList.filter(filData => {
        return (filData["userId"]+' - '+filData["firstName"]) == (data["lastVisitedDoctor"]);
      });
      let Details = DoctorDetails[0];
      DoctorId = Details.userId + ' - ' + Details.firstName;
      if (Details.nextInLine[0] == 'NA') {
        Details.nextInLine[0] = {
          patientFirstName: data.firstName,
          patientLastName: data.lastName,
          patientUserId: data.userId
        }
      }
      else {
        Details.nextInLine.push({
          patientFirstName: data.firstName,
          patientLastName: data.lastName,
          patientUserId: data.userId
        })
      }
      this.addUser.postDoctorList(Details).subscribe(res => {
        console.log('response: '+ res);
        delete data.assign;
        data.nextAppointmentDate = moment().format('YYYY-MM-DD');
        data.nextAppointmentDoctor = DoctorId;
        this.addUser.postPatientList(data).subscribe(data => {
          this.getPatientList();
          this.snackBar.open("Doctor Assigned Successfully", '', {
            duration: 3000
          });
        })
          
      })
    }
    else {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.position = {
        'top': '10px'
  
      };
      dialogConfig.width = "500px";
      dialogConfig.data = {
        doctorList : this.doctorList,
        patient: data
      };
      const dialogRef = this.dialog.open(DoctorassignComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(
        doctorDetails => {
          console.log("Dialog output:", doctorDetails);
          if (data) {
            let Details = doctorDetails;
            DoctorId = Details.userId + ' - ' + Details.firstName;
            if (Details.nextInLine[0] == 'NA') {
              Details.nextInLine[0] = {
                patientFirstName: this.assignPatient.firstName,
                patientLastName: this.assignPatient.lastName,
                patientUserId: this.assignPatient.userId
              }
            }
            else {
              Details.nextInLine.push({
                patientFirstName: this.assignPatient.firstName,
                patientLastName: this.assignPatient.lastName,
                patientUserId: this.assignPatient.userId
              })
            }
            this.addUser.postDoctorList(Details).subscribe(res => {
              console.log('response: '+ res);
              delete this.assignPatient.assign;
              this.assignPatient.nextAppointmentDate = moment().format('YYYY-MM-DD');
              this.assignPatient.nextAppointmentDoctor = DoctorId;
              this.addUser.postPatientList(this.assignPatient).subscribe(data => {
                this.getPatientList();
                this.snackBar.open("Doctor Assigned Successfully", '', {
                  duration: 3000
                });
              })
            })
          }
  
        }
      );
    }
   
  }

}
