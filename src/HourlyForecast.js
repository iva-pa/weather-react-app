import React, { useState } from "react";
import "./Forecast.css";
import axios from "axios";
import HourlyForecastInfo from "./HourlyForecastInfo";

export default function HourlyForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.hourly);
    setLoaded(true);
    console.log(response.data);
  }

  if (loaded) {
    return (
      <div className="HourlyForecast">
        <h3 className="forecast-heading">Hourly Forecast</h3>
        <br />
        <div className="forecast row">
          <HourlyForecastInfo data={forecast[0]} />
          <HourlyForecastInfo data={forecast[1]} />
          <HourlyForecastInfo data={forecast[2]} />
          <HourlyForecastInfo data={forecast[3]} />
          <HourlyForecastInfo data={forecast[4]} />
        </div>
      </div>
    );
  } else {
    const apiKey = "bd2d78faf9d1acb5b346a3bce88defb1";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
