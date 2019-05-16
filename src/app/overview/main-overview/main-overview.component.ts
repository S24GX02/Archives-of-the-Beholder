import { Component, OnInit } from '@angular/core';
import { CampaignService } from '../services/campaign.service';

@Component({
  selector: 'app-main-overview',
  templateUrl: './main-overview.component.html',
  styleUrls: ['./main-overview.component.css']
})
export class MainOverviewComponent implements OnInit {

  userHasCampaign: boolean = false;

  constructor(public campaignService: CampaignService) { }

  ngOnInit() {
   this.userHasCampaign = this.campaignService.getCampaignState();
   console.log(this.userHasCampaign);
  }

}