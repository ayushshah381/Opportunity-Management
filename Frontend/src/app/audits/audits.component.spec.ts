import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { AuditsComponent } from './audits.component';
import { By } from '@angular/platform-browser';

describe('AuditsComponent', () => {
  let component: AuditsComponent;
  let fixture: ComponentFixture<AuditsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuditsComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an h3 tag with content', () =>{
    const h3Ele = fixture.debugElement.query(By.css('h3'));
    expect(h3Ele.nativeElement.textContent).toBe("AUDITS");
  });

  it('should have a table', () =>{
    const table= fixture.debugElement.query(By.css('table')).nativeElement;
    expect(table).toBeTruthy();
  });
});
