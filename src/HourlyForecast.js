import React from "react";
import image01d from "./images/01d.png";
import "./Forecast.css";
import axios from "axios";

export default function HourlyForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  const apiKey = "bd2d78faf9d1acb5b346a3bce88defb1";
  let latitude = props.coordinates.lat;
  let longitude = props.coordinates.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="HourlyForecast">
      <h3 className="forecast-heading">Hourly Forecast</h3>
      <br />
      <div className="forecast row" id="weather-hourly-forecast">
        <div className="col-3 detail-forecast">
          <h5 id="forecast-hour">12.00</h5>
          <img src={image01d} alt="" width="46" />
          <div className="forecast-temperature">
            <span className="temperature-max">8°C</span>
          </div>
        </div>
        <div className="col-3 detail-forecast">
          <h5 id="forecast-hour">13.00</h5>
          <img src={image01d} alt="" width="46" />
          <div className="forecast-temperature">
            <span className="temperature-max">9°C</span>
          </div>
        </div>
        <div className="col-3 detail-forecast">
          <h5 id="forecast-hour">14.00</h5>
          <img src={image01d} alt="" width="46" />
          <div className="forecast-temperature">
            <span className="temperature-max">10°C</span>
          </div>
        </div>
        <div className="col-3 detail-forecast">
          <h5 id="forecast-hour">15.00</h5>
          <img src={image01d} alt="" width="46" />
          <div className="forecast-temperature">
            <span className="temperature-max">10°C</span>
          </div>
        </div>
      </div>
    </div>
  );
}
