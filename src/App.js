import React from "react";
import CurrentWeather from "./CurrentWeather";
import HourlyForecast from "./HourlyForecast";
import DailyForecast from "./DailyForecast";
import "./App.css";

function App() {
  return (
    <div className="App wrap">
      <CurrentWeather defaultCity="Amsterdam" />
      <br />
      <br />
      <HourlyForecast />
      <br />
      <br />
      <DailyForecast />
    </div>
  );
}

export default App;
