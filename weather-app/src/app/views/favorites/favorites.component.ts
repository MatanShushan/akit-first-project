import { Component, OnInit } from '@angular/core';
import { FavoritesCitiesService } from 'src/app/entities/state/favorites-cities/state/favorites-cities.service';
import { FavoritesCitiesQuery } from '../../entities/state/favorites-cities/state/favorites-cities.query';
import { Observable } from 'rxjs';
import { FavoritesCity } from 'src/app/entities/state/favorites-cities/state/favorites-city.model';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  favoritesCitiesQuery$: Observable<FavoritesCity[]> = this.favoritesCitiesQuery.selectAll();
  constructor(private favoritesCitiesService: FavoritesCitiesService,
    private favoritesCitiesQuery: FavoritesCitiesQuery) { }

  ngOnInit(): void {

    this.favoritesCitiesService.get();
  }

}
