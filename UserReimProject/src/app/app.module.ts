import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { ManagerComponent } from './component/manager/manager.component';
import { EmployeeComponent } from './component/employee/employee.component';
import { CheckPendComponent } from './component/check-pend/check-pend.component';
import { CheckPastComponent } from './component/check-past/check-past.component';
import { NewReimComponent } from './component/new-reim/new-reim.component';
import { CommunicationService } from './service/communication.service';
import { UsersService } from './service/users.service';
import { ReimbursementsService } from './service/reimbursements.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './component/users/users.component';
import { ReimbursementComponent } from './component/reimbursement/reimbursement.component';
import { UpdateReimComponent } from './component/update-reim/update-reim.component';
import { CheckPastEmpComponent } from './component/check-past-emp/check-past-emp.component';
import { CheckPendEmpComponent } from './component/check-pend-emp/check-pend-emp.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ManagerComponent,
    EmployeeComponent,
    CheckPendComponent,
    CheckPastComponent,
    NewReimComponent,
    UsersComponent,
    ReimbursementComponent,
    UpdateReimComponent,
    CheckPastEmpComponent,
    CheckPendEmpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CommunicationService, UsersService, ReimbursementsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
