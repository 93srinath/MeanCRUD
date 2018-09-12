import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { ValidationComponent } from './validation/validation.component';
import { LoginSComponent } from './login-s/login-s.component';
import { RegisterComponent } from './register/register.component';
import { EmployeeService } from './shared/employee.service';
import { UserService } from './shared/user.service';
import { UserComponent } from './user/user.component';
import { SigninComponent } from './user/signin/signin.component';
import { SignupComponent } from './user/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    LoginComponent,
    FooterComponent,
    ValidationComponent,
    LoginSComponent,
    RegisterComponent,
    UserComponent,
    SigninComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ EmployeeService , UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
