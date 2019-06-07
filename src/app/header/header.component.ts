import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login-and-register/services/auth.service';
import { User } from '../login-and-register/models/user.model';
import { UserService } from '../login-and-register/services/user.service';
import { Observable } from 'rxjs';
import { Title } from '@angular/platform-browser';

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
  title = "";

  constructor(public authService: AuthService, public userService: UserService, private titleService: Title) {

}

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.authService.afAuth.auth.onAuthStateChanged(user => {
      if (user) {
        this.currentLoggedInUser = user.uid;
        this.userState = true;
        this.userService.getUser(this.currentLoggedInUser).subscribe(user => {
          if (user) {
            this.username = user.userName;
          }
        });
      } else {
        this.userState = false;
        this.currentLoggedInUser = null;
      }
    });
  }

  logoutPressed() {
    this.authService.logoutUser();
    this.userState = false;
  }

  checkUserState() {
    return this.userState;
  }

}
