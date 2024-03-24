import { useEffect,useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherBox from './component/WeatherBox';
import WeatherButton from './component/WeatherButton';
import ClipLoader from "react-spinners/ClipLoader";

function App() {
 
  const [weather,setWeather] = useState(null);
  const [city,setCity] = useState("");
  const [loading,setLoading] = useState(false);
  const cities = ['paris','new york','tokyo','seoul'];
  const getCurrentLocation= () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude ;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat,lon); //lon과lat 의 정보를 가져올수있게 함수를 불러줌
    });
  };

  const getWeatherByCurrentLocation = async (lat,lon) => {
    let url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=f01f0ae2c653ece2244a86b24f5ee26d&units=metric`;
    setLoading(true);
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
    setLoading(false);
  };
 
   const getweatherByCity = async() =>{
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f01f0ae2c653ece2244a86b24f5ee26d&units=metric`;
    setLoading(true);
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
    setLoading(false);
  }
  useEffect(() => {
    if(city ==""){
      getCurrentLocation();
    }else{
      getweatherByCity();
    }
    
  }, [city]);

 
  return (
    <div>
      {loading? (
      <div className="container">
      <ClipLoader
        color="#ff88c6b"
        loading={loading}
        size={150}
        /></div>
        ): (
        <div className="container">
             <WeatherBox weather={weather}/>
        <WeatherButton cities={cities} setCity = {setCity}/>
      </div> 
      )}
     
    </div>
  );
};

export default App;
