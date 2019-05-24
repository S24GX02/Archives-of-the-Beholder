import { Component, OnInit } from '@angular/core';
import { CampaignService } from '../services/campaign.service';
import { Observable } from 'rxjs';
import { Campaign } from '../models/campaign.model';
import { AuthService } from 'src/app/login-and-register/services/auth.service';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-main-overview',
  templateUrl: './main-overview.component.html',
  styleUrls: ['./main-overview.component.css']
})
export class MainOverviewComponent implements OnInit {

  userHasCampaign = false;
  campaign: Campaign;

  constructor(public campaignService: CampaignService, public authService: AuthService) {

  }

  ngOnInit() {
   console.log(this.userHasCampaign);
   this.authService.afAuth.authState.subscribe(user => {
    if (user) {
      console.log(user.uid);
      this.campaignService.getCampaign(user.uid).subscribe(campaigns => {
        campaigns.forEach(campaign => {
          if (campaign && campaign.dmId === user.uid) {
            this.userHasCampaign = true;
            this.campaign = campaign;
          } else {
            this.userHasCampaign = false;
            this.campaign = null;
          }
        });
      });
      }
    });
  }
}
