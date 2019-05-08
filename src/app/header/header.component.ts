import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login-and-register/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userState: boolean;
  currentLoggedInUser;

  constructor(public authService: AuthService) {
    this.authService.afAuth.authState.subscribe(user => {
      if(user) this.currentLoggedInUser=user.uid;
  });
}

  ngOnInit() {
    console.log(this.currentLoggedInUser);
  }

  logoutPressed(){
    this.authService.logoutUser();
  }

  checkUserState(){
    this.userState = this.authService.getUserState();
    return this.userState;
  }

}
