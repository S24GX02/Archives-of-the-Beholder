import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Npc } from '../models/npc.model';

@Component({
  selector: 'app-npc-list',
  templateUrl: './npc-list.component.html',
  styleUrls: ['./npc-list.component.css']
})
export class NpcListComponent implements OnInit {

  @Output() addWasClicked = new EventEmitter<boolean>();

  @Output() npcWasSelected = new EventEmitter<Npc>();

  npcs: Npc[] = [
    new Npc('Sammiewammie','Elven','Warlock','trololol','Cult Leader', 'Harmandor','https://i.imgur.com/FVprFQz.jpg'),
    new Npc('Robinho','Dwarf','Barbarian','backstory','Den Baas', 'Harmandor','https://i.imgur.com/FVprFQz.jpg'),
  ];

  constructor() { }

  ngOnInit() {
  }

  onNpcSelected(npc: Npc){

    this.npcWasSelected.emit(npc);

  }

  onNpcAdded(npc: Npc){
    this.npcs.push(npc);
  }

}
