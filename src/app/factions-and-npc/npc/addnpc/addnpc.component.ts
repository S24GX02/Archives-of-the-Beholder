import { Component, OnInit} from '@angular/core';
import { Npc } from '../../models/npc.model';
import { NpcService } from '../../services/npc.service';
import { Router } from '@angular/router';
import { FactionsService } from '../../services/factions.service';
import { Campaign } from 'src/app/overview/models/campaign.model';
import { Faction } from '../../models/faction.model';
import { CampaignService } from 'src/app/overview/services/campaign.service';


@Component({
  selector: 'app-addnpc',
  templateUrl: './addnpc.component.html',
  styleUrls: ['./addnpc.component.css']
})
export class AddnpcComponent implements OnInit {

  factions: Faction[];
  currentCampaign: Campaign;
  npc: Npc = {
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
  };

  availableFactions

  constructor(private router: Router, private npcService: NpcService, private factionService: FactionsService, private campaignService: CampaignService) { }

  ngOnInit() {
    this.currentCampaign = this.campaignService.returnCurrentCampaign();
    this.factionService.getFactions(this.currentCampaign.documentId).subscribe(factions => {
      console.log(factions);
      this.factions = factions;
    });
  }

  onAddNpc() {
    if (this.npc.name !== '' && this.npc.backstory !== '' && this.npc.level !== 0
      && this.npc.location !== '' && this.npc.occupancy !== '' && this.npc.race !== '' && this.npc.role !== '') {
        console.log(this.npc.isHidden);
        console.log(this.npc.factionId);
        this.npcService.addNpc(this.npc);
        this.router.navigate(['/factions-and-npcs']);
    }
  }

}
