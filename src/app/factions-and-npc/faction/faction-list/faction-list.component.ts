import { Component, OnInit } from '@angular/core';
import { Faction } from '../../models/faction.model';

@Component({
  selector: 'app-faction-list',
  templateUrl: './faction-list.component.html',
  styleUrls: ['./faction-list.component.css']
})
export class FactionListComponent implements OnInit {
  factions: Faction[] = [
    new Faction('The Faithless','Religious Cult', 50 ,'Some puny description of a cult','https://i.imgur.com/FVprFQz.jpg'),
  ];
  constructor() { }

  ngOnInit() {
  }

}
