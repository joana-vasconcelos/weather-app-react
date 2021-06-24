import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate";
import location from "./media/location.png";
import wind from "./media/wind.svg";
import humidity from "./media/humidity.svg";
import maxtemp from "./media/max-temp.png";
import mintemp from "./media/min-temp.png";

export default function Weather(props) {
  
  const [weather, setWeather] = useState({ready:false});

  function handleResponse(response) {
      console.log(response.data);
    setWeather({
        ready: true,
        date: new Date(response.data.dt *1000),
      temperature: response.data.main.temp,
      feelsLike: response.data.main.feels_like,
      maxTemp: response.data.main.temp_max,
      minTemp: response.data.main.temp_min,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed * 3.6,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
   
  }

  if (weather.ready) {
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
        <div className="last-update">Last updated: <FormattedDate date={weather.date} /> </div>
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
              <img className="weather-icon" src={weather.icon} alt="" />
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
                <li className="max-min-temp">
                  <img className="max-temp-img" src={maxtemp} alt="" />{" "}
                  <span className="current-max-temp">
                    {Math.round(weather.maxTemp)}
                  </span>
                  <span className="unit">°C</span>{" "}
                  <img className="min-temp-img" src={mintemp} alt="" />{" "}
                  <span className="current-min-temp">
                    {Math.round(weather.minTemp)}
                  </span>
                  <span className="unit">°C</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="conditions">
            <ul>
              <li className="wind">
                <img className="wind-img" src={wind} alt="" /> Wind:{" "}
                {Math.round(weather.wind)} km/h
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
    const apiKey = "92144e2b99c1b69c6667a76ec620ea0d";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
