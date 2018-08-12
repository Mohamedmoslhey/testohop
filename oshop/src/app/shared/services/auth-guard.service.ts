import { AuthService } from 'shared/services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import 'rxjs/add/operator/map'; // import this for map

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private auth: AuthService, private router: Router) { }

// this method in simple way talk about if user not authorize (i.e) Admin) so Ok no problem
// return it to login page other wise log in
  canActivate(route, state: RouterStateSnapshot)  {
    return this.auth.user$.map(user => { // later in video 292 he change it from subscribe to map
      if (user) {return true; }
    this.router.navigate(['/login'], {queryParams: {returnUrl: state.url }});
      return false ;
    });
  }
}
