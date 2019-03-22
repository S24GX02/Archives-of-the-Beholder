import { Component, OnInit, Input } from '@angular/core';
import { Npc } from '../models/npc.model';

@Component({
  selector: 'app-npcdetail',
  templateUrl: './npcdetail.component.html',
  styleUrls: ['./npcdetail.component.css']
})
export class NpcdetailComponent implements OnInit {

  @Input() npc: Npc;

  constructor() { }

  ngOnInit() {
  }

}
