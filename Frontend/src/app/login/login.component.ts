import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {SocialUser} from 'angularx-social-login';
import {SocialAuthService, GoogleLoginProvider} from 'angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user?: SocialUser;
  constructor(private authService: SocialAuthService,
    private router: Router) { }

  ngOnInit(): void {

      this.authService.authState.subscribe((user) => {
        this.user = user;
      });
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
      (user) => {
        this.user = user;
        localStorage.setItem('user',user.email);
        localStorage.setItem('username',user.name);
        this.goToHome();
      }
    )
  }

  signOut(): void { 
    this.authService.signOut();
    localStorage.clear();
  }

  goToHome(): void
  {
    this.router.navigate(['/','home']);
  }  
}
