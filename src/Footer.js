import React from "react";
import "./Footer.css";

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
    </div>
  );
}
