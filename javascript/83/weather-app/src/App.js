import { Component } from 'react';
import './App.css';
//import getTheWeatherFunction from './Weather';
import WeatherDetails from './WeatherDetails';

class App extends Component {
  state = {};
  getWeather = e => {
    //console.log('zip',e.target.value);

    const apiKey = '69b25ded05aa23b5ce0c215c5fe897cc';
    const zip = e.target.value;
    const units = 'imperial';
    fetch(`http://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&zip=${zip}&units=${units}`)
      .then(r => {
        if (!r.ok) {
          throw new Error(`${r.status} ${r.statusText}`);
        }
        return r.json();
      })
      .then(weatherData => {
        // console.log(weatherData);
        this.setState(
          {
            weather: {
              locationName: weatherData.name,
              icon: `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`,
              description: `${weatherData.main.temp} and ${weatherData.weather[0].description}`
            }
          }
        )
      })
      .catch(err => alert(err));
  }

  render() {
    const weatherDetailElem = <WeatherDetails weather={this.state.weather} />;
    const weatherDisplay = this.state.weather ? weatherDetailElem : null;
    return (
      <div className="container">
        <div className="row d-flex flex-row-reverse">
          <form className="form-inline">
            <input className="form-control mb-2 mr-sm-2" id="zip" placeholder="Enter Zip For Weather" type="number" onBlur={this.getWeather} />
          </form>
        </div>
        {weatherDisplay}

      </div>
    );
  }
}

export default App;
