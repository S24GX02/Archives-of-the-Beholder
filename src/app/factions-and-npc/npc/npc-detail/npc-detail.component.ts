import { Component, OnInit, Input } from '@angular/core';
import { Npc } from '../../models/npc.model';
import { ActivatedRoute } from '@angular/router';
import { NpcService } from '../../services/npc.service';

@Component({
  selector: 'app-npc-detail',
  templateUrl: './npc-detail.component.html',
  styleUrls: ['./npc-detail.component.css']
})
export class NpcDetailComponent implements OnInit {
  npc: Npc;
  id: number;

  constructor(private npcService: NpcService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];

    this.id = +id;

    this.npc = this.npcService.getNpc(this.id);

  }

}
