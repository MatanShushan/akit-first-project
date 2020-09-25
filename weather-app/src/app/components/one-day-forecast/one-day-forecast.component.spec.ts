import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneDayForecastComponent } from './one-day-forecast.component';

describe('OneDayForecastComponent', () => {
  let component: OneDayForecastComponent;
  let fixture: ComponentFixture<OneDayForecastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneDayForecastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneDayForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
