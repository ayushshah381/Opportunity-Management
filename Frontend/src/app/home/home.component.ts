import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {SocialUser} from 'angularx-social-login';
import {SocialAuthService, GoogleLoginProvider} from 'angularx-social-login';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private authService: SocialAuthService,
    private router: Router) { }

  user?: SocialUser;

  ngOnInit(): void {
    
    // this.authService.authState.subscribe((user) => {
    //   this.user = user;
    // });
    
  }

  signOut(): void {
    this.authService.signOut();
    this.goToLogin();
    localStorage.clear();
  }

  goToLogin(): void{
    this.router.navigate(['']);
  }

}