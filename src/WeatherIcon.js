import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": "Clear_Day",
    "01n": "Clear_Night",
    "02d": " Partly_Cloudy_Day",
    "02n": " Partly_Cloudy_Night",
    "03d": " Partly_Cloudy_Day",
    "03n": " Partly_Cloudy_Night",
    "04d": "Cloudy",
    "04n": "Cloudy",
    "09d": "Rain",
    "09n": "Rain",
    "10d": "Rain",
    "10n": "Rain",
    "11d": "Rain",
    "11n": "Rain",
    "13d": "Snow",
    "13n": "Snow",
    "50d": "Fog",
    "50n": "Fog",
  };

  return (
    <ReactAnimatedWeather
      icon={codeMapping[props.code]}
      color="red"
      size={36}
      animate={true}
    />
  );
}
