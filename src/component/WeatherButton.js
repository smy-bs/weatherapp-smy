import React from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = ({cities,city,setCity}) => {
  console.log("cities",cities);


  return (
    <div>
      <div>
      <Button variant="warning" 
      className={city === '' ? 'active' : ''} 
      onClick={(e) => {
        setCity('');
        }}
        >
          Current Location </Button>
      
      {cities.map((item,index) => (
       <Button 
      key={index} 
      variant="warning"
      className={city === item? 'active' : ''}
      onClick ={ () => {
        setCity(item);
      }}
      >
        {item}
      </Button> 
      ))}
    </div>
    </div>
  );
};

export default WeatherButton;
