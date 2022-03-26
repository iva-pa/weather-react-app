import React from "react";
import image01d from "./images/01d.png";
import "./Forecast.css";
import axios from "axios";

export default function DailyForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  const apiKey = "bd2d78faf9d1acb5b346a3bce88defb1";
  let latitude = props.coordinates.lat;
  let longitude = props.coordinates.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="DailyForecast">
      <h3 className="forecast-heading">Daily Forecast</h3>
      <br />
      <div className="forecast" id="weather-daily-forecast">
        <div className="col-12 detail-forecast">
          <div className="row">
            <div className="col-4">
              <h4 id="forecast-date">Monday</h4>
            </div>
            <div className="col-4">
              <img src={image01d} alt="" width="46" />
            </div>
            <div className="forecast-temperature col-4">
              <span className="temperature-max">10°C</span> /{" "}
              <span className="temperature-min">8°C</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
