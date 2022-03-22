import React from "react";
import image01d from "./images/01d.png";
import "./Forecast.css";

export default function DailyForecast() {
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
        <div className="col-12 detail-forecast">
          <div className="row">
            <div className="col-4">
              <h4 id="forecast-date">Tuesday</h4>
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
        <div className="col-12 detail-forecast">
          <div className="row">
            <div className="col-4">
              <h4 id="forecast-date">Wednesday</h4>
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
        <div className="col-12 detail-forecast">
          <div className="row">
            <div className="col-4">
              <h4 id="forecast-date">Thursday</h4>
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
