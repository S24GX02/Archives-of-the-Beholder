import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';
import { AuthService } from './login-and-register/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Archives of the Beholder'
  public npcs: Observable<any[]>;
  currentLoggedInUser: string;


  constructor(db:AngularFirestore, public authService: AuthService) {
    this.npcs = db.collection('/npcs').valueChanges();
    this.authService.afAuth.authState.subscribe(user => {
      if(user) this.currentLoggedInUser=user.uid;
    });

  }

}
