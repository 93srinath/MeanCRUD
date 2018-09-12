import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../shared/user.service';
import { User } from '../shared/user.model';

declare var M: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
/*
  registerForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.email, Validators.required]),
    username: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
    cpass: new FormControl(null, Validators.required)
  });

  constructor( private router: Router , private userService: UserService, private userModel: User) { }
*/
  ngOnInit() {
  }
/*
  moveToLogin() {
    this.router.navigate(['']);
  }

  register() {
    if (!this.registerForm.valid || (this.registerForm.controls.password.value !== this.registerForm.controls.cpass.value)) {
      M.toast({ html: 'Invalid Credentials', classes: 'rounded' });
       return;
    }
    this.userService.register<this.userModel>(JSON.stringify(this.registerForm.value))
    .subscribe(
      data => {console.log(data); this.router.navigate(['/login']);
    },
      error => console.error(error)
    );
    console.log(JSON.stringify(this.registerForm.value));
  }*/
}
