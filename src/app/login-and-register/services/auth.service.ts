import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { auth } from "firebase";
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  UserId = this.afAuth.authState.pipe(map(authState => authState.uid));
  UserLoggidIn: boolean = false;

  constructor(private router: Router, public afAuth: AngularFireAuth) { }

  registerNewUser(email, password){
    this.afAuth.auth.createUserWithEmailAndPassword(email,password);
    this.UserLoggidIn = true;
  }

  loginUser(email, password){
    this.afAuth.auth.signInWithEmailAndPassword(email, password);
    this.UserLoggidIn = true;
    this.router.navigate(['/campaign-overview']);
  }

  logoutUser(){
    this.afAuth.auth.signOut();
    this.UserLoggidIn = false;
    this.router.navigate(['/login']);
  }

  /* passwordReset(email){
    this.afAuth.auth.reset
  } */

  getUserState(){
    return this.UserLoggidIn;
  }

  getUserUid(){
    return this.UserId;
  }

}
