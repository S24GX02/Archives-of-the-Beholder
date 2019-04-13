import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Npc} from '../../../models/npc.model';
import { NpcService } from 'src/app/factions-and-npc/services/npc.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-npc-item',
  templateUrl: './npc-item.component.html',
  styleUrls: ['./npc-item.component.css']
})
export class NpcItemComponent implements OnInit {
@Input() npc: Npc;
@Input() documentId: String;

constructor(private router: Router, private npcService: NpcService) { }

  ngOnInit() {
  }

  saveNpc(npc: Npc){
    console.log(npc);
    this.npcService.saveNpc(npc);
   
  }
  

}
