import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SocialLoginModule, SocialAuthServiceConfig, GoogleLoginProvider } from "angularx-social-login";
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { DemandsComponent } from './demands/demands.component';
import { DemandsService } from './demands.service';
import { HttpClientModule } from '@angular/common/http';
import { AddDemandComponent } from './add-demand/add-demand.component';
import { UpdateDemandComponent } from './update-demand/update-demand.component';
import { ViewSingleDemandComponent } from './view-single-demand/view-single-demand.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    DemandsComponent,
    AddDemandComponent,
    UpdateDemandComponent,
    ViewSingleDemandComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocialLoginModule,
    FormsModule,
    HttpClientModule
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
    },
    DemandsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
