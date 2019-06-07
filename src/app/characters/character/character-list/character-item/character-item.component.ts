import { Component, OnInit, Input } from '@angular/core';
import { Character } from 'src/app/characters/model/character.model';
import { NpcService } from 'src/app/factions-and-npc/services/npc.service';
import { CharacterService } from 'src/app/characters/services/character.service';

@Component({
  selector: 'app-character-item',
  templateUrl: './character-item.component.html',
  styleUrls: ['./character-item.component.css']
})
export class CharacterItemComponent implements OnInit {

@Input() character: Character;
@Input() documentId: String;


  constructor(private characterService: CharacterService) { }

  ngOnInit() {
  }

  deleteCharacter(event, character: Character) {
    this.characterService.deleteCharacter(character);
  }

  editCharacter(event: Event, character: Character) {
  }

  saveCharacter(character: Character) {
    console.log(character);
    this.characterService.saveCharacter(character);
  }


}
