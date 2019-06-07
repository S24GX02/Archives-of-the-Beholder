import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../services/character.service';
import { AuthService } from 'src/app/login-and-register/services/auth.service';
import { Character } from '../model/character.model';
import { UserService } from 'src/app/login-and-register/services/user.service';
import { User } from 'src/app/login-and-register/models/user.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main-character',
  templateUrl: './main-character.component.html',
  styleUrls: ['./main-character.component.css']
})
export class MainCharacterComponent implements OnInit {

  characters: Character[];
  characterId: string;
  userid: string;

  constructor(public characterService: CharacterService, public authService: AuthService, public userService: UserService) {

  }

  ngOnInit() {
    this.authService.afAuth.authState.subscribe(user => {
      if (user) {
        this.userid = user.uid;
        console.log(user.uid);
        this.characterService.getuserCharacters(user.uid).subscribe(characters => {
          if (characters != null) {
            this.characters = characters;
            console.log(characters);
          }
        });
      }
    });
  }

  onChangeActiveChar(character) {
    this.userService.changeActiveChar(this.userid, character);
  }

}
