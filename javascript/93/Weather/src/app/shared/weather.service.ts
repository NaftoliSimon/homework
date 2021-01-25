import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { WeatherServerProps } from './weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private httpClient: HttpClient) { }

  getWeather(zip: string) {
    const apiKey = 'ab96baefc8091ea260bca84eb9559eaa';
    const units = 'imperial';

    return this.httpClient
      .get<WeatherServerProps>(`http://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&zip=${zip}&units=${units}`)
      .pipe(map(weatherData => ({
        place: weatherData.name,
        description: `${weatherData.main.temp} and ${weatherData.weather[0].description}`,
        icon: `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`
      })));
  }
}
