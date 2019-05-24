import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../services/character.service';
import { Character } from '../../model/character.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcharacter',
  templateUrl: './addcharacter.component.html',
  styleUrls: ['./addcharacter.component.css']
})
export class AddcharacterComponent implements OnInit {

  character: Character = {
    documentId: '',
    characterName: '',
    characterBackstory: '',
    characterRace: '',
    characterRole: '',
    characterHitDie: '',
    characterLvl: null,
    characterProficiencyBonus: null,
    characterArmorClass: null,
    characterInitiative: null,
    characterSpeed: null,
    characterXp: null,
    characterHealthMax: null,
    characterHealthCurrent: null,
    userId: '',
    campaignId: ''
  };

  constructor(private characterservice: CharacterService, private router: Router) { }

  ngOnInit() {
  }

  onAddCharacter() {
    if (this.character.characterName !== '' && this.character.characterBackstory !== '' && this.character.characterLvl !== 0
      && this.character.characterArmorClass !== null && this.character.characterInitiative !== null && this.character.characterRace !== ''
      && this.character.characterRole !== '' && this.character.characterSpeed !== null && this.character.characterHitDie !== ''
      && this.character.characterProficiencyBonus !== null && this.character.characterXp !== null
      && this.character.characterHealthMax !== null) {

        this.characterservice.addCharacter(this.character);
        this.router.navigate(['/characters']);
    }
  }


}
