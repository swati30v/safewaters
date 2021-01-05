import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { AlertsNotificationsComponent } from './alerts-notifications/alerts-notifications.component';
import { FacilityInformationComponent } from './facility-information/facility-information.component';
import { ShortTermScheduleComponent } from './short-term-schedule/short-term-schedule.component';
import { LongTermScheduleComponent } from './long-term-schedule/long-term-schedule.component';
import { RiverSystemsComponent } from './portal-administration/river-systems/river-systems.component';
import { UsersPermissionsComponent } from './portal-administration/users-permissions/users-permissions.component';
import { FacilitieComponent } from './portal-administration/facilitie/facilitie.component';
import { EditPermissionsComponent } from './portal-administration/edit-permissions/edit-permissions.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { AuthguradService} from './authgurad.service'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    SidebarComponent,
    DashboardComponent,
    ForgotPasswordComponent,
    FacilitiesComponent,
    AlertsNotificationsComponent,
    FacilityInformationComponent,
    ShortTermScheduleComponent,
    LongTermScheduleComponent,
    RiverSystemsComponent,
    UsersPermissionsComponent,
    FacilitieComponent,
    EditPermissionsComponent,
    ChangePasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [ AuthguradService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
