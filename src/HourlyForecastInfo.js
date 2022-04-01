import React from "react";
import IMAGES from "./images/images";

export default function HourlyForecastInfo(props) {
  function temperature() {
    let temperature = Math.round(props.data.temp);
    return `${temperature}°C`;
  }

  function time() {
    let date = new Date(props.data.dt * 1000);
    let hour = ("0" + date.getHours()).slice(-2);
    return `${hour}:00`;
  }
  return (
    <div className="col detail-forecast">
      <h5>{time()}</h5>
      <img src={IMAGES[props.data.weather[0].icon]} alt="" width="46" />
      <div className="forecast-temperature">{temperature()}</div>
    </div>
  );
}
