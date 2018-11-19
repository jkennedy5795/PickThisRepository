import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './component/employee/employee.component';
import { ManagerComponent } from './component/manager/manager.component';
import { NewReimComponent } from './component/new-reim/new-reim.component';
import { CheckPastComponent } from './component/check-past/check-past.component';
import { CheckPendComponent } from './component/check-pend/check-pend.component';
import { CheckPendEmpComponent } from './component/check-pend-emp/check-pend-emp.component';
import { CheckPastEmpComponent } from './component/check-past-emp/check-past-emp.component';




const routes: Routes = [{
    component: EmployeeComponent,
    path: 'employee',
    children: [{
      component: NewReimComponent,
      path: 'new_reim',
    }, {
      component: CheckPendEmpComponent,
      path: 'check_pend'
    }, {
      component: CheckPastEmpComponent,
      path: 'check_past'
    }]
  }, {
    component: ManagerComponent,
    path: 'manager',
    children: [{
      component: CheckPastComponent,
      path: 'all_reim'
    }, {
      component: CheckPendComponent,
      path: 'pending_reim'
    }]
  }];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
