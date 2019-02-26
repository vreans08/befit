import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorhomeComponent } from './doctorhome/doctorhome.component';
import { Routes, RouterModule } from '@angular/router';
import { RoutepermissionService } from '../../shared/service/routepermission.service';
import { SharedModule } from '../../shared/shared.module';


const routes: Routes = [
  { path: '', component: DoctorhomeComponent,canActivate: [RoutepermissionService], data: { route: "doctorhome" },},

];

@NgModule({
  declarations: [DoctorhomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class DoctorModule { }
