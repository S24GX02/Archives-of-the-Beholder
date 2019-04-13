import { Component, OnInit} from '@angular/core';
import { Npc } from '../../models/npc.model';
import { NpcService } from '../../services/npc.service';
import { Router } from "@angular/router";


@Component({
  selector: 'app-addnpc',
  templateUrl: './addnpc.component.html',
  styleUrls: ['./addnpc.component.css']
})
export class AddnpcComponent implements OnInit {

  npc: Npc ={
    documentId: '',
    backstory: '',
    campaignId: null,
    factionId: null,
    imageUrl: '',
    isHidden: false,
    level: 1,
    location: '',
    name: '',
    occupancy: '',
    race: '',
    role: ''
  }
  
  constructor(private router: Router,private npcService: NpcService) { }

  ngOnInit() {
  }

  onAddNpc(){
    if(this.npc.name != '' && this.npc.backstory != '' && this.npc.level != 0 
      && this.npc.location != '' && this.npc.occupancy != '' && this.npc.race != '' && this.npc.role != '') {
        this.npcService.addNpc(this.npc);
        this.router.navigate(['/factions-and-npcs']);
    }
  }

}
