import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultationService {

  public consultation = new BehaviorSubject<any>('NA');
  public doctorConsultation = new BehaviorSubject<any>('NA');

  constructor() {

   }

   setConsultation(data){
    this.consultation.next(data);
  }

  getConsultation(){
    return this.consultation;
  }
  setConsultationDocotorDetails(data){
    this.doctorConsultation.next(data);
  }
  getConsultationDocotorDetails(){
    return this.consultation;
  }
  
}
