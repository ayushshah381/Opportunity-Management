import { SocialAuthService } from 'angularx-social-login';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CanActivate } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { NavbarComponent } from './navbar.component';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import {Location} from '@angular/common';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarComponent ],
      imports: [RouterTestingModule.withRoutes([
        {path: 'home', component: DummyComponent},
        {path: 'addDemand', component: DummyComponent},
        {path: 'allDemands', component: DummyComponent},
        {path: 'trends', component: DummyComponent},
        {path: 'audits', component: DummyComponent},
        {path: '', component: DummyComponent}
      ])],
      providers: [{provide: SocialAuthService, useClass: SocialAuthServiceStub}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 5 anchor tags', () =>{
    const aEle = fixture.debugElement.queryAll(By.css("a"));
    expect(aEle.length).toBe(5);
  });

  it('should have one logout button',() => {
    const location = TestBed.get(Location);
    const logoutButton = fixture.debugElement.queryAll(By.css('button'))[1].nativeElement;
    expect(logoutButton.textContent).toBe("Sign Out");
  });

  it('should redirect to login when logout is clicked', ()=>{
    const location = TestBed.inject(Location);
    const logoutButton = fixture.debugElement.queryAll(By.css('button'))[1].nativeElement;
    logoutButton.click();
    fixture.detectChanges();
    expect(location.path()).toBe('');
  });

  it('should navigate to /addDemand on Add Demand click', () => {
    const location = TestBed.inject(Location)
    const linkDes = fixture.debugElement.queryAll(By.css(".nav-link"))
    const nativeButton: HTMLButtonElement = linkDes[0].nativeElement;
    nativeButton.click();
    fixture.detectChanges()
    fixture.whenStable().then(() => {
      expect(location.path()).toBe('/addDemand')
    });
  });

  it('should navigate to /allDemands on All Demands click', () => {
    const location = TestBed.inject(Location)
    const linkDes = fixture.debugElement.queryAll(By.css(".nav-link"))
    const nativeButton: HTMLButtonElement = linkDes[1].nativeElement;
    nativeButton.click();
    fixture.detectChanges()
    fixture.whenStable().then(() => {
      expect(location.path()).toBe('/allDemands')
    });
  });

  it('should navigate to /trends on Trends click', () => {
    const location = TestBed.inject(Location)
    const linkDes = fixture.debugElement.queryAll(By.css(".nav-link"))
    const nativeButton: HTMLButtonElement = linkDes[2].nativeElement;
    nativeButton.click();
    fixture.detectChanges()
    fixture.whenStable().then(() => {
      expect(location.path()).toBe('/trends')
    });
  });

  it('should navigate to /audits on Audits click', () => {
    const location = TestBed.inject(Location)
    const linkDes = fixture.debugElement.queryAll(By.css(".nav-link"))
    const nativeButton: HTMLButtonElement = linkDes[3].nativeElement;
    nativeButton.click();
    fixture.detectChanges()
    fixture.whenStable().then(() => {
      expect(location.path()).toBe('/audits')
    });
  });



});

class SocialAuthServiceStub implements CanActivate{
  canActivate(){
    return true;
  }
  check(){
    return true;
  }
  signOut()
  {
    
  }
}

@Component({template:''})
export class DummyComponent {}
