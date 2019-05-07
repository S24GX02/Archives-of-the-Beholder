import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { auth } from "firebase";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  UserId =this.afAuth.authState.pipe(map(authState => authState.uid));

  constructor(public afAuth: AngularFireAuth) { }

  registerNewUser(email, password){
    this.afAuth.auth.createUserWithEmailAndPassword(email,password);
  }

  logoutUser(){
    this.afAuth.auth.signOut();
  }

}
