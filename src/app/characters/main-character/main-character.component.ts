import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../services/character.service';
import { AuthService } from 'src/app/login-and-register/services/auth.service';
import { Character } from '../model/character.model';

@Component({
  selector: 'app-main-character',
  templateUrl: './main-character.component.html',
  styleUrls: ['./main-character.component.css']
})
export class MainCharacterComponent implements OnInit {


  constructor(public characterService: CharacterService, public authService: AuthService) {

  }

  ngOnInit() {
  }
}
