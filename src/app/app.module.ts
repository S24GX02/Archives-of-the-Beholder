import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { NpcListComponent } from './factions-and-npc/npc-list/npc-list.component';
import { NpcItemComponent } from './factions-and-npc/npc-list/npc-item/npc-item.component';
import { FactionListComponent } from './factions-and-npc/faction-list/faction-list.component';
import { FactionItemComponent } from './factions-and-npc/faction-list/faction-item/faction-item.component';
import { ContentComponent } from './content/content.component';
import { ViewportComponent } from './viewport/viewport.component';
import { FactionsAndNpcComponent } from './factions-and-npc/factions-and-npc.component';
import { ItemsComponent } from './items/items.component';
import { NpcdetailComponent } from './factions-and-npc/npcdetail/npcdetail.component';
import { AddnpcComponent } from './factions-and-npc/addnpc/addnpc.component';


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
    NpcdetailComponent,
    AddnpcComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
