import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from '@angular/fire/auth';

import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { NpcListComponent } from './factions-and-npc/npc/npc-list/npc-list.component';
import { NpcItemComponent } from './factions-and-npc/npc/npc-list/npc-item/npc-item.component';
import { FactionListComponent } from './factions-and-npc/faction/faction-list/faction-list.component';
import { FactionItemComponent } from './factions-and-npc/faction/faction-list/faction-item/faction-item.component';
import { ContentComponent } from './content/content.component';
import { ViewportComponent } from './viewport/viewport.component';
import { FactionsAndNpcComponent } from './factions-and-npc/factions-and-npc.component';
import { ItemsComponent } from './items/items.component';
import { AddnpcComponent } from './factions-and-npc/npc/addnpc/addnpc.component';
import { OverviewComponent } from './overview/overview.component';
import { MainFactionsAndNpcComponent } from './factions-and-npc/main-factions-and-npc/main-factions-and-npc.component';
import { NpcDetailComponent } from './factions-and-npc/npc/npc-detail/npc-detail.component';
import { FormsModule } from "@angular/forms";
import { RegisterComponent } from './login-and-register/register/register.component';
import { LoginComponent } from './login-and-register/login/login.component';
import { PasswordresetComponent } from './login-and-register/passwordreset/passwordreset.component';
import { NpcService } from './factions-and-npc/services/npc.service';
import { UserService } from './login-and-register/services/user.service';
import { CampaigndetailsComponent } from './overview/campaigndetails/campaigndetails.component';
import { WhatsnextComponent } from './overview/whatsnext/whatsnext.component';
import { MainOverviewComponent } from './overview/main-overview/main-overview.component';
import { AddcampaignComponent } from './overview/addcampaign/addcampaign.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    NpcListComponent,
    NpcItemComponent,
    FactionListComponent,
    FactionItemComponent,
    ContentComponent,
    ViewportComponent,
    FactionsAndNpcComponent,
    ItemsComponent,
    AddnpcComponent,
    OverviewComponent,
    MainFactionsAndNpcComponent,
    NpcDetailComponent,
    RegisterComponent,
    LoginComponent,
    PasswordresetComponent,
    CampaigndetailsComponent,
    WhatsnextComponent,
    MainOverviewComponent,
    AddcampaignComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [AngularFireAuth, NpcService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
