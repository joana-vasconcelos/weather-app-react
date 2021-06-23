import React from "react";
import "./Weather.css";
import clearday from "./clear-day.svg";
import location from "./media/location.png";
import wind from "./media/wind.svg";
import humidity from "./media/humidity.svg";
import maxtemp from "./media/max-temp.png";
import mintemp from "./media/min-temp.png";

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
      <div className="row">
        <div className="col-9 currently">
          <h2 className="city">
            San Francisco <span className="country">PT</span>
          </h2>
        </div>
        <div className="col-3 temp-conversion">
          <a href="/" className="celsius-conv">
            °C
          </a>{" "}
          |{" "}
          <a href="/" className="fahrenheit-conv">
            °F
          </a>{" "}
        </div>
      </div>
      <div className="current-weather">
        <div className="row">
          <div className="col">
            <img src={clearday} alt="" />
          </div>
          <div className="col">
            <ul>
              <li className="current-temp">
                <span className="temperature">24</span>
                <span className="unit">°C</span>
              </li>
              <li className="current-description">Sunny</li>
              <li className="feels-like">Feels like 22°C</li>
              <li>
                <img className="temp-img" src={maxtemp} alt="" />{" "}
                <span className="current-max-temp">26</span>°C{" "}
                <img className="temp-img" src={mintemp} alt="" />{" "}
                <span className="current-min-temp">17</span>°C
              </li>
            </ul>
          </div>
        </div>
        <div className="conditions">
          <ul>
            <li className="wind">
              <img className="wind-img" src={wind} alt="" /> Wind: 20 km/h
            </li>
            <li className="humidity">
              {" "}
              <img className="humidity-img" src={humidity} alt="" />
              Humidity: 55%
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
