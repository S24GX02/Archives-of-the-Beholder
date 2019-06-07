import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/login-and-register/services/auth.service';
import { CharacterService } from '../../services/character.service';
import { Character } from '../../model/character.model';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  characters: Character[];

  constructor(public authService: AuthService, public characterService:CharacterService) { }

  ngOnInit() {
    this.authService.afAuth.authState.subscribe(user => {
      if (user) {
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
}
