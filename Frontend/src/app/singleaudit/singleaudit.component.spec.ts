import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from "@angular/router/testing";

import { SingleauditComponent } from './singleaudit.component';
import { By } from '@angular/platform-browser';

describe('SingleauditComponent', () => {
  let component: SingleauditComponent;
  let fixture: ComponentFixture<SingleauditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleauditComponent ],
      imports: [HttpClientTestingModule,RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleauditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an h3 tag with content', () =>{
    const h3Ele = fixture.debugElement.query(By.css('h3'));
    expect(h3Ele.nativeElement.textContent).toContain("AUDITS FOR DEMAND ID:");
  });

  it('should have a table', () =>{
    const table= fixture.debugElement.query(By.css('table')).nativeElement;
    expect(table).toBeTruthy();
  });
});
