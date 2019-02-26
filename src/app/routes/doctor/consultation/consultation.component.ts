import { Component, OnInit } from '@angular/core';
import { ConsultationService } from '../../../shared/service/consultation.service';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { AddUserService } from '../../../shared/service/add-user.service';
import { QuestionsService } from '../../../shared/service/questions.service';
import { GetListService } from '../../../shared/service/get-list.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.scss']
})
export class ConsultationComponent implements OnInit {

  consultationDetails: any;
  doctorDetails: any = {
    userId: 1000,
    firstName: 'Venkatesh',
    lastName: 'Narayanan'
  };
  doctorHistoryDetails: any;
  consultationForm: boolean = true;
  title = 'Ngx-tree-dnd example';
  currentEvent: string = 'start do something';
  patientDetails: any;
  postDoctorpatientDetails: any;
  myTree: any;
  config = {
    showActionButtons: true,
    showAddButtons: true,
    showRenameButtons: true,
    showDeleteButtons: true,
    showRootActionButtons: true, // set false to hide root action buttons.
    enableExpandButtons: true,
    enableDragging: true,
    rootTitle: 'Questions',
    validationText: 'Error',
    minCharacterLength: 0,
    setItemsAsLinks: false,
    setFontSize: 20,
    setIconSize: 13
  };
  constructor(public consultationService: ConsultationService, public snackBar: MatSnackBar, public adduser: AddUserService, public router: Router, public questions: QuestionsService, public updateUser: GetListService) {
    this.consultationService.consultation.subscribe(data => {
      if (data != 'NA') {
        this.consultationDetails = data;
        this.getPatientDetails();
        this.getQuestions()
      }
      else {
        this.router.navigate(['/doctorhome']);
      }
    });
    this.consultationService.doctorConsultation.subscribe(data => {
      if (data != 'NA') {
        this.doctorHistoryDetails = data;
      }
      else {
        this.router.navigate(['/doctorhome']);
      }
    });
  }

  ngOnInit() {


  }

  setFormState(value) {
    console.log('FORM STATUS: ', value);
    if (value == 'opened') {
      this.consultationForm = true;
    }
    else {
      this.consultationForm = false;
    }
  }

  getQuestions() {

  }

  getPatientDetails() {
    this.adduser.getPatientDetails(this.consultationDetails.patientUserId).subscribe(res => {

      let details = res[0];
      details.visitHistory.forEach(element => {
        element.questions = JSON.parse(element.questions);
      });
      this.patientDetails = details;
      console.log('History questions', this.patientDetails.visitHistory);
      console.log("Patient Details: ", details)
      this.questions.getQuestions().subscribe(cons => {
        console.log(cons);
        let treeData;
        treeData = JSON.parse(cons[0]["questions"]);
        this.myTree = this.delimitTree(treeData);
      })
    })
  }

  delimitTree(treeData) {
    for (let i = 0; i < treeData.length; i++) {
    //  treeData[i].id = +("" + new Date().getTime() + i);
      if(treeData[i].name == 'ans')
      {
        treeData[i].name = null;
        treeData[i].options.edit = true;
      }
      if (treeData[i].childrens.length > 0) {

        this.loopLogic(i, 0, treeData[i].childrens);

      }
    }
    console.log('Form questions ', treeData);
    return treeData;
  }

  loopLogic(a, b, children) {
    for (let y = 0; y < children.length; y++) {
    //  children[y].id = +("" + new Date().getTime() + a + b);
      if(children[y].name == 'ans')
      {
       children[y].name = null;
       children[y].options.edit = true;
      }
      if (children[y].childrens.length > 0) {
        this.loopLogic(a, y, children[y].childrens);
      }
    }
  }

  onDragStart(event) {
    this.currentEvent = ' on drag start';
  }
  onDrop(event) {
    this.currentEvent = 'on drop';
  }
  onAllowDrop(event) {
    this.currentEvent = 'on allow drop';
  }
  onDragEnter(event) {
    this.currentEvent = 'on drag enter';
  }
  onDragLeave(event) {
    this.currentEvent = 'on drag leave';
  }
  onAddItem(event) {
    this.currentEvent = 'on add item';
    console.log(this.myTree);
  }
  onStartRenameItem(event) {
    this.currentEvent = 'on start edit item';
  }
  onFinishRenameItem(event) {
    this.currentEvent = 'on finish edit item';
  }
  onStartDeleteItem(event) {
    console.log('start delete');
    this.currentEvent = 'on start delete item';
  }
  onFinishDeleteItem(event) {
    console.log('finish delete');
    this.currentEvent = 'on finish delete item';
  }
  onCancelDeleteItem(event) {
    console.log('cancel delete');
    this.currentEvent = 'on cancel delete item';
  }
  Save() {
    let patientDetails = Object.assign({}, this.patientDetails);
    patientDetails.visitHistory.forEach(elm => {
      elm.questions = JSON.stringify(elm.questions);
    })
    patientDetails.visitHistory.push({
      date: moment().format('YYYY-MM-DD'),
      Doctor: this.doctorDetails.userId + ' - ' + this.doctorDetails.firstName,
      questions: JSON.stringify(this.myTree)
    });
    patientDetails.lastVisitedDate = moment().format('YYYY-MM-DD');
    patientDetails.nextAppointmentDate = 'NA';
    patientDetails.nextAppointmentDoctor = 'NA';
    patientDetails.lastVisitedDoctor = this.doctorDetails.userId + ' - ' + this.doctorDetails.firstName;
    this.postDoctorpatientDetails = {
      lastVisitedDate: patientDetails.lastVisitedDate,
      lastVisitedDoctor: patientDetails.lastVisitedDoctor,
      firstName: patientDetails.firstName,
      lastName: patientDetails.lastName,
      userId: patientDetails.userId,
      visitDetails: {
        date: moment().format('YYYY-MM-DD'),
        Doctor: this.doctorDetails.userId + ' - ' + this.doctorDetails.firstName,
        questions: JSON.stringify(this.myTree)
      }
    };
    this.updateUser.postPatientList(patientDetails).subscribe(data => {

      let doctorUpdateData = {};
      console.log("Log data ", this.doctorHistoryDetails);
      this.doctorHistoryDetails.consultationHistory.forEach(elmDoc => {
        if(elmDoc != 'NA')
        elmDoc.visitDetails.questions = JSON.stringify(elmDoc.visitDetails.questions);
      })
      if (this.doctorHistoryDetails.consultationHistory[0] == 'NA') {
        this.doctorHistoryDetails.consultationHistory[0] = this.postDoctorpatientDetails;
      }
      else {
        this.doctorHistoryDetails.consultationHistory.push(this.postDoctorpatientDetails);
      }
      let nextInLine = this.doctorHistoryDetails.nextInLine.filter(fil => {
        return fil.patientUserId != patientDetails.userId
      });
      this.doctorHistoryDetails.nextInLine = nextInLine;
      console.log("Log data After ", this.doctorHistoryDetails);
      this.updateUser.postDoctorList(this.doctorHistoryDetails).subscribe(docdata => {
        this.snackBar.open("Form submitted successfully", '', {
          duration: 2000
        });
        this.router.navigate(['/doctorhome']);
      })

    })


  }
}
