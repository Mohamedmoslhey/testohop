import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AppUser } from 'shared/model/app.user';
import { UserService } from 'shared/services/user.service';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';

@Injectable()
export class AuthService {
  user$: Observable<firebase.User>;

  constructor( private userService: UserService , private auth: AngularFireAuth , private route: ActivatedRoute ) {
    this.user$ = auth.authState;
  }

  login() {
let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/'; // have return Url or route of our site
localStorage.setItem('returnUrl', returnUrl);
this.auth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.auth.auth.signOut();
  }

get appUser$(): Observable<AppUser> {
  return  this.user$
  .switchMap(user => {
    if (user) {
      return this.userService.get(user.uid);
    }
    return Observable.of(null);
  }); // this is used as this form to avoid not logout

}

}
