import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {SocialUser} from 'angularx-social-login';
import {SocialAuthService, GoogleLoginProvider} from 'angularx-social-login';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: SocialAuthService,
    private router: Router) { }

  ngOnInit(): void {
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
