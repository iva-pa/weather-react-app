import React from "react";

export default function WeatherTemperature(props) {
  return (
    <div className="weather-temperature">
      <h1>
        <span className="temperature-amount">{Math.round(props.celsius)}</span>{" "}
        <span className="units">°C</span>
      </h1>
    </div>
  );
}
