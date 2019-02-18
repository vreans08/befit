import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperadminhomeComponent } from './superadminhome/superadminhome.component';
import { Routes, RouterModule } from '@angular/router';
import { RoutepermissionService } from '../../shared/service/routepermission.service';
import { SharedModule } from '../../shared/shared.module';
import { CreateUserComponent } from './create-user/create-user.component';

const routes: Routes = [
  { path: '', component: SuperadminhomeComponent,canActivate: [RoutepermissionService], data: { route: "superAdminHome" },},
];


@NgModule({
  declarations: [SuperadminhomeComponent, CreateUserComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  entryComponents:[CreateUserComponent]
})
export class SuperadminModule { }
