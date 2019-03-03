import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatienthomeComponent } from './patienthome/patienthome.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [PatienthomeComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class PatientModule { }
