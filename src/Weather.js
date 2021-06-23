import React from "react";
import "./Weather.css";
import clearday from "./clear-day.svg";
import location from "./media/location.png";

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
        <img className="location-img" src={location} alt="" />
      </form>
      <div className="last-update">Last updated: Monday 21 June 20:13</div>
      <ul className="currently">
        <li>
          <h2 className="city" id="city">
            {" "}
            Lisbon
          </h2>
        </li>
        <li className="country" id="country">
          PT
        </li>
        <li className="temp-conversion">
          {" "}
          <a href="/" className="celsius-conv">
            °C
          </a>{" "}
          |{" "}
          <a href="/" className="fahrenheit-conv">
            °F
          </a>{" "}
        </li>
      </ul>

      <div className="current-weather">
        <div className="row">
          <div className="col">
            <img src={clearday} alt="" />
          </div>
          <div className="col">
            <ul>
              <li className="current-temp">
                {" "}
                <h1>24°C</h1>
              </li>
              <li className="current-description">Sunny</li>
              <li className="feels-like">Feels like 22°C</li>
              <li>
                {" "}
                img <span className="current-max-temp">26</span>°C img{" "}
                <span className="current-min-temp">17</span>°C
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col">img Wind: 20 km/h</div>
          <div className="col">img Humidity: 55%</div>
        </div>
      </div>
    </div>
  );
}
