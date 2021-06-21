import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="frame">
      <form className="form">
        <input
          className="form-search"
          type="search"
          placeholder="Enter a city"
        />
        <input className="form-submit" type="submit" value="Search" />
      </form>
      <div className="row">
        <div className="col city">Lisbon</div>
        <div className="col country">PT</div>
        <div className="col temp-conversion">
          <a href="/" className="celsius-conv">°C</a> | <a href="/" className="fahrenheit-conv">°F</a>
        </div>
      </div>
    </div>
  );
}
