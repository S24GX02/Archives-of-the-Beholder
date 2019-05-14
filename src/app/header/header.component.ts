import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login-and-register/services/auth.service';
import { User } from '../login-and-register/models/user.model';
import { UserService } from '../login-and-register/services/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userState: boolean;
  currentLoggedInUser;
  username: string;
  user: Observable<User>;

  constructor(public authService: AuthService, public userService: UserService) {
    this.authService.afAuth.authState.subscribe(user => {
      if(user) this.currentLoggedInUser=user.uid;
      this.userService.getUser(this.currentLoggedInUser).subscribe(user => {
        if (user){
          console.log(user);
          this.username =user.userName;
        }
      })
  });
}

  ngOnInit() {
    this.currentLoggedInUser = "";
  }

  logoutPressed(){
    this.authService.logoutUser();
  }

  checkUserState(){
    this.userState = this.authService.getUserState();
    return this.userState;
    console.log(this.currentLoggedInUser);
  }

}
