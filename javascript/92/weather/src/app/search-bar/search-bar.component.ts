import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import apiKey from '../shared/api-key';
import { Weather } from '../shared/weather';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  icon: string;
  name: string;
  description: string;
  temperature: number;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {

  }

  getWeather(zip) {
    let numZip = +zip;
    if(zip.length === 5 && numZip) {
      this.httpClient.get<Weather>(`http://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&zip=${zip}&units=imperial`)
      .subscribe(weatherData => {
        this.name = weatherData.name;
        this.temperature = weatherData.main.temp;
        this.description = weatherData.weather[0].description;
        this.icon = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`;
      });
    }
  }
}
