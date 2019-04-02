import { Component, OnInit } from '@angular/core';
import { Npc } from '../models/npc.model';
import { NpcService } from '../services/npc.service';

@Component({
  selector: 'app-general',
  templateUrl: './main-factions-and-npc.component.html',
  styleUrls: ['./main-factions-and-npc.component.css']
})
export class MainFactionsAndNpcComponent implements OnInit {

  selectedNpc: Npc;
  showAddSection = true;

  constructor(private npcService: NpcService) { }

  ngOnInit() {
    this.npcService.npcSelected.subscribe(
      (npc: Npc) => {
        this.selectedNpc = npc;
      }
    );
  }

}
