import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { HttpClient } from '@angular/common/http';
import { CityStore } from './city.store';
import { City } from './city.model';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class CityService {

  constructor(private cityStore: CityStore,
    private http: HttpClient) {
  }

  get(searchText: string) {
    // this.http.get(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${environment.weatherApiToken}&q=${searchText}`).subscribe((entities: City[]) => {
    //   this.cityStore.set(entities);
    // });
    let city: City = {
      id: 'sdf',
      "Version": 1,
      "Key": "2333653",
      "Type": "City",
      "Rank": 15,
      "LocalizedName": "Taizhou",
      "Country": { "ID": "CN", "LocalizedName": "China" },
      "AdministrativeArea": { "ID": "ZJ", "LocalizedName": "Zhejiang" }
    }
    this.cityStore.set([city]);

  }




}
