import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Npc } from '../../models/npc.model';

@Component({
  selector: 'app-addnpc',
  templateUrl: './addnpc.component.html',
  styleUrls: ['./addnpc.component.css']
})
export class AddnpcComponent implements OnInit {
  
  @ViewChild('nameInput') nameInputRef:ElementRef;
  @ViewChild('classInput') classInputRef:ElementRef;
  @ViewChild('raceInput') raceInputRef:ElementRef;
  @ViewChild('descriptionInput') descriptionInputRef:ElementRef;
  @ViewChild('occupancyInput') occupancyInputRef:ElementRef;
  @ViewChild('locationInput') locationInputRef:ElementRef;

  @Output() npcAdded = new EventEmitter<Npc>();

  constructor() { }

  ngOnInit() {
  }

  onAddNpc(){

    const npcName = this.nameInputRef.nativeElement.value;
    const npcClass = this.classInputRef.nativeElement.value;
    const npcRace = this.raceInputRef.nativeElement.value;
    const npcDescription = this.descriptionInputRef.nativeElement.value;
    const npcOccupancy = this.occupancyInputRef.nativeElement.value;
    const npcLocation = this.locationInputRef.nativeElement.value;
    const newNPC = new Npc(npcName, npcRace, npcClass, npcDescription, npcOccupancy, npcLocation, '');
    this.npcAdded.emit(newNPC);
  }

}
