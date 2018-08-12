import { AuthService } from 'shared/services/auth.service';
import { Component} from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  constructor(private auth: AuthService) { }// Auth service indicate for service componnent


  login() {
 this.auth.login();
// this.auth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

}
