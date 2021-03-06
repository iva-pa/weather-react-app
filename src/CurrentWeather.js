import React, { useState } from "react";
import "./CurrentWeather.css";
import axios from "axios";
import CurrentWeatherInfo from "./CurrentWeatherInfo";
import HourlyForecast from "./HourlyForecast";
import DailyForecast from "./DailyForecast";
import Background from "./Background";

export default function CurrentWeather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
      coordinates: response.data.coord,
    });
  }
  function search() {
    const apiKey = "bd2d78faf9d1acb5b346a3bce88defb1";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function changeCity(event) {
    setCity(event.target.value);
  }

  function getPosition() {
    navigator.geolocation.getCurrentPosition(showPosition);
  }

  function showPosition(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    const apiKey = "bd2d78faf9d1acb5b346a3bce88defb1";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div>
        <Background data={weatherData.icon} />
        <div className="Search">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-7">
                <input
                  type="search"
                  className="form-control"
                  placeholder="Search Location"
                  autoComplete="off"
                  onChange={changeCity}
                />
              </div>
              <div className="col-2">
                <input type="submit" value="Search" className="btn btn-main" />
              </div>
              <div className="col-2">
                <input
                  type="submit"
                  value="My location"
                  className="btn btn-main"
                  onClick={getPosition}
                />
              </div>
            </div>
          </form>
        </div>

        <CurrentWeatherInfo data={weatherData} />
        <HourlyForecast coordinates={weatherData.coordinates} />
        <DailyForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
