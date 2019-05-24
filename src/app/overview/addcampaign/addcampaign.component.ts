import { Component, OnInit } from '@angular/core';
import { Campaign } from '../models/campaign.model';
import { Router } from '@angular/router';
import { CampaignService } from '../services/campaign.service';
import { AuthService } from 'src/app/login-and-register/services/auth.service';

@Component({
  selector: 'app-addcampaign',
  templateUrl: './addcampaign.component.html',
  styleUrls: ['./addcampaign.component.css']
})
export class AddcampaignComponent implements OnInit {

  campaign: Campaign = {
    documentId: '',
    campaignName: '',
    campaignType: '',
    campaignDescription: '',
    whatsNextTitle: 'Up next',
    whatsNext: '',
    dmId: ''
  };

  constructor(private router: Router, public campaignService: CampaignService, public authService: AuthService) { }

  ngOnInit() {
  }

  onAddCampaign() {
    if (this.campaign.campaignName !== '' && this.campaign.campaignDescription !== '' &&
        this.campaign.campaignType !== '' && this.campaign.whatsNext !== '') {
      this.campaign.dmId = this.authService.afAuth.auth.currentUser.uid;
      this.campaignService.addCampaign(this.campaign);
      this.router.navigate(['/campaign-overview']);
    }
  }

}
