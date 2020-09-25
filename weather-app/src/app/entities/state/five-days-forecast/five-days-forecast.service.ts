import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { HttpClient } from '@angular/common/http';
import { FiveDaysForecastStore } from './five-days-forecast.store';
import { FiveDaysForecast } from './five-days-forecast.model';



@Injectable({ providedIn: 'root' })
export class FiveDaysForecastService {

  constructor(private fiveDaysForecastStore: FiveDaysForecastStore,
    private http: HttpClient) {
  }

  get(cityCode: string = '2333653') {
    // this.http.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityCode}?apikey=${environment.weatherApiToken}&details=true&metric=false`)
    //   .subscribe((entities: FiveDaysForecast) => {
    //     this.removeAll();
    //     this.fiveDaysForecastStore.set([entities]);
    //   });
    let forecaset: FiveDaysForecast = <FiveDaysForecast>this.getMockData();
    this.removeAll();
    this.fiveDaysForecastStore.set([forecaset]);
  }

  private removeAll() {
    this.fiveDaysForecastStore.reset();
  }


  private getMockData() {
    return {
      "Headline": {
        "EffectiveDate": "2020-09-26T13:00:00+08:00",
        "EffectiveEpochDate": 1601096400,
        "Severity": 5,
        "Text": "Rain Saturday afternoon",
        "Category": "rain",
        "EndDate": "2020-09-26T19:00:00+08:00",
        "EndEpochDate": 1601118000,
        "MobileLink": "http://m.accuweather.com/en/cn/taizhou/2333653/extended-weather-forecast/2333653?lang=en-us",
        "Link": "http://www.accuweather.com/en/cn/taizhou/2333653/daily-weather-forecast/2333653?lang=en-us"
      },
      "DailyForecasts": [
        {
          "Date": "2020-09-25T07:00:00+08:00",
          "EpochDate": 1600988400,
          "Temperature": {
            "Minimum": { "Value": 66.0, "Unit": "F", "UnitType": 18 },
            "Maximum": { "Value": 79.0, "Unit": "F", "UnitType": 18 }
          },
          "Day": {
            "Icon": 7,
            "IconPhrase": "Cloudy",
            "HasPrecipitation": false,
            "LocalSource": { "Id": 7, "Name": "Huafeng", "WeatherCode": "02" }
          },
          "Night": {
            "Icon": 7,
            "IconPhrase": "Cloudy",
            "HasPrecipitation": false,
            "LocalSource": { "Id": 7, "Name": "Huafeng", "WeatherCode": "02" }
          },
          "Sources": ["AccuWeather", "Huafeng"],
          "MobileLink": "http://m.accuweather.com/en/cn/taizhou/2333653/daily-weather-forecast/2333653?day=1&lang=en-us",
          "Link": "http://www.accuweather.com/en/cn/taizhou/2333653/daily-weather-forecast/2333653?day=1&lang=en-us"
        },
        {
          "Date": "2020-09-26T07:00:00+08:00",
          "EpochDate": 1601074800,
          "Temperature": {
            "Minimum": { "Value": 68.0, "Unit": "F", "UnitType": 18 },
            "Maximum": { "Value": 79.0, "Unit": "F", "UnitType": 18 }
          },
          "Day": {
            "Icon": 12,
            "IconPhrase": "Showers",
            "HasPrecipitation": true,
            "PrecipitationType": "Rain",
            "PrecipitationIntensity": "Light",
            "LocalSource": { "Id": 7, "Name": "Huafeng", "WeatherCode": "07" }
          },
          "Night": {
            "Icon": 7,
            "IconPhrase": "Cloudy",
            "HasPrecipitation": false,
            "LocalSource": { "Id": 7, "Name": "Huafeng", "WeatherCode": "02" }
          },
          "Sources": ["AccuWeather", "Huafeng"],
          "MobileLink": "http://m.accuweather.com/en/cn/taizhou/2333653/daily-weather-forecast/2333653?day=2&lang=en-us",
          "Link": "http://www.accuweather.com/en/cn/taizhou/2333653/daily-weather-forecast/2333653?day=2&lang=en-us"
        },
        {
          "Date": "2020-09-27T07:00:00+08:00",
          "EpochDate": 1601161200,
          "Temperature": {
            "Minimum": { "Value": 68.0, "Unit": "F", "UnitType": 18 },
            "Maximum": { "Value": 79.0, "Unit": "F", "UnitType": 18 }
          },
          "Day": {
            "Icon": 7,
            "IconPhrase": "Cloudy",
            "HasPrecipitation": false,
            "LocalSource": { "Id": 7, "Name": "Huafeng", "WeatherCode": "02" }
          },
          "Night": {
            "Icon": 35,
            "IconPhrase": "Partly cloudy",
            "HasPrecipitation": false,
            "LocalSource": { "Id": 7, "Name": "Huafeng", "WeatherCode": "01" }
          },
          "Sources": ["AccuWeather", "Huafeng"],
          "MobileLink": "http://m.accuweather.com/en/cn/taizhou/2333653/daily-weather-forecast/2333653?day=3&lang=en-us",
          "Link": "http://www.accuweather.com/en/cn/taizhou/2333653/daily-weather-forecast/2333653?day=3&lang=en-us"
        },
        {
          "Date": "2020-09-28T07:00:00+08:00",
          "EpochDate": 1601247600,
          "Temperature": {
            "Minimum": { "Value": 68.0, "Unit": "F", "UnitType": 18 },
            "Maximum": { "Value": 79.0, "Unit": "F", "UnitType": 18 }
          },
          "Day": {
            "Icon": 13,
            "IconPhrase": "Mostly cloudy w/ showers",
            "HasPrecipitation": true,
            "PrecipitationType": "Rain",
            "PrecipitationIntensity": "Light",
            "LocalSource": { "Id": 7, "Name": "Huafeng", "WeatherCode": "07" }
          },
          "Night": {
            "Icon": 35,
            "IconPhrase": "Partly cloudy",
            "HasPrecipitation": false,
            "LocalSource": { "Id": 7, "Name": "Huafeng", "WeatherCode": "01" }
          },
          "Sources": ["AccuWeather", "Huafeng"],
          "MobileLink": "http://m.accuweather.com/en/cn/taizhou/2333653/daily-weather-forecast/2333653?day=4&lang=en-us",
          "Link": "http://www.accuweather.com/en/cn/taizhou/2333653/daily-weather-forecast/2333653?day=4&lang=en-us"
        },
        {
          "Date": "2020-09-29T07:00:00+08:00",
          "EpochDate": 1601334000,
          "Temperature": {
            "Minimum": { "Value": 66.0, "Unit": "F", "UnitType": 18 },
            "Maximum": { "Value": 79.0, "Unit": "F", "UnitType": 18 }
          },
          "Day": {
            "Icon": 6,
            "IconPhrase": "Mostly cloudy",
            "HasPrecipitation": false,
            "LocalSource": { "Id": 7, "Name": "Huafeng", "WeatherCode": "01" }
          },
          "Night": {
            "Icon": 7,
            "IconPhrase": "Cloudy",
            "HasPrecipitation": false,
            "LocalSource": { "Id": 7, "Name": "Huafeng", "WeatherCode": "02" }
          },
          "Sources": ["AccuWeather", "Huafeng"],
          "MobileLink": "http://m.accuweather.com/en/cn/taizhou/2333653/daily-weather-forecast/2333653?day=5&lang=en-us",
          "Link": "http://www.accuweather.com/en/cn/taizhou/2333653/daily-weather-forecast/2333653?day=5&lang=en-us"
        }
      ]
    }

  }
}
