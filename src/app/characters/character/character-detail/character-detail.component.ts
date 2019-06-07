import { Component, OnInit } from '@angular/core';
import { Character } from '../../model/character.model';
import { Router, ActivatedRoute } from '@angular/router';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {

  editState = false;
  documentId: string;
  character: Character;

  constructor(private router: Router, private route: ActivatedRoute, public characterService: CharacterService) { }

  ngOnInit() {
    const id = this.route.params['documentId'];
    this.documentId = id;

    this.character = this.characterService.getCharacter();

  }

  enableEdit() {
    this.editState = true;
  }

  deleteCharacter(event, character: Character) {

  }

  editCharacter() {
    this.characterService.updateCharacter(this.character);
    this.router.navigate(['/characters']);
  }

}
