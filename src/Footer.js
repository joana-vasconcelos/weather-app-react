import React from "react";

export default function Footer() {
    return (
      <div className="footer">
        This project was coded by{" "}
        <a
          href="https://www.linkedin.com/in/joana-vasconcelos-carvalheiro-569056a5/"
          target="_blank"
          rel="noreferrer"
        >
          Joana Vasconcelos
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/joanavjc/weather-app-react"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          open-sourced on GitHub
        </a>{" "}
        and{" "}
        <a
          href="https://joanavc-weather-app-react.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          hosted on Netlify
        </a>
      </div>
    );
}