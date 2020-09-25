import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { City } from './city.model';

export interface CityState extends EntityState<City> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'city' })
export class CityStore extends EntityStore<CityState, City> {

  constructor() {
    super();
  }

}

