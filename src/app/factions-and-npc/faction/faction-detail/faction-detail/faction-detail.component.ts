import { Component, OnInit } from '@angular/core';
import { FactionsService } from 'src/app/factions-and-npc/services/factions.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Faction } from 'src/app/factions-and-npc/models/faction.model';

@Component({
  selector: 'app-faction-detail',
  templateUrl: './faction-detail.component.html',
  styleUrls: ['./faction-detail.component.css']
})
export class FactionDetailComponent implements OnInit {
  documentId: string;
  faction: Faction;
  factions: Faction[];
  editState: boolean = false;
  factionToEdit: Faction;
  addnoteState: boolean = false;

  constructor(private factionService: FactionsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const id = this.route.params['documentId'];
    this.documentId = id;

    this.faction = this.factionService.getFaction();
    console.log(this.faction);
    
  }

  deleteFaction(event: Event, faction: Faction){
    this.factionService.deleteFaction(faction);
    this.router.navigate(['/factions-and-npcs']);
  }

  editFaction(event: Event, faction: Faction){
    this.editState = true;
    this.factionToEdit = faction;
  }

  updateFaction(faction: Faction){
    this.factionService.updateFaction(faction);
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