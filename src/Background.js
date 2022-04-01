import React from "react";
import BACKGROUNDIMAGES from "./images/backgroundImages";

export default function Background(props) {
  return (
    <div
      style={{
        backgroundImage: `url(${BACKGROUNDIMAGES[props.data.icon]})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    ></div>
  );
}
