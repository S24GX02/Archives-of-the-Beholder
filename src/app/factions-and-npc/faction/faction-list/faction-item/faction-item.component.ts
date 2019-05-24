import { Component, OnInit, Input } from '@angular/core';
import { Faction } from 'src/app/factions-and-npc/models/faction.model';
import { Router } from '@angular/router';
import { FactionsService } from 'src/app/factions-and-npc/services/factions.service';

@Component({
  selector: 'app-faction-item',
  templateUrl: './faction-item.component.html',
  styleUrls: ['./faction-item.component.css']
})
export class FactionItemComponent implements OnInit {
  @Input() faction: Faction;
  @Input() documentId: String;

  constructor(private router: Router, private factionService: FactionsService) { }

  ngOnInit() {
  }

  saveFaction(faction: Faction) {
    console.log(faction);
    this.factionService.saveFaction(faction);
  }
}
