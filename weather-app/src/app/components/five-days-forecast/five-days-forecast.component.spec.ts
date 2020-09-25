import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiveDaysForecastComponent } from './five-days-forecast.component';

describe('FiveDaysForecastComponent', () => {
  let component: FiveDaysForecastComponent;
  let fixture: ComponentFixture<FiveDaysForecastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiveDaysForecastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiveDaysForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
