import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WeatherPageComponent } from './weather-page/weather-page.component';
import { WeatherComponent } from './weather-page/weather/weather.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ZipExamplesComponent } from './zip-examples/zip-examples.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherPageComponent,
    WeatherComponent,
    PageNotFoundComponent,
    ZipExamplesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
