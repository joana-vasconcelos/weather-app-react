import React from "react";
import axios from "axios";
import "./WeatherForecast.css";



export default function WeatherForecast(props) {

function handleResponse(response) {
    console.log(response.data);
}


let lat= props.coords.lat;
let lon=props.coords.lon;
const apiKey = "92144e2b99c1b69c6667a76ec620ea0d";
let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleResponse);



  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="forecast-week-day">Tue</div>
          <div>
            <img className="forecast-icon" src={props.icon} alt="" />{" "}
          </div>
          <div className="forecast-temperatures">
            <span className="forecast-max-temp">26</span>° |{" "}
            <span className="forecast-min-temp">16</span>°
          </div>
        </div>
      </div>
    </div>
  );
}
