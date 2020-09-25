import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { HttpClient } from '@angular/common/http';
import { FavoritesCitiesStore } from './favorites-cities.store';
import { createFavoritesCity, FavoritesCity } from './favorites-city.model';
import { LocalstorageService } from 'src/app/services/localstorage.service';
import { LocalStorageKey } from 'src/app/app.enums';

@Injectable({ providedIn: 'root' })
export class FavoritesCitiesService {

  constructor(private favoritesCitiesStore: FavoritesCitiesStore,
    private localstorageService: LocalstorageService,
  ) {
  }

  get() {
    const cities: FavoritesCity[] = this.localstorageService.getItem(LocalStorageKey.favoritesCities);
    if (cities) {
      this.favoritesCitiesStore.set(cities);
    }
  }

  add(favoritesCity: Partial<FavoritesCity>) {
    const cityToAdd: FavoritesCity = createFavoritesCity(favoritesCity);
    this.favoritesCitiesStore.add(cityToAdd);
  }

  update(id, favoritesCity: Partial<FavoritesCity>) {
    this.favoritesCitiesStore.update(id, favoritesCity);
  }

  remove(id: ID) {
    this.favoritesCitiesStore.remove(id);
  }
}
