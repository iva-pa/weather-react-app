import React from "react";
import IMAGES from "./images/images";

export default function DailyForecastInfo(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°C`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°C`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = days[date.getDay()];
    return day;
  }

  return (
    <div className="col-12 detail-forecast">
      <div className="row">
        <div className="col-4">
          <h4>{day()}</h4>
        </div>
        <div className="col-4">
          <img src={IMAGES[props.data.weather[0].icon]} alt="" width="46" />
        </div>
        <div className="forecast-temperature col-4">
          <span className="temperature-max">{maxTemperature()}</span> /{" "}
          <span className="temperature-min">{minTemperature()}</span>
        </div>
      </div>
    </div>
  );
}
