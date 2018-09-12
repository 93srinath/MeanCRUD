import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../shared/user.service';
import { User } from '../shared/user.model';

declare var M: any;

@Component({
  selector: 'app-login-s',
  templateUrl: './login-s.component.html',
  styleUrls: ['./login-s.component.css']
})
export class LoginSComponent implements OnInit {

  constructor(private router: Router, private usr: UserService, private user: User) { }

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, Validators.required)
  });

  ngOnInit() {
  }

  login() {
    if (!this.loginForm.valid) {
      M.toast({ html: 'Invalid Credentials', classes: 'rounded' });
      return;
    }

    // console.log(JSON.stringify(this.loginForm.value));
    this.usr.login(JSON.stringify(this.loginForm.value))
    .subscribe(
      data => {console.log(data);
      this.router.navigate(['/user']);
    } ,
      error => console.error(error)
    );
  }

  moveToRegister() {
    this.router.navigate(['./register']);
  }

}
