import React from 'react'

const WeatherBox = ({weather}) => {
   console.log("weather",weather);
  return (
    <div className="weather-box">
      <div>City : {weather?.name}</div>
      <h3>Temperature : {weather?.main.temp} / </h3>
      <h3>Type de Temps : {weather?.weather[0].description}</h3>
      <h3> Humidity : {weather?.main.humidity}</h3>
      </div>
  );
};

export default WeatherBox;
