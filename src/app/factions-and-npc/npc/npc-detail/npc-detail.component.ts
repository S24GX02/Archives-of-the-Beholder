import { Component, OnInit, Input } from '@angular/core';
import { Npc } from '../../models/npc.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NpcService } from '../../services/npc.service';

@Component({
  selector: 'app-npc-detail',
  templateUrl: './npc-detail.component.html',
  styleUrls: ['./npc-detail.component.css']
})
export class NpcDetailComponent implements OnInit {
  documentId: string;
  npc: Npc;
  npcs: Npc[];
  editState: boolean = false;
  npcToEdit: Npc;
  addnoteState: boolean =false;

  constructor(private npcService: NpcService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const id = this.route.params['documentId'];
    this.documentId = id;

    this.npc = this.npcService.getNpc();
    console.log(this.npc);
    
  }

  deleteNpc(event: Event, npc: Npc){
    this.npcService.deleteNpc(npc);
    this.router.navigate(['/factions-and-npcs']);
  }

  editNpc(event: Event, npc: Npc){
    this.editState = true;
    this.npcToEdit = npc;
  }

  updateNpc(npc: Npc){
    this.npcService.updateNpc(npc);
    this.router.navigate(['/factions-and-npcs']);
  }

  // Note Section

  showAddNote(){
    this.addnoteState = true;
  }

  postNote(){
    this.addnoteState = false;
  }

}
