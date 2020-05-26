import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

//components
import { UsersComponent } from './users/users.component';
import { StaffComponent } from './staff/staff.component';
import { LoginComponent } from './login/login.component';
import { ResidentComponent } from './resident/resident.component';
import { AdminResidentsComponent } from './admin-residents/admin-residents.component';
import { AdminStaffsComponent } from './admin-staffs/admin-staffs.component';

//interceptors
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { AdminComponent } from './admin/admin.component';

//pipe
import { FilterPipe } from './filter.pipe';
import { NewResidentComponent } from './new-resident/new-resident.component';
import { NewStaffComponent } from './new-staff/new-staff.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    StaffComponent,
    LoginComponent,
    ResidentComponent,
    AdminComponent,
    FilterPipe,
    AdminResidentsComponent,
    AdminStaffsComponent,
    NewResidentComponent,
    NewStaffComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [{
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
