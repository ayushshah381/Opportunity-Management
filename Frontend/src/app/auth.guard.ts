import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {SocialUser} from 'angularx-social-login';
import {SocialAuthService, GoogleLoginProvider} from 'angularx-social-login';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private socialAuthService: SocialAuthService, private router: Router){}

  loggedIn: boolean = false;

  canActivate(){
    this.socialAuthService.authState.subscribe(user => {
      this.loggedIn = (user != null);
    });
    if(this.loggedIn)
    {
      return true;
    }
    else{
      this.router.navigate(['']);
      return false;
    }
  }
  
}
