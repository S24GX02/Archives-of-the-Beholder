import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Npc} from '../../../models/npc.model';


@Component({
  selector: 'app-npc-item',
  templateUrl: './npc-item.component.html',
  styleUrls: ['./npc-item.component.css']
})
export class NpcItemComponent implements OnInit {
@Input() npc: Npc;
@Input() index: number;
 

  ngOnInit() {
  }

}
