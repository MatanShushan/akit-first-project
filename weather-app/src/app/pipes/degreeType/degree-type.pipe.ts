import { Pipe, PipeTransform } from '@angular/core';
import { DegreeType } from 'src/app/app.enums';
import { ViewStateQuery } from '../../entities/state/view-state.query';
import { ViewStateService } from '../../entities/state/view-state.service';

@Pipe({
  name: 'degreeType',
  pure: false
})
export class DegreeTypePipe implements PipeTransform {
  constructor(private viewStateService: ViewStateService) { }

  transform(value: string | number, currentType: 'C' | 'F' = 'C') {

    const currentViewState = this.viewStateService.getCurrentView();
    if (!currentViewState) {
      return value;
    }
    let newValue = '';
    if (currentViewState.degreeType === DegreeType.Celsius) {
      newValue = currentType === 'C' ? value.toString() : this.convertFahrenheitToCelsius(Number(value));
    } else {
      newValue = currentType === 'F' ? value.toString() : this.convertCelsiusToFahrenheit(Number(value));
    }

    newValue += currentViewState.degreeType === DegreeType.Fahrenheit ? ' ℉' : ' ℃';
    return newValue;
  }


  convertCelsiusToFahrenheit(celsius: number): string {
    return (celsius * 9 / 5 + 32).toFixed(2).toString();
  }

  convertFahrenheitToCelsius(fahrenheit: number): string {
    return ((fahrenheit - 32) * 5 / 9).toFixed(2).toString();
  }


}
