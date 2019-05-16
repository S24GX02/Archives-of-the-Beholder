import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AuthService } from 'src/app/login-and-register/services/auth.service';
import { Campaign } from '../models/campaign.model';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { take, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {

  campaignCollection: AngularFirestoreCollection<Campaign>;
  campaignDoc: AngularFirestoreDocument<Campaign>;
  campaigns: Observable<Campaign[]>;
  campaign: Campaign;
  currentloggedInUserId: string;
  containsCampaign: boolean;

  constructor(public afs: AngularFirestore, public authService: AuthService) {
    this.authService.afAuth.auth.onAuthStateChanged(user => {
      this.currentloggedInUserId = user.uid;
      console.log(this.currentloggedInUserId);
    });

    //this.campaignCollection = this.afs.collection('users').doc(this.currentloggedInUserId).collection('campaigns');

    /* this.campaigns = this.campaignCollection.snapshotChanges().pipe(
      map(actions =>
        actions.map(a => {
          const data = a.payload.doc.data() as Campaign;
          data.documentId = a.payload.doc.id;
          return data;
        })
      )
    ); */

  }


  getCampaignState(){
    console.log(this.currentloggedInUserId);
    this.campaignCollection = this.afs.collection('users').doc(this.currentloggedInUserId).collection('campaigns');
    this.campaignCollection.get().toPromise();
    if (this.campaignCollection != null) {
      this.containsCampaign = true;
      console.log(this.containsCampaign);
    } else {
      this.containsCampaign = false;
    }
    return this.containsCampaign;
  }

  getCampaign(){
    
  }

  addCampaign(campaign: Campaign){
    campaign.dmId = this.currentloggedInUserId;
    this.campaignCollection = this.afs.collection('users').doc(this.currentloggedInUserId).collection('campaigns');
    this.campaignCollection.add(campaign);
  }

}
