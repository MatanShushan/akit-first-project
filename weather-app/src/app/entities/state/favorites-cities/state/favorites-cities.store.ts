import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { FavoritesCity } from './favorites-city.model';

export interface FavoritesCitiesState extends EntityState<FavoritesCity> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'favoritesCities' })
export class FavoritesCitiesStore extends EntityStore<FavoritesCitiesState, FavoritesCity> {

  constructor() {
    super();
  }

}

