import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FavoritesCitiesService } from 'src/app/entities/state/favorites-cities/state/favorites-cities.service';
import { FavoritesCity } from 'src/app/entities/state/favorites-cities/state/favorites-city.model';
import { FiveDaysForecastService } from 'src/app/entities/state/five-days-forecast/five-days-forecast.service';

@Component({
  selector: 'favorite-item',
  templateUrl: './favorite-item.component.html',
  styleUrls: ['./favorite-item.component.scss']
})
export class FavoriteItemComponent implements OnInit {
  @Input() city: FavoritesCity;
  constructor(private favoritesCitiesService: FavoritesCitiesService,
    private router: Router,
    private fiveDaysForecastService: FiveDaysForecastService) { }

  ngOnInit(): void {
    if (!this.city.currentWeather) {
      this.favoritesCitiesService.setForecast(this.city);
    }
  }


  removeFromFavorites() {
    this.favoritesCitiesService.remove(this.city.id);
  }

  navigateToFiveDays() {
    this.fiveDaysForecastService.get(this.city.apiKey);
    this.router.navigate(['home']);
  }

}
