import { ID } from '@datorama/akita';

export interface FiveDaysForecast {
  cityName: string;
  cityKey: string;
  data: FiveDaysForecastData;
}

export interface FiveDaysForecastData {
  id: ID;
  Headline: {
    EffectiveDate: string;
    Text: string;
    Category: string;
    EndDate: string;
    MobileLink: string;
    Link: string;
    Severity: number;
    EndEpochDate: number;
    EffectiveEpochDate: number;
  };
  DailyForecasts: DailyForecasts[];
}

export interface DailyForecasts {
  Date: string;
  EpochDate: number;
  Temperature: {
    Minimum: { Value: number, Unit: 'C' | 'F', UnitType: number },
    Maximum: { Value: number, Unit: 'C' | 'F', UnitType: number }
  };
  Day: {
    Icon: number;
    IconPhrase: string;
    HasPrecipitation: boolean;
    LocalSource: { Id: number; Name: string; WeatherCode: string };
  };
  Night: {
    Icon: number;
    IconPhrase: string;
    HasPrecipitation: boolean;
    LocalSource: { Id: number; Name: string; WeatherCode: string };
  };
  Sources: string[];
  MobileLink: string;
  Link: string;
}
