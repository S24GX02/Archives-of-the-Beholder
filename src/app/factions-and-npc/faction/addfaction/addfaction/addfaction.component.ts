import { Component, OnInit } from '@angular/core';
import { FactionsService } from 'src/app/factions-and-npc/services/factions.service';
import { Router } from '@angular/router';
import { Faction } from 'src/app/factions-and-npc/models/faction.model';

@Component({
  selector: 'app-addfaction',
  templateUrl: './addfaction.component.html',
  styleUrls: ['./addfaction.component.css']
})
export class AddfactionComponent implements OnInit {

  faction: Faction = {
    documentId: '',
    name: '',
    type: '',
    members: 0,
    description: '',
  };

  constructor(private router: Router, private factionService: FactionsService) { }

  ngOnInit() {
  }


  onAddFaction() {
    if (this.faction.name !== '' && this.faction.type !== '' && this.faction.members !== 0 && this.faction.description) {
      console.log(this.faction);
      this.factionService.addFaction(this.faction);
      this.router.navigate(['/factions-and-npcs']);
    }
  }

}
