import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar, MatSort, MatPaginator, MatTableDataSource, MatDialogConfig, MatDialog } from '@angular/material';
import { AddUserService } from '../../../shared/service/add-user.service';
import { ConsultationService } from '../../../shared/service/consultation.service';
import { Router } from '@angular/router';
import { DataService } from '../../../shared/service/data.service';
import { CreateUserComponent } from '../../superadmin/create-user/create-user.component';

@Component({
  selector: 'app-doctorhome',
  templateUrl: './doctorhome.component.html',
  styleUrls: ['./doctorhome.component.scss']
})
export class DoctorhomeComponent implements OnInit {

  doctorDetails: any;
  doctorId: any = 1000;
  patientList:any;
  loginData:any;
  filterData:any = '';

  constructor(public addUser: AddUserService,public dialog:MatDialog,public dataService:DataService, public router: Router, public snackBar: MatSnackBar, public consultationService: ConsultationService) { }

  ngOnInit() {
    this.dataService.loginData.subscribe(dra => {
      if(dra)
      {
        this.loginData = dra;
        this.doctorId = dra["userId"];
        console.log("Login Data: ",this.loginData);
      }
    });
    this.getDoctorDetails();
    this.getPatientList();
  }
  getDoctorDetails() {
    this.addUser.getDoctorDetails(this.doctorId).subscribe(data => {
      let docDetails = data[0];
      docDetails.consultationHistory.forEach(element => {
        if(element != 'NA')
        element.visitDetails.questions = JSON.parse(element.visitDetails.questions)
      });
      this.doctorDetails = docDetails;
      console.log(this.doctorDetails);
    });
  }
  clickConsultation(patient) {
    this.consultationService.setConsultation(patient);
    this.consultationService.setConsultationDocotorDetails(this.doctorDetails);
    setTimeout(() => {
      this.router.navigate([
        "/consultation"
      ])
    }, 300);

  }

  addAdmin(value) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.position = {
      'top': '10px'

    };
    dialogConfig.width = "500px";
    dialogConfig.data = {
      role: value,
      patientList: this.patientList,
    };
    const dialogRef = this.dialog.open(CreateUserComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
      data => {
        console.log("Dialog output:", data);
        if (data == 'success') {
          this.getPatientList();
        }

      }
    );
  }

  getPatientList(){
    this.addUser.getPatientList().subscribe(patientList => {
      this.patientList = patientList;
      console.log(this.patientList);
    });
  };

}
