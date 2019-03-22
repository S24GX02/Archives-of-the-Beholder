import { Component, OnInit } from '@angular/core';
import { Npc } from './models/npc.model';

@Component({
  selector: 'app-factions-and-npc',
  templateUrl: './factions-and-npc.component.html',
  styleUrls: ['./factions-and-npc.component.css']
})
export class FactionsAndNpcComponent implements OnInit {

  selectedNpc: Npc;
  showAddSection = true;

  constructor() { }

  ngOnInit() {
  }

  toggleAdd(){
    this.showAddSection = false;
  }

}
