import React from "react";
import BACKGROUNDIMAGES from "./images/backgroundImages";

export default function Background(props) {
  return (
    <div
      style={{
        backgroundImage: `url(${BACKGROUNDIMAGES[props.data]})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    ></div>
  );
}
