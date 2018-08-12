
import {  UserService } from 'shared/services/user.service';
import { AuthService } from 'shared/services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import 'rxjs/add/operator/map';

import { Observable } from 'rxjs';

@Injectable()
export class AdminAuthGuardService implements CanActivate {


  constructor(private auth: AuthService , private userService: UserService) { }

   canActivate(): Observable<boolean> {
  return this.auth.appUser$
    .map(AppUser => AppUser.isAdmin);
}


}
