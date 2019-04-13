import { Npc } from "./../models/npc.model";
import { EventEmitter, Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from "angularfire2/firestore";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable()
export class NpcService {
  npcCollection: AngularFirestoreCollection<Npc>;
  npcs: Observable<Npc[]>;
  npcDoc: AngularFirestoreDocument<Npc>;
  npc: Npc;

  constructor(public afs: AngularFirestore) {
    //this.npcs = this.afs.collection('/npcs').valueChanges();

    this.npcCollection = this.afs.collection("npcs", ref =>
      ref.orderBy("name", "asc")
    );

    this.npcs = this.npcCollection.snapshotChanges().pipe(
      map(actions =>
        actions.map(a => {
          const data = a.payload.doc.data() as Npc;
          data.documentId = a.payload.doc.id;
          return data;
        })
      )
    );
  }

  npcSelected = new EventEmitter<Npc>();

  // private npcs: Npc[];
  //new Npc('Sammiewammie','Elven','Warlock','trololol','Cult Leader', 'Harmandor','https://i.imgur.com/FVprFQz.jpg'),
  //new Npc('Robinho','Dwarf','Barbarian','backstory','Den Baas', 'Harmandor','https://i.imgur.com/FVprFQz.jpg'),

  getNpcs() {
    return this.npcs;
  }

  saveNpc(npc:Npc){
    console.log(npc);
    this.npc = npc;
    console.log(this.npc);
  }

  getNpc() {
    return this.npc;
  
    //var docRef = this.afs.collection("npcs").doc(npc.name);
    //console.log(docRef);
    

    /* this.npc = this.afs.collection('npcs', ref => ref.where('documentId', 
        '==', documentId).limit(1)).snapshotChanges().pipe(
          map(actions =>actions.map(a =>{
            const data = a.payload.doc.data() as Npc;
            data.documentId = a.payload.doc.id;
            return data;
          }))
        ) */

    /* this.afs.collection('npcs').doc(documentId).snapshotChanges();
        this.npcCollection.doc(documentId).ref.get().then(function(doc) {
          //console.log(doc.data());
          const data = doc.data() as Npc;
          data.documentId = doc.id;
          return data;
        })
         */
  }

  addNpc(npc: Npc) {
    this.npcCollection.add(npc);
  }

  deleteNpc(npc: Npc){
    this.npcDoc = this.afs.doc(`npcs/${npc.documentId}`);
    this.npcDoc.delete();
  }

  updateNpc(npc: Npc){
    this.npcDoc = this.afs.doc(`npcs/${npc.documentId}`);
    this.npcDoc.update(npc);
  }


}
