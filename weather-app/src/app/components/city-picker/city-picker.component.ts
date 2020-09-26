import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounce, debounceTime, map, startWith } from 'rxjs/operators';
import { CityService } from '../../entities/state/city/city.service';
import { CityStore } from '../../entities/state/city/city.store';
import { CityQuery } from '../../entities/state/city/city.query';
import { City } from 'src/app/entities/state/city/city.model';
import { FiveDaysForecast } from '../../entities/state/five-days-forecast/five-days-forecast.model';
import { FiveDaysForecastService } from '../../entities/state/five-days-forecast/five-days-forecast.service';

@Component({
  selector: 'city-picker',
  templateUrl: './city-picker.component.html',
  styleUrls: ['./city-picker.component.scss']
})
export class CityPickerComponent implements OnInit {
  form: FormGroup;
  options: Observable<City[]> = this.cityQuery.selectAll();
  // filteredOptions: Observable<User[]>;

  constructor(private cityService: CityService, private cityQuery: CityQuery, private fiveDaysForecastService: FiveDaysForecastService) { }
  ngOnInit() {
    // this.cityService.get('');

    this.form = new FormGroup({});
    this.form.addControl('cityPicker', new FormControl(''));

    this.form.controls['cityPicker'].valueChanges
      .pipe(
        debounceTime(300)
      ).subscribe((text) => {
        this.cityService.get(text);

      });
  }

  displayFn(city: City): string {
    return city && city.LocalizedName ? city.LocalizedName : '';
  }
  citySelected({ option: { value } }) {
    this.fiveDaysForecastService.get(value.key, value.name);
  }
}
