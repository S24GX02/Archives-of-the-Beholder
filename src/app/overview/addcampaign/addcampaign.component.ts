import { Component, OnInit } from '@angular/core';
import { Campaign } from '../models/campaign.model';
import { Router } from '@angular/router';
import { CampaignService } from '../services/campaign.service';

@Component({
  selector: 'app-addcampaign',
  templateUrl: './addcampaign.component.html',
  styleUrls: ['./addcampaign.component.css']
})
export class AddcampaignComponent implements OnInit {

  campaign: Campaign ={
    documentId: '',
    campaignName: '',
    campaignType: '',
    campaignDescription: '',
    whatsNext: '',
    dmId: ''
  }

  constructor(private router:Router, public campaignService: CampaignService) { }

  ngOnInit() {
  }

  onAddCampaign(){
    if(this.campaign.campaignName != '' && this.campaign.campaignDescription != '' && this.campaign.campaignType != '' &&this.campaign.whatsNext != ''){
      this.campaignService.addCampaign(this.campaign);
      this.router.navigate(['/campaign-overview']);
    }
  }

}
