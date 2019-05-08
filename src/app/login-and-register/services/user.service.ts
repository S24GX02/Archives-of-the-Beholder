import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { User } from '../models/user.model';
import { AuthService } from './auth.service';

@Injectable()
export class UserService {

  userCollection: AngularFirestoreCollection<User>;
  user: User;
  uid: string;

  constructor(public afs: AngularFirestore, public authService: AuthService) { 
    this.authService.afAuth.authState.subscribe(user => {
      if(user) this.uid = user.uid;
  });
    this.userCollection = this.afs.collection("users");

  }

  addUser(user: User){
    this.userCollection.add(user);
  }

}
