import { HttpClient, HttpHandler } from '@angular/common/http';
import { Component/*, OnDestroy*/ } from '@angular/core';
import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';
//import { Subscription } from 'rxjs';
import { Weather/*, WeatherServerProps*/ } from '../shared/weather';
import { WeatherService } from '../shared/weather.service';

@Component({
  selector: 'app-weather-page',
  templateUrl: './weather-page.component.html',
  styleUrls: ['./weather-page.component.css']
})
export class WeatherPageComponent /*implements OnDestroy*/ {
  // weather!: Weather;
  // subscription!: Subscription

  weather!: Observable<Weather>;

  constructor(/*private httpClient: HttpClient*/ private weatherService: WeatherService) { }

  /*ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }*/

  getWeather(zip: string) {
    //const apiKey = 'cb7c71219cf09eb0bb414b932669be97';
    //const units = 'imperial';

    /*this.subscription = this.httpClient
      .get<WeatherServerProps>(`http://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&zip=${zip}&units=${units}`)
      .subscribe(weatherData => {
        console.log(weatherData);

        this.weather = {
          place: weatherData.name,
          description: `${weatherData.main.temp} and ${weatherData.weather[0].description}`,
          icon: `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`
        }

        console.log(this.weather);
      });*/

    /*this.weather = this.httpClient
      .get<WeatherServerProps>(`http://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&zip=${zip}&units=${units}`)
      .pipe(map(weatherData => ({
        place: weatherData.name,
        description: `${weatherData.main.temp} and ${weatherData.weather[0].description}`,
        icon: `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`
      })));*/

    this.weather = this.weatherService.getWeather(zip);
  }
}
