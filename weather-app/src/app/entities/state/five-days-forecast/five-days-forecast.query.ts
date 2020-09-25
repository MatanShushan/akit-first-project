import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { FiveDaysForecastStore, FiveDaysForecastState } from './five-days-forecast.store';
import { FiveDaysForecast } from './five-days-forecast.model';

@Injectable({
  providedIn: 'root'
})
export class FiveDaysForecastQuery extends QueryEntity<FiveDaysForecastState, FiveDaysForecast> {

  constructor(protected store: FiveDaysForecastStore) {
    super(store);
  }

}
