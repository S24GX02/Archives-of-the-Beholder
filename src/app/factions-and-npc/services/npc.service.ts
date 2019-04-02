import {Npc} from './../models/npc.model'
import { EventEmitter } from '@angular/core';

export class NpcService {

    npcSelected = new EventEmitter<Npc>();

    private npcs: Npc[] = [
        new Npc('Sammiewammie','Elven','Warlock','trololol','Cult Leader', 'Harmandor','https://i.imgur.com/FVprFQz.jpg'),
        new Npc('Robinho','Dwarf','Barbarian','backstory','Den Baas', 'Harmandor','https://i.imgur.com/FVprFQz.jpg'),
      ];

      getNpcs(){
          return this.npcs.slice();
      }

      getNpc(index: number){
          return this.npcs[index];
      }
}