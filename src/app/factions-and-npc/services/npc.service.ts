import { Npc } from './../models/npc.model';
import { EventEmitter, Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/login-and-register/services/auth.service';

@Injectable()
export class NpcService {
  npcCollection: AngularFirestoreCollection<Npc>;
  npcs: Observable<Npc[]>;
  npcDoc: AngularFirestoreDocument<Npc>;
  npc: Npc;

  constructor(public afs: AngularFirestore, public authService: AuthService) {
  }

  npcSelected = new EventEmitter<Npc>();


  getNpcs(documentId) {
    this.npcCollection = this.afs.collection<Npc>('campaigns').doc(documentId).collection('npcs');
    this.npcs = this.npcCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Npc;
          data.documentId = a.payload.doc.id;
          return {...data};
        });
      })
    );
    return this.npcs;
  }

  saveNpc(npc: Npc) {
    console.log(npc);
    this.npc = npc;
    console.log(this.npc);
  }

  getNpc() {
    return this.npc;
  }

  addNpc(npc: Npc) {
    this.npcCollection.add(npc);
  }

  deleteNpc(npc: Npc) {
    this.npcDoc = this.npcCollection.doc(npc.documentId);
    this.npcDoc.delete();
  }

  updateNpc(npc: Npc) {
    this.npcDoc = this.npcCollection.doc(npc.documentId);
    this.npcDoc.update(npc);
  }


}
