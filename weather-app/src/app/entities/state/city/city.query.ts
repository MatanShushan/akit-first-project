import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { CityStore, CityState } from './city.store';
import { City } from './city.model';

@Injectable({
  providedIn: 'root'
})
export class CityQuery extends QueryEntity<CityState, City> {

  constructor(protected store: CityStore) {
    super(store);
  }

}
