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
import { DoctorFormComponent } from './doctor-form/doctor-form.component';
import { DoctorassignComponent } from './doctorassign/doctorassign.component';
import { TreepatternComponent } from './treepattern/treepattern.component';
import { QuestionloopComponent } from './questionloop/questionloop.component';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forRoot(routes),
        PagesModule
    ],
    declarations: [PatientmapComponent, AddquestionsComponent, DoctorFormComponent, DoctorassignComponent],
    exports: [
        RouterModule,
    ],
    entryComponents: [DoctorassignComponent]
})

export class RoutesModule {
    constructor(public menuService: MenuService, tr: TranslatorService) {
        menuService.addMenu(menu);
    }
}
