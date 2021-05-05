import { Location } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CanActivate } from '@angular/router';
import {SocialAuthService} from "angularx-social-login";
import { HomeComponent } from './home.component';
import { Component } from '@angular/core';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [RouterTestingModule.withRoutes([
        {path: 'home', component: DummyComponent}
      ])],
      providers: [{provide: SocialAuthService, useClass: SocialAuthServiceStub}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});

class SocialAuthServiceStub implements CanActivate{
  canActivate(){
    return true;
  }
  check(){
    return true;
  }
  subscribe(){
    return true;
  }
}

@Component({template:''})
export class DummyComponent {}