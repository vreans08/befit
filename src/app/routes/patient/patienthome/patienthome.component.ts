import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../shared/service/data.service';
import { AddUserService } from '../../../shared/service/add-user.service';

@Component({
  selector: 'app-patienthome',
  templateUrl: './patienthome.component.html',
  styleUrls: ['./patienthome.component.scss']
})
export class PatienthomeComponent implements OnInit {

  patientDetails:any;
  patientId:any;
  filterData:any = '';
  loginData:any;

  constructor(public dataService:DataService,public addUser:AddUserService) { }

  ngOnInit() {
    this.dataService.loginData.subscribe(dra => {
      if(dra)
      {
        this.loginData = dra;
        this.patientId = dra["userId"];
        this.getPatientDetails()
        console.log("Login Data: ",this.loginData);
      }
    });
  }

  getPatientDetails() {
    this.addUser.getPatientDetails(this.patientId).subscribe(data => {
      let patDetails = data[0];
      patDetails.visitHistory.forEach(element => {
        if(element != 'NA')
        element.questions = JSON.parse(element.questions)
      });
      this.patientDetails = patDetails;
      console.log(this.patientDetails);
    });
  }
  printElem(divId) {
    let divelmnt = 'printDiv'+divId
    var content = document.getElementById(divelmnt).innerHTML;
    var mywindow = window.open('', 'Print', 'height=600,width=800');

    mywindow.document.write('<html><head><title>Print</title>');
    mywindow.document.write('</head><body >');
    mywindow.document.write(content);
    mywindow.document.write('</body></html>');

    mywindow.document.close();
    mywindow.focus()
    mywindow.print();
    mywindow.close();
    return true;
}

}
