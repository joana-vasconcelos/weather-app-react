import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import wind from "./media/wind.svg";
import humidity from "./media/humidity.svg";
import maxtemp from "./media/max-temp.png";
import mintemp from "./media/min-temp.png";
import WeatherForecastFahrenheit from "./WeatherForecastFahrenheit";
import WeatherForecastCelsius from "./WeatherForecastCelsius";

export default function WeatherInfo(props) {
  const [unit, setUnit] = useState("celsius");

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherInfo">
        <div className="last-update">
          Last updated: <FormattedDate date={props.data.date} />{" "}
        </div>
        <div className="row">
          <div className="col-9 currently">
            <h2 className="city">
              {props.data.city}{" "}
              <span className="country">{props.data.country}</span>
            </h2>
          </div>
          <div className="col-3 temp-conversion">
            <strong>°C</strong> |{" "}
            <a
              href="/"
              className="fahrenheit-conv"
              onClick={convertToFahrenheit}
            >
              °F
            </a>{" "}
          </div>
        </div>
        <div className="current-weather">
          <div className="row">
            <div className="col">
              <img className="weather-icon" src={props.data.icon} alt="" />
            </div>
            <div className="col">
              <ul>
                <li className="current-temp">
                  <span className="temperature">
                    {Math.round(props.data.temperature)}
                  </span>
                  <span className="unit">°C</span>
                </li>
                <li className="current-description">
                  {props.data.description}
                </li>
                <li className="feels-like">
                  Feels like {Math.round(props.data.feelsLike)}°C
                </li>
                <li className="max-min-temp">
                  <img className="max-temp-img" src={maxtemp} alt="" />{" "}
                  <span className="current-max-temp">
                    {Math.round(props.data.maxTemp)}
                  </span>
                  <span className="unit">°C</span>{" "}
                  <img className="min-temp-img" src={mintemp} alt="" />{" "}
                  <span className="current-min-temp">
                    {Math.round(props.data.minTemp)}
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
                {Math.round(props.data.wind)} km/h
              </li>
              <li className="humidity">
                {" "}
                <img className="humidity-img" src={humidity} alt="" />
                Humidity: {props.data.humidity}%
              </li>
            </ul>
          </div>
        </div>
        <WeatherForecastCelsius coords={props.data.coords} />
      </div>
    );
  } else {
    return (
      <div className="WeatherInfo">
        <div className="last-update">
          Last updated: <FormattedDate date={props.data.date} />{" "}
        </div>
        <div className="row">
          <div className="col-9 currently">
            <h2 className="city">
              {props.data.city}{" "}
              <span className="country">{props.data.country}</span>
            </h2>
          </div>
          <div className="col-3 temp-conversion">
            <a href="/" className="fahrenheit-conv" onClick={convertToCelsius}>
              °C
            </a>{" "}
            | <strong> °F</strong>
          </div>
        </div>
        <div className="current-weather">
          <div className="row">
            <div className="col">
              <img className="weather-icon" src={props.data.icon} alt="" />
            </div>
            <div className="col">
              <ul>
                <li className="current-temp">
                  <span className="temperature">
                    {Math.round(props.data.temperature * (9 / 5) + 32)}
                  </span>
                  <span className="unit">°F</span>
                </li>
                <li className="current-description">
                  {props.data.description}
                </li>
                <li className="feels-like">
                  Feels like {Math.round(props.data.feelsLike * (9 / 5) + 32)}°F
                </li>
                <li className="max-min-temp">
                  <img className="max-temp-img" src={maxtemp} alt="" />{" "}
                  <span className="current-max-temp">
                    {Math.round(props.data.maxTemp * (9 / 5) + 32)}
                  </span>
                  <span className="unit">°F</span>{" "}
                  <img className="min-temp-img" src={mintemp} alt="" />{" "}
                  <span className="current-min-temp">
                    {Math.round(props.data.minTemp * (9 / 5) + 32)}
                  </span>
                  <span className="unit">°F</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="conditions">
            <ul>
              <li className="wind">
                <img className="wind-img" src={wind} alt="" /> Wind:{" "}
                {Math.round(props.data.wind)} km/h
              </li>
              <li className="humidity">
                {" "}
                <img className="humidity-img" src={humidity} alt="" />
                Humidity: {props.data.humidity}%
              </li>
            </ul>
          </div>
        </div>
        <WeatherForecastFahrenheit coords={props.data.coords} />
      </div>
    );
  }
}
