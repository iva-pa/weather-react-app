import React from "react";
import FormattedDate from "./FormattedDate";

export default function CurrentWeatherInfo(props) {
  return (
    <div>
      <div className="CurrentWeather row">
        <div className="col-5" id="search-city">
          <h1>{props.data.city}</h1>
          <div className="row">
            <div className="col-12"></div>
            <div className="col-12">
              {" "}
              <span>Forecast last updated on </span>
              <div>
                <FormattedDate date={props.data.date} />
              </div>
            </div>
          </div>
        </div>
        <div className="col-5">
          <h1 className="weather-temperature">
            <span>{Math.round(props.data.temperature)}</span>{" "}
            <span className="units">°C</span>
          </h1>
          <div className="row">
            <div className="col-12 text-capitalize">
              {props.data.description}
            </div>
            <div className="col-12">Humidity: {props.data.humidity}%</div>
            <div className="col-12">
              Wind: {Math.round(props.data.wind)} m/s
            </div>
          </div>
        </div>
        <div className="col-2">
          <img alt={props.data.description} src={props.data.iconUrl}></img>
        </div>
      </div>
    </div>
  );
}