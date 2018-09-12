import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { LoginComponent } from './login/login.component';
import { LoginSComponent } from './login-s/login-s.component';
import { RegisterComponent } from './register/register.component';
import { SigninComponent } from './user/signin/signin.component';
import { UserComponent } from './user/user.component';
import { SignupComponent } from './user/signup/signup.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: EmployeeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
