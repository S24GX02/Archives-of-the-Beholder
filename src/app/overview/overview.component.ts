import { Component, OnInit } from '@angular/core';
import { CampaignService } from './services/campaign.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  userHasCampaign: boolean;

  constructor(public campaignService: CampaignService) { }

  ngOnInit() {
  }


}
