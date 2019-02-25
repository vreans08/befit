import { LayoutComponent } from '../layout/layout.component';

import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { RecoverComponent } from './pages/recover/recover.component';
import { LockComponent } from './pages/lock/lock.component';
import { MaintenanceComponent } from './pages/maintenance/maintenance.component';
import { Error404Component } from './pages/error404/error404.component';
import { Error500Component } from './pages/error500/error500.component';
import { PatientmapComponent } from './patientmap/patientmap.component';
import { AddquestionsComponent } from './addquestions/addquestions.component';
import { DoctorFormComponent } from './doctor-form/doctor-form.component';
import { ConsultationComponent } from './doctor/consultation/consultation.component';

export const routes = [

    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            {path: 'superadmin',loadChildren : './superadmin/superadmin.module#SuperadminModule'},
            {path: 'doctorhome',loadChildren : './doctor/doctor.module#DoctorModule'},
            {path: 'patientmap', component: PatientmapComponent},
            {path:'doctorform',component: DoctorFormComponent},
            {path:"addquestions",component: AddquestionsComponent}
                ]
    },

    // Not lazy-loaded routes
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'recover', component: RecoverComponent },
    { path: 'lock', component: LockComponent },
    { path: 'maintenance', component: MaintenanceComponent },
    { path: '404', component: Error404Component },
    { path: '500', component: Error500Component },

    // Not found
    { path: '**', redirectTo: 'login' }

];
