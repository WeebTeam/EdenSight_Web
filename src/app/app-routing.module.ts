import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component'
import { StaffComponent } from './staff/staff.component'
import { LoginComponent } from './login/login.component'
import { ResidentComponent } from './resident/resident.component'

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'users', component: UsersComponent },
  { path: 'resident', component: ResidentComponent },
  { path: 'staff', component: StaffComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
