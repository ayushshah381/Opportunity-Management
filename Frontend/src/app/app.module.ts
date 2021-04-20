import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SocialLoginModule, SocialAuthServiceConfig, GoogleLoginProvider } from "angularx-social-login";
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocialLoginModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('1011943339541-9l54am656pekr2tehi7e5n7fqj07cumd.apps.googleusercontent.com'
            )
          }
        ]
      } as SocialAuthServiceConfig,
    }//, LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
