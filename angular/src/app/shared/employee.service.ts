import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee.model';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})


export class EmployeeService {

  selectedEmployee: Employee;
  employees: Employee[];

  readonly baseURL = 'http://localhost:3000/employees';

  constructor( private http: HttpClient  ) { }
/*
  getAdmin() {
    return this.http.get(this.baseURL + '/user');
  }
*/
  postEmployee(emp: Employee):  Observable<Employee> {
    return this.http.post<Employee>(this.baseURL, emp, httpOptions);
  }

  getEmployeeList() {
    return this.http.get(this.baseURL);
  }

  putEmployee(emp: Employee) {
    return this.http.put(this.baseURL + `/${emp._id}`, emp);
  }

  deleteEmployee(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }
}
