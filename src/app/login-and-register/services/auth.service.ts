import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { auth } from "firebase";
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  UserLoggidIn: boolean = false;
  uid: string;

  constructor(private router: Router, public afAuth: AngularFireAuth, public userService: UserService) { }

  registerNewUser(userdetails, password){
    this.afAuth.auth.createUserWithEmailAndPassword(userdetails.email, password)
    .catch(function(error){
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorCode + " " + errorMessage);
        this.UserLoggidIn= false;
    });
    this.UserLoggidIn = true;
    this.afAuth.auth.onAuthStateChanged(user => {
      this.uid = user.uid;
      console.log(this.uid);
      this.userService.addUser(userdetails, user.uid);
    });
    this.router.navigate(['/campaign-overview']);
  }

  loginUser(email, password){
    this.afAuth.auth.signInWithEmailAndPassword(email, password);
    this.UserLoggidIn = true;
    this.router.navigate(['/campaign-overview']);
  }

  logoutUser(){
    this.afAuth.auth.signOut();
    this.UserLoggidIn = false;
    this.uid = "";
    this.router.navigate(['/login']);
  }

  /* passwordReset(email){
    this.afAuth.auth.reset
  } */

  getUserState(){
    return this.UserLoggidIn;
  }

  getUser(){
    return this.uid;
  }

}
