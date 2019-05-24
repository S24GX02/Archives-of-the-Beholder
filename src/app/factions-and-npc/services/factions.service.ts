import { Injectable, EventEmitter } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { Faction } from '../models/faction.model';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/login-and-register/services/auth.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FactionsService {

  factionCollection: AngularFirestoreCollection<Faction>;
  factions: Observable<Faction[]>;
  factionDoc: AngularFirestoreDocument<Faction>;
  faction: Faction;

  constructor(public afs: AngularFirestore, public authService: AuthService) {
  }

  factionSelected = new EventEmitter<Faction>();


  getFactions(documentId) {
    this.factionCollection = this.afs.collection<Faction>('campaigns').doc(documentId).collection('factions');
    this.factions = this.factionCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Faction;
          data.documentId = a.payload.doc.id;
          return {...data};
        });
      })
    );
    return this.factions;
  }

  saveFaction(faction: Faction) {
    console.log(faction);
    this.faction = faction;
    console.log(this.faction);
  }

  getFaction() {
    return this.faction;
  }

  addFaction(faction: Faction) {
    console.log(faction);
    this.factionCollection.add(faction);
  }

  deleteFaction(faction: Faction) {
    this.factionDoc = this.factionCollection.doc(faction.documentId);
    this.factionDoc.delete();
  }

  updateFaction(npc: Faction) {
    this.factionDoc = this.factionCollection.doc(npc.documentId);
    this.factionDoc.update(npc);
  }
}
