import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { SocialAuthService } from 'angularx-social-login';
import { Observable, of } from 'rxjs';
import {Location} from '@angular/common';
import { LoginComponent } from './login.component';
import { By } from '@angular/platform-browser';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [ RouterTestingModule.withRoutes([
        { path: 'home',component: DummyComponent}
      ]), 
      HttpClientModule, FormsModule],
      providers: [{provide: SocialAuthService, useClass: SocialAuthServiceStub}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be the landing page', () =>{
    const location = TestBed.get(Location);
    expect(location.path()).toBe('');
  });

  it('should have an h1 tag with content', () =>{
    const h1Ele = fixture.debugElement.query(By.css('h1'));
    expect(h1Ele.nativeElement.textContent).toBe(" OPPORTUNITY MANAGEMENT PORTAL ");
  });

  it('should be at / after clicking Sign in', async()=>{
    const location = TestBed.inject(Location);
    const buttons = fixture.debugElement.queryAll(By.css('.btn-full'));
    const googleSignIn: HTMLButtonElement = buttons[0].nativeElement;
    googleSignIn.click();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(location.path()).toBe('')
    })
  });

});

class SocialAuthServiceStub{
  authState = of();
  signIn(){}
}

@Component({template:''})
export class DummyComponent {}
