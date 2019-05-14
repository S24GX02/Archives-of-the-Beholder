import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { User } from '../models/user.model';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {

  userCollection: AngularFirestoreCollection<User>;
  userDocument: AngularFirestoreDocument<User>;
  userObservable: Observable<User>;
  user: User;
  uid: string;

  constructor(public afs: AngularFirestore) { 
    this.userCollection = this.afs.collection("users");
  }

  addUser(userdetails: User, uid: any){
    this.afs.collection("users").doc(uid).set({
      userName: userdetails.userName,
      firstName: userdetails.firstName,
      lastName: userdetails.lastName,
      email: userdetails.email
    });
  }

  getUser(currentLoggedInUserId: string){
    this.userDocument = this.afs.collection("users").doc<User>(currentLoggedInUserId);
    this.userObservable = this.userDocument.valueChanges();
    return this.userObservable;
    
  }

}
