import React, { useState, useEffect } from "react";
import "./Forecast.css";
import axios from "axios";
import HourlyForecastInfo from "./HourlyForecastInfo";

export default function HourlyForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.hourly);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="HourlyForecast">
        <h3 className="forecast-heading">Hourly Forecast</h3>
        <br />
        <div className="row forecast">
          {forecast.map(function(hourlyForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <HourlyForecastInfo data={hourlyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
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
