import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TrendsService } from './../trends.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {HttpClientModule} from '@angular/common/http';
import { TrendsComponent } from './trends.component';
import { of } from 'rxjs';
import { ChartsModule } from 'ng2-charts';
import { By } from '@angular/platform-browser';

describe('TrendsComponent', () => {
  let component: TrendsComponent;
  let fixture: ComponentFixture<TrendsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendsComponent ],
      imports: [HttpClientTestingModule,RouterTestingModule,ChartsModule, BrowserAnimationsModule],
      providers: [{provide: TrendsService}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 3 h6 tags',() => {
    const h6Ele = fixture.debugElement.queryAll(By.css("h6"));
    expect(h6Ele.length).toBe(3);
    
  })

  it('should have 2 h5 tags',() => {
    const h5Ele = fixture.debugElement.queryAll(By.css("h5"));
    expect(h5Ele.length).toBe(2);
  })

  it('should have 1 h3 tags',() => {
    const h3Ele = fixture.debugElement.queryAll(By.css("h3"));
    expect(h3Ele.length).toBe(1);
  })
});

