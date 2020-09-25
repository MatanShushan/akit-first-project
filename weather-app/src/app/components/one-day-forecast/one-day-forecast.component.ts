import { Component, Input, OnInit } from '@angular/core';
import { DailyForecasts, FiveDaysForecast } from 'src/app/entities/state/five-days-forecast/five-days-forecast.model';
import { FiveDaysForecastStore } from '../../entities/state/five-days-forecast/five-days-forecast.store';
import { FiveDaysForecastQuery } from '../../entities/state/five-days-forecast/five-days-forecast.query';

@Component({
  selector: 'one-day-forecast',
  templateUrl: './one-day-forecast.component.html',
  styleUrls: ['./one-day-forecast.component.scss']
})
export class OneDayForecastComponent implements OnInit {
  @Input() dailyForecasts: DailyForecasts;
  constructor(private fiveDaysForecastQuery: FiveDaysForecastQuery) { }

  ngOnInit(): void {

  }

}
