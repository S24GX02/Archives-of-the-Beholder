import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email: string;
  password: string;
  passwordConfirm: string;
  errorMessage: string;

  userdetails: User ={
    userName: '',
    firstName:'',
    lastName:'',
    email: '',
    activeChar:'',
  }
  
  constructor(private authService: AuthService, public userService: UserService, public router: Router) {
   }

  
  ngOnInit() {
  }

  onSubmit(){
    if(this.password != this.passwordConfirm){
      this.passwordConfirm = this.password = '';
      this.errorMessage = "The passwords didn't match, please try again."
      return this.errorMessage;
    } else{
      this.authService.registerNewUser(this.userdetails, this.password);
      this.password = this.passwordConfirm = '';
    }
  }
}
