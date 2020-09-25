import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { FiveDaysForecast } from './five-days-forecast.model';

export interface FiveDaysForecastState extends EntityState<FiveDaysForecast> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'fiveDaysForecast' })
export class FiveDaysForecastStore extends EntityStore<FiveDaysForecastState, FiveDaysForecast> {

  constructor() {
    super();
  }

}

