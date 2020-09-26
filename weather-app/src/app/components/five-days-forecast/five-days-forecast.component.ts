import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FavoritesCitiesService } from 'src/app/entities/state/favorites-cities/state/favorites-cities.service';
import { FiveDaysForecast } from 'src/app/entities/state/five-days-forecast/five-days-forecast.model';
import { FiveDaysForecastQuery } from 'src/app/entities/state/five-days-forecast/five-days-forecast.query';

@Component({
  selector: 'five-days-forecast',
  templateUrl: './five-days-forecast.component.html',
  styleUrls: ['./five-days-forecast.component.scss']
})
export class FiveDaysForecastComponent implements OnInit {
  fiveDaysForecast: FiveDaysForecast;

  constructor(
    
    private fiveDaysForecastQuery: FiveDaysForecastQuery, private favoritesCitiesService: FavoritesCitiesService) { }


  ngOnInit(): void {
    this.fiveDaysForecastQuery.selectFirst().subscribe((forecast: FiveDaysForecast) => {
      if (forecast ) {
        this.fiveDaysForecast = forecast;
      }
    });
  }

  addToFavorites() {
    this.favoritesCitiesService.add({
      apiKey: this.fiveDaysForecast.cityKey,
      name: this.fiveDaysForecast.cityName,
      currentWeather: null
    });
  }

}
