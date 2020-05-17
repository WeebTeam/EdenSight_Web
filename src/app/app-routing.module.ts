import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component'
import { StaffComponent } from './staff/staff.component'
import { LoginComponent } from './login/login.component'
import { ResidentComponent } from './resident/resident.component'
import { AdminComponent } from './admin/admin.component'

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'users', component: UsersComponent },
  { path: 'resident', component: ResidentComponent },
  { path: 'staff', component: StaffComponent },
  { path: 'admin', component: AdminComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
