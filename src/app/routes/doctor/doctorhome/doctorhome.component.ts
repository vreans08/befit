import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar, MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { AddUserService } from '../../../shared/service/add-user.service';
import { ConsultationService } from '../../../shared/service/consultation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctorhome',
  templateUrl: './doctorhome.component.html',
  styleUrls: ['./doctorhome.component.scss']
})
export class DoctorhomeComponent implements OnInit {

  doctorDetails:any;
  displayedColumns: string[] = ['firstName', 'lastName', 'userId', 'userName', 'phone', 'email'];
  PatientdataSource: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  doctorId:any = 1000;

  constructor(public addUser: AddUserService,public router:Router, public snackBar: MatSnackBar,public consultationService:ConsultationService ) { }

  ngOnInit() {
   
    this.getDoctorDetails();
    //this.getPatientDetails();
  }
  getDoctorDetails(){
    this.addUser.getDoctorDetails(this.doctorId).subscribe(data => {
      this.doctorDetails = data[0];
      console.log(this.doctorDetails);
      this.PatientdataSource = new MatTableDataSource(this.doctorDetails.consultationHistory);
      this.PatientdataSource.sort = this.sort;
    });
  }
  clickConsultation(patient)
  {
    this.consultationService.setConsultation(patient);
    setTimeout(() => {
      this.router.navigate([
        "doctorhome/consultation"
      ])
    }, 1000);
  
  }
  // getPatientDetails() {
  //   this.addUser.getPatientList().subscribe(patientList => {
  //     this.patientList = patientList;
  //     console.log(this.patientList);
  //   });
  // };

}
