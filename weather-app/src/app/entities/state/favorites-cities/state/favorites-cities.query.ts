import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { FavoritesCitiesStore, FavoritesCitiesState } from './favorites-cities.store';
import { FavoritesCity } from './favorites-city.model';

@Injectable({
  providedIn: 'root'
})
export class FavoritesCitiesQuery extends QueryEntity<FavoritesCitiesState, FavoritesCity> {

  constructor(protected store: FavoritesCitiesStore) {
    super(store);
  }

}
