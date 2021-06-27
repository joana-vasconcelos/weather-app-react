import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

import WeatherInfo from "./WeatherInfo";
import location from "./media/location.png";

export default function Weather(props) {
  const [weather, setWeather] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeather({
      ready: true,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      feelsLike: response.data.main.feels_like,
      maxTemp: response.data.main.temp_max,
      minTemp: response.data.main.temp_min,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed * 3.6,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      city: response.data.name,
      country: response.data.sys.country,
    });
  }

  function search() {
    const apiKey = "92144e2b99c1b69c6667a76ec620ea0d";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weather.ready) {
    return (
      <div className="frame">
        <form className="form" onSubmit={handleSubmit}>
          <input
            className="form-search"
            type="search"
            placeholder="Enter a city"
            onChange={handleCityChange}
          />
          <input className="form-submit" type="submit" value="Search" />
          <img className="location-img" src={location} alt="" />
        </form>
        <WeatherInfo data={weather} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
