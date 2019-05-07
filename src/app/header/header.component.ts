import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login-and-register/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currentLoggedInUser;
  isUserLoggedIn:boolean = false;

  constructor(public authService: AuthService) {
    this.authService.afAuth.authState.subscribe(user => {
      if(user) this.currentLoggedInUser=user.uid;
      console.log(this.currentLoggedInUser);
      this.isUserLoggedIn= true;
  });
}

  ngOnInit() {
    console.log(this.isUserLoggedIn);
  }

  logoutPressed(){
    this.authService.logoutUser();
    this.isUserLoggedIn = false;
  }

}
