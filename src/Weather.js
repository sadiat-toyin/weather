import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weathertest(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: "true",
      temperature: "response.data.main.temp",
      humidity: "response.data.main.humidity",
      date: "Wednesday 07:00",
      description: "response.data.weather[0].description",
      iconUrl:
        "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-day.png",
      //"https://ss1.gstatic.com/onebox/weather/64/partly_cloudy.png",
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="search"
                className="btn btn-primary"
                w="100"
              />
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
          <li>{weatherData.date}</li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <div className="clearfix">
              <img
                src={weatherData.iconUrl}
                alt={weatherData.description}
                className="float-left"
              />
              <div className="float-left">
                <span className="temperature">
                  {Math.round(weatherData.temperature)}
                </span>
                <span className="unit">℃</span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation:15%</li>
              <li>Humidity:{weatherData.humidity}%</li>
              <li>Wind:{weatherData.wind}km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "5tc5a34ao652ab12c5cdef23ce70b8f2";
    //let apiUrl = "https://api.shecodes.io/weather/v1/current?query={query}&key={apiKey }
    //";

    let apiUrl =
      "https://api.openweathermap.org/data/2.5/weather?q={props.defaultCity}&appid={API key}";
    //"https://api.shecodes.io/weather/v1/current?query={city}lat=38.71667&lon=-9.13333&key=5tc5a34ao652ab12c5cdef23ce70b8f2&units=metric";
    //"https://api.shecodes.io/weather/v1/current?query={props.defaultCity}&key=5tc5a34ao652ab12c5cdef23ce70b8f2&units=metric";
    axios.get(apiUrl).then(handleResponse);

    return "loading...";
  }
}
