
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Weather from '../weathercomp/weather';

const WeatherApp = () => {
  const [city, setCity] = useState('');
  const dispatch = useDispatch();

  const handleFetchWeather = () => {
    dispatch(fetchWeather(city));
  };

  return (
    <div className='Home'>
     <Weather/>
    </div>
  );
};

export default WeatherApp;
