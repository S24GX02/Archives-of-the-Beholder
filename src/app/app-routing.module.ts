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

const routes: Routes = [

  //Login & Register Routes.
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },

  //Campaign Routes
  { path: '', redirectTo: '/login', pathMatch: 'full' },

  
  { path: 'factions-and-npcs', component: FactionsAndNpcComponent, children: [
    {path: '', component: MainFactionsAndNpcComponent},
    {path: ':documentId', component: NpcDetailComponent},
    {path: 'npc/new', component: AddnpcComponent, pathMatch: 'full'}
  ]},

  { path: 'campaign-overview', component: OverviewComponent },

  { path: 'partyview', component: OverviewComponent },

  { path: 'encounters', component: OverviewComponent },

  { path: 'mapview', component: OverviewComponent },

  { path: 'timeline', component: OverviewComponent },


  // Player Routes
  { path: 'items', component: ItemsComponent },
  { path: 'characters', component: ItemsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
