import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';
import { AuthService } from './login-and-register/services/auth.service';
import { Npc } from './factions-and-npc/models/npc.model';
import { Campaign } from './overview/models/campaign.model';
import { NpcService } from './factions-and-npc/services/npc.service';
import { CampaignService } from './overview/services/campaign.service';
import { UserService } from './login-and-register/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthService, NpcService, CampaignService, UserService],
})

export class AppComponent {
  title = 'Archives of the Beholder'
  //public npcs: Observable<any[]>;
  
  currentLoggedInUser: string;


  constructor(db:AngularFirestore, public authService: AuthService) {
    //this.npcs = db.collection('/npcs').valueChanges();
    this.authService.afAuth.authState.subscribe(user => {
      if(user) this.currentLoggedInUser=user.uid;
      console.log(this.currentLoggedInUser);
    });
    

  }

}
