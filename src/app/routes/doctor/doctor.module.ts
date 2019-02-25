import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorhomeComponent } from './doctorhome/doctorhome.component';
import { Routes, RouterModule } from '@angular/router';
import { RoutepermissionService } from '../../shared/service/routepermission.service';
import { SharedModule } from '../../shared/shared.module';
import { ConsultationComponent } from './consultation/consultation.component';


const routes: Routes = [
  { path: '', component: DoctorhomeComponent,canActivate: [RoutepermissionService], data: { route: "doctorHome" },},
  { path: 'consultation', component: ConsultationComponent,canActivate: [RoutepermissionService], data: { route: "consultation" },},

];

@NgModule({
  declarations: [DoctorhomeComponent,ConsultationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class DoctorModule { }
