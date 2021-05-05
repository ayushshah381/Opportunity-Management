import { FormsModule } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {HttpClientModule} from '@angular/common/http';
import { DemandsComponent } from './demands.component';
import { By } from '@angular/platform-browser';
import {Location} from '@angular/common';

describe('DemandsComponent', () => {
  let component: DemandsComponent;
  let fixture: ComponentFixture<DemandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandsComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule, FormsModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an h2 tag with content', () =>{
    const h2Ele = fixture.debugElement.query(By.css('h2'));
    expect(h2Ele.nativeElement.textContent).toContain(" WELCOME TO MS-AU");
  });

  it('should have a form', () =>{
    const form: HTMLFormElement = fixture.debugElement.query(By.css('form')).nativeElement;
    expect(form.submit).toBeTruthy();
  });

  it('should have a table', () =>{
    const table= fixture.debugElement.query(By.css('table')).nativeElement;
    expect(table).toBeTruthy();
  });

  it('should have 2 inputs', () =>{
    const location = TestBed.inject(Location);
    const inputs = fixture.debugElement.queryAll(By.css('.testform'));
    expect(inputs.length).toBe(2);
  });
});
