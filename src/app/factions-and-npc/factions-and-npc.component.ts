import { Component, OnInit } from '@angular/core';
import { NpcService } from './services/npc.service';

@Component({
  selector: 'app-factions-and-npc',
  templateUrl: './factions-and-npc.component.html',
  styleUrls: ['./factions-and-npc.component.css'],
  providers: [NpcService]
})
export class FactionsAndNpcComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
