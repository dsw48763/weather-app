import React from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";

export default function Home() {
  const weatherData = [
    {
      city: "New York",
      temperature: 22,
      condition: "Cloudy",
      cloudiness: 60,
      precipitation: 1.2,
      airQuality: "Good",
      windDirection: "NW",
    },
    {
      city: "Los Angeles",
      temperature: 28,
      condition: "Sunny",
      cloudiness: 10,
      precipitation: 0,
      airQuality: "Moderate",
      windDirection: "SE",
    },
    {
      city: "Chicago",
      temperature: 18,
      condition: "Rainy",
      cloudiness: 80,
      precipitation: 5,
      airQuality: "Good",
      windDirection: "W",
    },
    {
      city: "Houston",
      temperature: 30,
      condition: "Clear Sky",
      cloudiness: 5,
      precipitation: 0,
      airQuality: "Unhealthy",
      windDirection: "SW",
    },
    {
      city: "Miami",
      temperature: 27,
      condition: "Partly Cloudy",
      cloudiness: 40,
      precipitation: 0.8,
      airQuality: "Good",
      windDirection: "E",
    },
  ];
  return (
    <div className="app-container">
      <header className="header">
        <h1>Weather App</h1>
      </header>
      <main className="main-content">
        <SearchBar />
        {weatherData.map((weather, index) => (
          <WeatherCard
            key={index}
            city={weather.city}
            temperature={weather.temperature}
            condition={weather.condition}
            cloudiness={weather.cloudiness}
            precipitation={weather.precipitation}
            airQuality={weather.airQuality}
            windDirection={weather.windDirection}
          />
        ))}
      </main>
    </div>
  );
};


