import React from 'react';
import InputComp from '../../components/input/input';
import ButtonComp from '../../components/button/button';

const Getaction = ({ city, weatherData, loading, error }) => {
  return (
    <div className='home-1'>
      {error && <p>Error: {error}</p>}
      {weatherData && !loading && (
        <div>
          <h2>{weatherData.name}</h2>
          <p>{weatherData.weather[0].description}</p>
          <p>Temperature: {weatherData.main.temp}</p>
        </div>
      )}
    </div>
  );
};

export default Getaction;