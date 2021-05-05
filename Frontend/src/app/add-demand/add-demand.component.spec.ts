import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './../navbar/navbar.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { AddDemandComponent } from './add-demand.component';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import {Location} from '@angular/common';

describe('AddDemandComponent', () => {
  let component: AddDemandComponent;
  let fixture: ComponentFixture<AddDemandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDemandComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([{path: 'home',component: DummyComponent}]), FormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDemandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an h2 tag with content', () =>{
    const h2Ele = fixture.debugElement.query(By.css('h2'));
    expect(h2Ele.nativeElement.textContent).toBe("ADD A NEW DEMAND");
  });

  it('should have a form', () =>{
      const form: HTMLFormElement = fixture.debugElement.query(By.css('form')).nativeElement;
      expect(form.submit).toBeTruthy();
  });

  it('should have 7 labels', () =>{
    const location = TestBed.inject(Location);
    const labels = fixture.debugElement.queryAll(By.css('.lbel'));
    expect(labels.length).toBe(7);
    expect(labels[0].nativeElement.textContent).toBe("ED Name");
    expect(labels[1].nativeElement.textContent).toBe("ED Email");
    expect(labels[2].nativeElement.textContent).toBe("Description");
    expect(labels[3].nativeElement.textContent).toBe("Location");
    expect(labels[4].nativeElement.textContent).toBe("Skills");
    expect(labels[5].nativeElement.textContent).toBe("Vacancy");
    expect(labels[6].nativeElement.textContent).toBe("End Date");
  });

  it('should have 7 inputs', () =>{
    const location = TestBed.inject(Location);
    const inputs = fixture.debugElement.queryAll(By.css('.form-control'));
    expect(inputs.length).toBe(7);
  });

  it('should have a submit button', () =>{
    const location = TestBed.inject(Location);
    const linkDes = fixture.debugElement.queryAll(By.css(".btn-submit"))
    const nativeButton: HTMLButtonElement = linkDes[0].nativeElement;
    expect(nativeButton.textContent).toBe("Submit");    
  });
});

@Component({template:''})
export class DummyComponent {}
