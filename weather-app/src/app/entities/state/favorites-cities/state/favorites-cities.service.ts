import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { HttpClient } from '@angular/common/http';
import { FavoritesCitiesStore } from './favorites-cities.store';
import { createFavoritesCity, CurrentWeather, FavoritesCity } from './favorites-city.model';
import { LocalstorageService } from 'src/app/services/localstorage.service';
import { LocalStorageKey } from 'src/app/app.enums';
import { FavoritesCitiesQuery } from './favorites-cities.query';
import { environment } from 'src/environments/environment';
import { of, Observable } from 'rxjs';
import { concatMap, delay } from 'rxjs/operators';
import { UtilitiesService } from 'src/app/services/utilities.service';

@Injectable({ providedIn: 'root' })
export class FavoritesCitiesService {

  constructor(private favoritesCitiesStore: FavoritesCitiesStore,
    private http: HttpClient,
    private utilitiesService:UtilitiesService,
    private favoritesCitiesQuery: FavoritesCitiesQuery,
    private localstorageService: LocalstorageService,
  ) {
  }

  get() {
    const cities: FavoritesCity[] = this.localstorageService.getItem(LocalStorageKey.FavoritesCities);
    if (cities) {
      this.favoritesCitiesStore.set(cities);
    }
  }

  add(favoritesCity: Partial<FavoritesCity>) {
    const cityToAdd: FavoritesCity = createFavoritesCity(favoritesCity);
    this.favoritesCitiesQuery.selectEntity((item: FavoritesCity) => item.apiKey === cityToAdd.apiKey).subscribe((isItemExist) => {
      if (!isItemExist) {
        this.favoritesCitiesStore.add(cityToAdd);
        this.saveToLocalStorage();
      }
    });
  }

  private saveToLocalStorage() {
    const entities = Object.values(this.favoritesCitiesStore.getValue().entities);
    this.localstorageService.saveItem(LocalStorageKey.FavoritesCities, JSON.stringify(entities));
  }

  update(id, favoritesCity: Partial<FavoritesCity>) {
    this.favoritesCitiesStore.update(id, favoritesCity);
  }

  setForecast(favoritesCity: Partial<FavoritesCity>) {
    const newFavoritesCity = { ...favoritesCity };
    this.http.get(`http://dataservice.accuweather.com/currentconditions/v1/${favoritesCity.apiKey}?apikey=${environment.weatherApiToken}`)
    .subscribe((res: CurrentWeather[]) => {
      if (res && res.length > 0) {
        newFavoritesCity.currentWeather = res[0];
        this.update(newFavoritesCity.id, newFavoritesCity);
      }
    }
    , () => {
      this.utilitiesService.showError();
    })

    // this.getMockDate().pipe(
    //   concatMap(item => of(item).pipe(delay(200))))
    //   .subscribe((res: CurrentWeather[]) => {
    //     if (res && res.length > 0) {
    //       newFavoritesCity.currentWeather = res[0];
    //       this.update(newFavoritesCity.id, newFavoritesCity);
    //     }
    //   })

  }


  remove(id: ID) {
    this.favoritesCitiesStore.remove(id);
  }


  getMockDate(): Observable<any> {
    return of([
      {
        "LocalObservationDateTime": "2020-09-26T18:35:00+08:00",
        "EpochTime": 1601116500,
        "WeatherText": "Overcast",
        "WeatherIcon": 7,
        "HasPrecipitation": false,
        "PrecipitationType": null,
        "LocalSource": {
          "Id": 7,
          "Name": "Huafeng",
          "WeatherCode": "02"
        },
        "IsDayTime": false,
        "Temperature": {
          "Metric": {
            "Value": 21.3,
            "Unit": "C",
            "UnitType": 17
          },
          "Imperial": {
            "Value": 70,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "MobileLink": "http://m.accuweather.com/en/cn/taizhou/2333653/current-weather/2333653?lang=en-us",
        "Link": "http://www.accuweather.com/en/cn/taizhou/2333653/current-weather/2333653?lang=en-us"
      }
    ]);
  }
}
