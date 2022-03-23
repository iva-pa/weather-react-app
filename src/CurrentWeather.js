import React, { useState } from "react";
import image01d from "./images/01d.png";
import "./CurrentWeather.css";
import axios from "axios";

export default function CurrentWeather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      iconUrl: image01d,
      date: "Sunday, February 27",
      time: "12.00",
    });
  }

  if (weatherData.ready) {
    return (
      <div>
        <div className="Search">
          <form>
            <div className="row">
              <div className="col-7">
                <input
                  type="search"
                  className="form-control"
                  placeholder="Search Location"
                  id="search-city-input"
                  autoComplete="off"
                />
              </div>
              <div className="col-2">
                <input type="submit" value="Search" className="btn btn-light" />
              </div>
              <div className="col-2">
                <input
                  type="submit"
                  value="Your location"
                  className="btn btn-light"
                  id="current-location"
                />
              </div>
            </div>
          </form>
        </div>
        <div className="CurrentWeather row">
          <div className="col-5" id="search-city">
            <h1 id="selected-city">{weatherData.city}</h1>
            <div className="row">
              <div className="col-12"></div>
              <div className="col-12">
                {" "}
                <span>Forecast last updated on </span>
                <div id="current-date">{weatherData.date}</div>
              </div>
              <div className="col-12" id="current-time">
                {weatherData.time}
              </div>
            </div>
          </div>
          <div className="col-5">
            <h1 className="weather-temperature">
              <span id="current-temperature">
                {Math.round(weatherData.temperature)}
              </span>{" "}
              <span className="units">°C</span>
            </h1>
            <div className="row">
              <div className="col-12 text-capitalize" id="forecast-description">
                {weatherData.description}
              </div>
              <div className="col-12" id="humidity">
                Humidity: {weatherData.humidity}%
              </div>
              <div className="col-12" id="wind">
                Wind: {Math.round(weatherData.wind)} m/s
              </div>
            </div>
          </div>
          <div className="col-2">
            <img
              id="main-icon"
              alt={weatherData.description}
              src={weatherData.iconUrl}
            ></img>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "bd2d78faf9d1acb5b346a3bce88defb1";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
