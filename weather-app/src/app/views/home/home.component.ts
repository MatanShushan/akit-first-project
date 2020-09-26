import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { GetLocationResponse } from 'src/app/app.models';
import { FiveDaysForecastService } from '../../entities/state/five-days-forecast/five-days-forecast.service';
import { UtilitiesService } from 'src/app/services/utilities.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient,
    private utilitiesService: UtilitiesService,
    private fiveDaysForecastService: FiveDaysForecastService) { }

  ngOnInit(): void {
    this.setDefaultCity();
  }

  setDefaultCity() {
    navigator.geolocation.getCurrentPosition((geoloaction) => {


      // this.http.get(`http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${environment.weatherApiToken}&q=${geoloaction.coords.latitude},${geoloaction.coords.longitude}`)
      //   .subscribe((res: GetLocationResponse) => {
      //     this.fiveDaysForecastService.get(res.Key);
      //   }, () => {
      //     this.utilitiesService.showError();
      //   })


      this.fiveDaysForecastService.get('215854');

    }, () => {
      this.fiveDaysForecastService.get('215854');
    })

  }

}
