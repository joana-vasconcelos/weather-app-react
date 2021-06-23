import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import clearday from "./clear-day.svg";
import location from "./media/location.png";
import wind from "./media/wind.svg";
import humidity from "./media/humidity.svg";
import maxtemp from "./media/max-temp.png";
import mintemp from "./media/min-temp.png";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [weather, setWeather] = useState(null);

  function handleResponse(response) {
      console.log(response.data);
    setWeather({
      temperature: response.data.main.temp,
      feelsLike: response.data.main.feels_like,
      maxTemp: response.data.main.temp_max,
      minTemp: response.data.main.temp_min,
      description:response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: (response.data.wind.speed)*3.6

    });
    setReady(true);
  }

  if (ready) {
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
              Lisbon <span className="country">PT</span>
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
                  <span className="temperature">
                    {Math.round(weather.temperature)}
                  </span>
                  <span className="unit">°C</span>
                </li>
                <li className="current-description">{weather.description}</li>
                <li className="feels-like">
                  Feels like {Math.round(weather.feelsLike)}°C
                </li>
                <li>
                  <img className="max-temp-img" src={maxtemp} alt="" />{" "}
                  <span className="current-max-temp">
                    {Math.round(weather.maxTemp)}
                  </span>
                  °C <img className="min-temp-img" src={mintemp} alt="" />{" "}
                  <span className="current-min-temp">
                    {Math.round(weather.minTemp)}
                  </span>
                  °C
                </li>
              </ul>
            </div>
          </div>
          <div className="conditions">
            <ul>
              <li className="wind">
                <img className="wind-img" src={wind} alt="" /> Wind: {Math.round(weather.wind)} km/h
              </li>
              <li className="humidity">
                {" "}
                <img className="humidity-img" src={humidity} alt="" />
                Humidity: {weather.humidity}%
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let city = "Lisbon";
    const apiKey = "92144e2b99c1b69c6667a76ec620ea0d";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
