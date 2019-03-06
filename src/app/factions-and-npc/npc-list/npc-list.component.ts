import { Component, OnInit } from '@angular/core';
import { Npc } from '../models/npc.model';

@Component({
  selector: 'app-npc-list',
  templateUrl: './npc-list.component.html',
  styleUrls: ['./npc-list.component.css']
})
export class NpcListComponent implements OnInit {
  npcs: Npc[] = [
    new Npc('Sammiewammie','Elven','Warlock','trololol','Cult Leader', 'Harmandor','https://i.imgur.com/FVprFQz.jpg'),
  ];

  constructor() { }

  ngOnInit() {
  }

}
