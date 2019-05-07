import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email:string;
  password:string;
  
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSubmit(){
    this.authService.registerNewUser(this.email,this.password);
    this.email = this.password = '';
  }
}
