import { Component, OnInit } from '@angular/core';
import { CampaignService } from '../services/campaign.service';
import { Observable } from 'rxjs';
import { Campaign } from '../models/campaign.model';
import { AuthService } from 'src/app/login-and-register/services/auth.service';
import { forEach } from '@angular/router/src/utils/collection';
import { Character } from 'src/app/characters/model/character.model';
import { CharacterService } from 'src/app/characters/services/character.service';

@Component({
  selector: 'app-main-overview',
  templateUrl: './main-overview.component.html',
  styleUrls: ['./main-overview.component.css']
})
export class MainOverviewComponent implements OnInit {

  userHasCampaign = false;
  showCampaignID = false;
  characters: Character[];
  campaign: Campaign;

  constructor(public campaignService: CampaignService, public authService: AuthService, public characterService: CharacterService) {

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
            this.characterService.getCampaignCharacters(this.campaign.documentId).subscribe(characters => {
              this.characters = characters;
              console.log(this.characters);
            });
          } else {
            this.userHasCampaign = false;
            this.campaign = null;
          }
        });
      });
      }
    });
  }

  showCampaign(){
    if (this.showCampaignID){
      this.showCampaignID = false;
    } else {
      this.showCampaignID = true;
    }
  }

  getPlayers() {
    console.log(this.campaign.documentId);
    this.characterService.getCampaignCharacters(this.campaign.documentId).subscribe(characters => {
      this.characters = characters;
      console.log(this.characters);
    });
  }

}
