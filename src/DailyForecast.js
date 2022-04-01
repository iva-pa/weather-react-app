import React, { useState } from "react";
import "./Forecast.css";
import axios from "axios";
import DailyForecastInfo from "./DailyForecastInfo";

export default function DailyForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  function handleResponse(response) {
    console.log(response.data);
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="DailyForecast">
        <h3 className="forecast-heading">Daily Forecast</h3>
        <br />
        <div className="forecast">
          <DailyForecastInfo data={forecast[0]} />
          <DailyForecastInfo data={forecast[1]} />
          <DailyForecastInfo data={forecast[2]} />
          <DailyForecastInfo data={forecast[3]} />
          <DailyForecastInfo data={forecast[4]} />
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
