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
    this.fiveDaysForecastQuery.selectAll().subscribe((forecast: FiveDaysForecast[]) => {
      if (forecast && forecast[0]) {
        this.fiveDaysForecast = forecast[0];
      }
    });
  }

  addToFavorites() {
    this.favoritesCitiesService.add({
      apiKey: '2333653',
      name: 'tahizo',
      currentWeather: null
    });
  }

}
