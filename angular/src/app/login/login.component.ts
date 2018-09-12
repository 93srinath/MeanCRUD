import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { Router } from '@angular/router';
import { Employee } from '../shared/employee.model';
declare var M: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ EmployeeService ]
})
export class LoginComponent implements OnInit {

  constructor( private router: Router , private employeeService: EmployeeService) { }

  ngOnInit() {
  }

  /*
  authGuard(e) {
    this.employeeService.getAdmin().subscribe((res) => {
      this.employeeService.employees = res as Employee[];

      if (res == null) {
        M.toast({ html: 'Invalid Credentials', classes: 'rounded' });
      } else {
        this.router.navigate(['home']);
      }
    });
  }
*/

  loginUser(e) {
     const email = e.target.elements[0].value;
     const password = e.target.elements[1].value;

    if (email === 'admin' && password === 'admin') {
      this.router.navigate(['home']);
    } else {
      M.toast({ html: 'Invalid Credentials', classes: 'rounded' });
    }
  }
}
