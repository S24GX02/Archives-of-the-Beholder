import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Npc } from '../../models/npc.model';
import { NpcService } from '../../services/npc.service';
import { Observable } from 'rxjs';
import { Campaign } from 'src/app/overview/models/campaign.model';
import { CampaignService } from 'src/app/overview/services/campaign.service';

@Component({
  selector: 'app-npc-list',
  templateUrl: './npc-list.component.html',
  styleUrls: ['./npc-list.component.css'],
})
export class NpcListComponent implements OnInit {

  npcs: Npc[];
  currentCampaign: Campaign;

  constructor(private npcService: NpcService, private campaignService: CampaignService) { }

  ngOnInit() {
    this.currentCampaign = this.campaignService.returnCurrentCampaign();
    this.npcService.getNpcs(this.currentCampaign.documentId).subscribe(npcs => {
      console.log(npcs);
      this.npcs = npcs;
    });
  }


}
