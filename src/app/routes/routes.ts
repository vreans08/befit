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
import { ConsultationComponent } from './doctor/consultation/consultation.component';
import { RoutepermissionService } from '../shared/service/routepermission.service';
import { SuperadminhomeComponent } from './superadmin/superadminhome/superadminhome.component';
import { DoctorhomeComponent } from './doctor/doctorhome/doctorhome.component';
import { PatienthomeComponent } from './patient/patienthome/patienthome.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';

export const routes = [

    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            { path: 'superadmin', component: SuperadminhomeComponent,canActivate: [RoutepermissionService], data: { route: "superAdminHome" } },
            { path: 'doctorhome', component : DoctorhomeComponent },
            { path: 'patienthome', component: PatienthomeComponent },
            { path: 'adminhome', component: AdminhomeComponent },
            { path: 'patientmap', component: PatientmapComponent, canActivate: [RoutepermissionService], data: { route: "assignpatient" }, },
            { path: "addquestions", component: AddquestionsComponent, canActivate: [RoutepermissionService], data: { route: "addquestions" }, },
            { path: 'consultation', component: ConsultationComponent, canActivate: [RoutepermissionService], data: { route: "consultation" }, },

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
