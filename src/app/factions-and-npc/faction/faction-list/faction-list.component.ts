import { Component, OnInit } from '@angular/core';
import { Faction } from '../../models/faction.model';
import { CampaignService } from 'src/app/overview/services/campaign.service';
import { FactionsService } from '../../services/factions.service';
import { Campaign } from 'src/app/overview/models/campaign.model';

@Component({
  selector: 'app-faction-list',
  templateUrl: './faction-list.component.html',
  styleUrls: ['./faction-list.component.css']
})
export class FactionListComponent implements OnInit {

  factions: Faction[];
  currentCampaign: Campaign;

  constructor(private factionService: FactionsService, private campaignService: CampaignService) { }

  ngOnInit() {
    this.currentCampaign = this.campaignService.returnCurrentCampaign();
    this.factionService.getFactions(this.currentCampaign.documentId).subscribe(factions => {
      console.log(factions);
      this.factions = factions;
    });
  }

}
