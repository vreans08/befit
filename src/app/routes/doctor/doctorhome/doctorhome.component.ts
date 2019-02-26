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

  doctorDetails: any;
  doctorId: any = 1000;
  filterData:any = '';

  constructor(public addUser: AddUserService, public router: Router, public snackBar: MatSnackBar, public consultationService: ConsultationService) { }

  ngOnInit() {

    this.getDoctorDetails();
    //this.getPatientDetails();
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
}
