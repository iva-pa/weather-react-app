import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <div className="git-link Footer">
      <span className="link">
        This project was coded by Iva Papcunova and is{" "}
      </span>
      <a
        href="https://github.com/iva-pa/weather-react-app"
        target="_blank"
        rel="noopener noreferrer"
        id="github-link"
      >
        open-sourced on GitHub
      </a>
      <span className="link">. </span>
      <span className="link">Icons by </span>
      <a
        href="https://icons8.com/"
        target="_blank"
        rel="noopener noreferrer"
        id="github-link"
      >
        ICONS8
      </a>
      <span className="link">.</span>
    </div>
  );
}
