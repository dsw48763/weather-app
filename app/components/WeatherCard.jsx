import React from "react";

const WeatherCard = ({ city, temperature, condition, cloudiness, precipitation, airQuality, windDirection }) => {
  return (
    <div className="weather-card">
      <div className="weather-icon">
        <img src="https://via.placeholder.com/100" alt="Weather Icon" />
      </div>
      <div className="weather-info">
        <h2>{city}</h2>
        <p>Temperature: {temperature}°C</p>
        <p>Condition: {condition}</p>
        <p>Cloudiness: {cloudiness}%</p>
        <p>Precipitation: {precipitation} mm</p>
        <p>Air Quality: {airQuality}</p>
        <p>Wind Direction: {windDirection}</p>
      </div>
    </div>
  );
};

export default WeatherCard;