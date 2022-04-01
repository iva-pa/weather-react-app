import React from "react";
import FormattedDate from "./FormattedDate";
import IMAGES from "./images/images";

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
          <div className="weather-temperature">
            <h1>
              <span className="temperature-amount">
                {Math.round(props.data.temperature)}
              </span>{" "}
              <span className="units">°C</span>
            </h1>
          </div>

          <div className="row">
            <div className="col-12 forecast-description text-capitalize">
              {props.data.description}
            </div>
            <div className="col-12">Humidity: {props.data.humidity}%</div>
            <div className="col-12">
              Wind: {Math.round(props.data.wind)} m/s
            </div>
          </div>
        </div>
        <div className="col-2">
          <img
            alt={props.data.description}
            src={IMAGES[props.data.icon]}
            className="main-icon"
          ></img>
        </div>
      </div>
    </div>
  );
}
