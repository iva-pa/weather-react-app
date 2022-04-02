import React from "react";
import BACKGROUNDIMAGES from "./images/backgroundImages";

export default function Background(props) {
  return (
    <div
      style={{
        backgroundImage: `url(${BACKGROUNDIMAGES[props.data]})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    ></div>
  );
}
