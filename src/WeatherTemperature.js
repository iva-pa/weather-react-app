import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="weather-temperature">
        <h1>
          <span className="temperature-amount">
            {Math.round(props.celsius)}
          </span>{" "}
          <span className="units">
            °C |{" "}
            <a href="/" onClick={convertToFahrenheit}>
              °F
            </a>
          </span>
        </h1>
      </div>
    );
  } else {
    let fahrenheitTemp = (props.celsius * 9) / 5 + 32;
    return (
      <div className="weather-temperature">
        <h1>
          <span className="temperature-amount">
            {Math.round(fahrenheitTemp)}
          </span>{" "}
          <span className="units">
            <a href="/" onClick={convertToCelsius}>
              °C{" "}
            </a>
            | °F
          </span>
        </h1>
      </div>
    );
  }
}
