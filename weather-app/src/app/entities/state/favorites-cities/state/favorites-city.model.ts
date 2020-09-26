import { guid, ID } from '@datorama/akita';

export interface FavoritesCity {
  id: ID;
  apiKey: string;
  name: string;
  currentWeather: CurrentWeather;
}

export interface CurrentWeather {
  EpochTime: number;
  WeatherIcon: number;
  WeatherText: string;
  HasPrecipitation: false;
  LocalObservationDateTime: string;
  LocalSource: {
    Id: number;
    Name: string;
    WeatherCode: string;
  },
  IsDayTime: boolean;
  Temperature: {
    Metric: {
      Value: number;
      Unit: 'C' | 'F';
      UnitType: number;
    };
    Imperial: {
      Value: number;
      Unit: string;
      UnitType: number;
    }
  },
  MobileLink: string;
  Link: string;
}


/**
 * A factory function that creates FavoritesCities
 */
export function createFavoritesCity(params: Partial<FavoritesCity>) {
  return {
    apiKey: params.apiKey,
    name: params.name,
    id: guid()
  } as FavoritesCity;
}


[

]
