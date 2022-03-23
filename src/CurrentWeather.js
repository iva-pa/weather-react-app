import React, { useState } from "react";
import image01d from "./images/01d.png";
import "./CurrentWeather.css";
import axios from "axios";

export default function CurrentWeather() {
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState("");
  function handleResponse(response) {
    console.log(response.data);
    setTemperature(response.data.main.temp);
    setReady(true);
  }

  if (ready) {
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
            <h1 id="selected-city">Amsterdam</h1>
            <div className="row">
              <div className="col-12"></div>
              <div className="col-12">
                {" "}
                <span>Forecast last updated on </span>
                <div id="current-date">Sunday, February 27</div>
              </div>
              <div className="col-12" id="current-time">
                12.00
              </div>
            </div>
          </div>
          <div className="col-5">
            <h1 className="weather-temperature">
              <span id="current-temperature">{Math.round(temperature)}</span>{" "}
              <span className="units">°C</span>
            </h1>
            <div className="row">
              <div className="col-12" id="forecast-description">
                Clear sky
              </div>
              <div className="col-12" id="humidity">
                Humidity: 12%
              </div>
              <div className="col-12" id="wind">
                Wind: 1 m/s
              </div>
            </div>
          </div>
          <div className="col-2">
            <img
              id="main-icon"
              alt="weather forecast icon"
              src={image01d}
            ></img>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "bd2d78faf9d1acb5b346a3bce88defb1";
    let city = "Amsterdam";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
