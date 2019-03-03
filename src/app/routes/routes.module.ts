import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslatorService } from '../core/translator/translator.service';
import { MenuService } from '../core/menu/menu.service';
import { SharedModule } from '../shared/shared.module';
import { PagesModule } from './pages/pages.module';

import { menu } from './menu';
import { routes } from './routes';
import { PatientmapComponent } from './patientmap/patientmap.component';
import { AddquestionsComponent } from './addquestions/addquestions.component';
import { DoctorassignComponent } from './doctorassign/doctorassign.component';
import { TreepatternComponent } from './treepattern/treepattern.component';
import { QuestionloopComponent } from './questionloop/questionloop.component';
import { DoctorModule } from './doctor/doctor.module';
import { PatientModule } from './patient/patient.module';
import { SuperadminModule } from './superadmin/superadmin.module';
import { AdminModule } from './admin/admin.module';
import { EditUserComponent } from './edit-user/edit-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { CreateUserComponent } from './superadmin/create-user/create-user.component';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forRoot(routes),
        PagesModule,
        DoctorModule,
        PatientModule,
        SuperadminModule,
        AdminModule
    ],
    declarations: [PatientmapComponent,CreateUserComponent, AddquestionsComponent, DoctorassignComponent, EditUserComponent, DeleteUserComponent],
    exports: [
        RouterModule,
    ],
    entryComponents: [DoctorassignComponent,DeleteUserComponent,EditUserComponent,CreateUserComponent]
})

export class RoutesModule {
    constructor(public menuService: MenuService, tr: TranslatorService) {
        menuService.addMenu(menu);
    }
}
