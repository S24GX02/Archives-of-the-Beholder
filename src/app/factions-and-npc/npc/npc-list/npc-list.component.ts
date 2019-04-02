import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Npc } from '../../models/npc.model';
import { NpcService } from '../../services/npc.service';

@Component({
  selector: 'app-npc-list',
  templateUrl: './npc-list.component.html',
  styleUrls: ['./npc-list.component.css'],
  
})
export class NpcListComponent implements OnInit {

  npcs: Npc[];
  
  constructor(private npcService: NpcService) { }

  ngOnInit() {

    this.npcs = this.npcService.getNpcs();
  }


}
