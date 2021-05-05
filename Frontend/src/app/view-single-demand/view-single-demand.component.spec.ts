import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { ViewSingleDemandComponent } from './view-single-demand.component';
import { By } from '@angular/platform-browser';

describe('ViewSingleDemandComponent', () => {
  let component: ViewSingleDemandComponent;
  let fixture: ComponentFixture<ViewSingleDemandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSingleDemandComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSingleDemandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 1 h3 tag',() => {
    const h3Ele = fixture.debugElement.queryAll(By.css("h3"));
    expect(h3Ele.length).toBe(1);
  });

  it('should have a ul', () =>{
    const table= fixture.debugElement.query(By.css('.list-group')).nativeElement;
    expect(table).toBeTruthy();
  });
});
