import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './components/header/header.component';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';

import { CityPickerComponent } from './components/city-picker/city-picker.component';
import { HomeComponent } from './views/home/home.component';
import { FavoritesComponent } from './views/favorites/favorites.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import { FiveDaysForecastComponent } from './components/five-days-forecast/five-days-forecast.component';
import { OneDayForecastComponent } from './components/one-day-forecast/one-day-forecast.component';
import { FavoriteItemComponent } from './components/favorite-item/favorite-item.component';
import { DegreeTypePipe } from './pipes/degreeType/degree-type.pipe';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CityPickerComponent,
    HomeComponent,
    FavoritesComponent,
    FiveDaysForecastComponent,
    OneDayForecastComponent,
    FavoriteItemComponent,
    DegreeTypePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NoopAnimationsModule,

    FormsModule,
    ReactiveFormsModule,


    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    ToastrModule.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
