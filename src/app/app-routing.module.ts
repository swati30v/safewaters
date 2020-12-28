import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { AlertsNotificationsComponent } from './alerts-notifications/alerts-notifications.component';
import { ShortTermScheduleComponent } from './short-term-schedule/short-term-schedule.component';
import { LongTermScheduleComponent } from './long-term-schedule/long-term-schedule.component';
import { FacilityInformationComponent } from './facility-information/facility-information.component';

import { FacilitieComponent } from './portal-administration/facilitie/facilitie.component';
import { RiverSystemsComponent } from './portal-administration/river-systems/river-systems.component';
import { UsersPermissionsComponent } from './portal-administration/users-permissions/users-permissions.component';
import { EditPermissionsComponent } from './portal-administration/edit-permissions/edit-permissions.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

const routes: Routes = [
	{ path: '', component: LoginComponent },
    { path:  'dashboard',  component:  DashboardComponent},
    { path:  'login',  component:  LoginComponent},
    { path:  'forgot-password',  component:  ForgotPasswordComponent},
    { path:  'dashboard/facilities',  component:  FacilitiesComponent},
    { path:  'dashboard/alerts-notifications',  component:  AlertsNotificationsComponent},
    { path:  'dashboard/short-term-schedule',  component:  ShortTermScheduleComponent},
    { path:  'dashboard/long-term-schedule',  component:  LongTermScheduleComponent},
    { path:  'dashboard/facility-information',  component:  FacilityInformationComponent},
    { path:  'portal-administration',  component:  FacilitieComponent},
    { path:  'portal-administration/facilities',  component:  FacilitieComponent},
    { path:  'portal-administration/river-systems',  component:  RiverSystemsComponent},
    { path:  'portal-administration/users-permissions',  component:  UsersPermissionsComponent},
    { path:  'portal-administration/users-permissions/edit-permissions',  component:  EditPermissionsComponent},
    { path:  'change-password',  component:  ChangePasswordComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
