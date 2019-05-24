import { Component, OnInit } from '@angular/core';
import { CampaignService } from '../overview/services/campaign.service';
import { AuthService } from '../login-and-register/services/auth.service';
import { CharacterService } from './services/character.service';
import { Character } from './model/character.model';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {}
 
}
