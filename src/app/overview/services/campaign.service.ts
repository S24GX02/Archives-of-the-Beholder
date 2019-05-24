import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AuthService } from 'src/app/login-and-register/services/auth.service';
import { Campaign } from '../models/campaign.model';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { take, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { User } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {

  campaignCollection: AngularFirestoreCollection<Campaign>;
  campaigns: Observable<Campaign[]>;
  currentCampaign: Campaign;
  currentloggedInUser: string;

  constructor(public afs: AngularFirestore, public authService: AuthService) {
  }

  getCampaign(userId) {
    this.campaignCollection = this.afs.collection<Campaign>('campaigns', ref => ref.where('dmId', '==', userId).limit(1));
    this.campaigns = this.campaignCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Campaign;
          data.documentId = a.payload.doc.id;
          return {...data};
        });
      })
    );
    this.campaigns.subscribe(campaigns => {
      campaigns.forEach(campaign => {
        if (campaign) {
          this.currentCampaign = campaign;
          console.log(this.currentCampaign);
        } else  {
          this.currentCampaign = null;
        }
      });
    });
    return this.campaigns;
  }

  returnCurrentCampaign(){
    return this.currentCampaign;
  }

  addCampaign(campaign: Campaign) {
    this.campaignCollection = this.afs.collection('campaigns');
    this.currentloggedInUser = this.authService.afAuth.auth.currentUser.uid;
    console.log(this.currentloggedInUser);
    this.campaignCollection.add(campaign);
  }
}
