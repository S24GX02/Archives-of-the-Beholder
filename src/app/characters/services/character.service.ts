import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AuthService } from 'src/app/login-and-register/services/auth.service';
import { Character } from '../model/character.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  userCharactersCollection: AngularFirestoreCollection<Character>;
  campaignCharactersCollection: AngularFirestoreCollection<Character>;
  userCharacters: Observable<Character[]>;
  campaignCharacters: Observable<Character[]>;
  characterDoc: AngularFirestoreDocument<Character>;
  character: Character;
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

  getCampaignCharacters(campaignId) {
    this.campaignCharactersCollection = this.afs.collection<Character>('characters', ref => ref.where('campaignId', '==', campaignId));
    this.campaignCharacters = this.campaignCharactersCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Character;
          data.documentId = a.payload.doc.id;
          return {...data};
        });
      })
    );
    return this.campaignCharacters;
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

  deleteCharacter(character: Character) {
    this.characterDoc = this.userCharactersCollection.doc(character.documentId);
    this.characterDoc.delete();
  }

  saveCharacter(character: Character) {
    this.character = character;
  }

  getCharacter() {
    return this.character;
  }

  updateCharacter(character: Character) {
    this.characterDoc = this.userCharactersCollection.doc(character.documentId);
    this.characterDoc.update(character);
  }

}
