import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSingleDemandComponent } from './view-single-demand.component';

describe('ViewSingleDemandComponent', () => {
  let component: ViewSingleDemandComponent;
  let fixture: ComponentFixture<ViewSingleDemandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSingleDemandComponent ]
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
});
