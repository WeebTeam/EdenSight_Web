import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component'
import { StaffComponent } from './staff/staff.component'
import { LoginComponent } from './login/login.component'
import { ResidentComponent } from './resident/resident.component'
import { AdminComponent } from './admin/admin.component'
import { AdminResidentsComponent } from './admin-residents/admin-residents.component'
import { AdminStaffsComponent } from './admin-staffs/admin-staffs.component'
import { NewResidentComponent } from './new-resident/new-resident.component'
import { NewStaffComponent } from './new-staff/new-staff.component'

const routes: Routes = [
  { path: '',   redirectTo: '/login', pathMatch: 'full' }, //default route
  { path: 'login', component: LoginComponent },
  { path: 'users', component: UsersComponent },
  { path: 'resident', component: ResidentComponent },
  { path: 'staff', component: StaffComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'admin-residents', component: AdminResidentsComponent },
  { path: 'admin-staffs', component: AdminStaffsComponent },
  { path: 'new-resident', component: NewResidentComponent },
  { path: 'new-staff', component: NewStaffComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
