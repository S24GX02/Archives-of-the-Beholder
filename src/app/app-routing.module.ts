import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FactionsAndNpcComponent } from './factions-and-npc/factions-and-npc.component';
import { ItemsComponent } from './items/items.component';
import { OverviewComponent } from './overview/overview.component';
import { MainFactionsAndNpcComponent } from './factions-and-npc/main-factions-and-npc/main-factions-and-npc.component';
import { NpcDetailComponent } from './factions-and-npc/npc/npc-detail/npc-detail.component';
import { AddnpcComponent } from './factions-and-npc/npc/addnpc/addnpc.component';
import { Npc } from './factions-and-npc/models/npc.model';
import { RegisterComponent } from './login-and-register/register/register.component';
import { LoginComponent } from './login-and-register/login/login.component';
import { MainOverviewComponent } from './overview/main-overview/main-overview.component';
import { AddcampaignComponent } from './overview/addcampaign/addcampaign.component';
import { AddfactionComponent } from './factions-and-npc/faction/addfaction/addfaction/addfaction.component';
import { FactionDetailComponent } from './factions-and-npc/faction/faction-detail/faction-detail/faction-detail.component';
import { CharactersComponent } from './characters/characters.component';
import { AddcharacterComponent } from './characters/character/addcharacter/addcharacter.component';
import { MainCharacterComponent } from './characters/main-character/main-character.component';

const routes: Routes = [

  // Login & Register Routes.
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },

  // Campaign Routes
  { path: '', redirectTo: '/login', pathMatch: 'full' },


  { path: 'factions-and-npcs', component: FactionsAndNpcComponent, children: [
    { path: '', component: MainFactionsAndNpcComponent },
    { path: 'npc/new', component: AddnpcComponent, pathMatch: 'full' },
    { path: 'npc/:documentId', component: NpcDetailComponent },
    { path: 'faction/new', component: AddfactionComponent, pathMatch: 'full' },
    { path: 'faction/:documentId', component: FactionDetailComponent },
  ]},

  { path: 'campaign-overview', component: OverviewComponent, children: [
    {path: '', component: MainOverviewComponent},
    {path: 'campaign/new', component: AddcampaignComponent},
  ]},

  { path: 'partyview', component: OverviewComponent },

  { path: 'encounters', component: OverviewComponent },

  { path: 'mapview', component: OverviewComponent },

  { path: 'timeline', component: OverviewComponent },


  // Player Routes
  { path: 'items', component: ItemsComponent },

  { path: 'characters', component: CharactersComponent, children: [
    { path: '', component: MainCharacterComponent },
    { path: 'new', component: AddcharacterComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
