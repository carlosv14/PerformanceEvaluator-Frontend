import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { NgForm } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;
  errors: Array<string>;
  constructor(private userService : UserService, private router: Router) {
    this.userService = userService;
    this.router = router;
    this.errors = [];
   }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form? : NgForm){
    this.user = {
      username : '',
      password: ''
    };
    if(form != null){
      form.reset();
    }
    
  }

  login(form:NgForm){
    this.userService.login(form.value)
      .subscribe((data : any) => {
        localStorage.setItem('Token', data.token);
        this.router.navigate(['']);
      },
      (error : any) => {
        this.errors.push(error.status + '-' + error.statusText);
      });
  }

}
