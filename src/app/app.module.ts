import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { NpcListComponent } from './factionsAndNpc/npc-list/npc-list.component';
import { NpcItemComponent } from './factionsAndNpc/npc-list/npc-item/npc-item.component';
import { FactionListComponent } from './factionsAndNpc/faction-list/faction-list.component';
import { FactionItemComponent } from './factionsAndNpc/faction-list/faction-item/faction-item.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    NpcListComponent,
    NpcItemComponent,
    FactionListComponent,
    FactionItemComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
