import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { AuthService } from 'src/app/login-and-register/services/auth.service';
import { Character } from '../model/character.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  userCharactersCollection: AngularFirestoreCollection<Character>;
  userCharacters: Observable<Character[]>;
  currentLoggedInUser: string;


  constructor(public afs: AngularFirestore, public authService: AuthService) { }

  getuserCharacters(userId) {
    this.userCharactersCollection = this.afs.collection<Character>('characters', ref => ref.where('userId', '==', userId));
    this.userCharacters = this.userCharactersCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Character;
          data.documentId = a.payload.doc.id;
          return {...data};
        });
      })
    );
    return this.userCharacters;
  }

  /* returnCurrentCampaign(){
    return this.currentCampaign;
  } */

  addCharacter(character: Character) {
    this.userCharactersCollection = this.afs.collection('characters');
    this.currentLoggedInUser = this.authService.afAuth.auth.currentUser.uid;
    character.userId = this.currentLoggedInUser;
    this.userCharactersCollection.add(character);
  }

}
