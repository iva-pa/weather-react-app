import React from "react";
import CurrentWeather from "./CurrentWeather";
import "./App.css";

function App() {
  return (
    <div className="App wrap">
      <CurrentWeather defaultCity="Amsterdam" />
    </div>
  );
}

export default App;
