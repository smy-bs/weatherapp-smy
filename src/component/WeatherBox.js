import React from 'react'

const WeatherBox = ({weather}) => {
   console.log("weather",weather);
   let tempC = weather && weather.main.temp;
   let tempF = weather && (tempC*1.8 + 32).toFixed(2);
  return (
    <div className="weather-box">
      <div>City : {weather?.name}</div>
      <h3>Temperature : {weather && tempC} / {weather && tempF}</h3>
      <h3>Type de Temps : {weather?.weather[0].description}</h3>
      <h3> Humidity : {weather?.main.humidity}</h3>
      </div>
  );
};

export default WeatherBox;
