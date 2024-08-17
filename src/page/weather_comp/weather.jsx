import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeatherData } from "../../API/endpoints";
import InputComp from "../../components/input/input";
import ButtonComp from "../../components/button/button";

const Weather = () => {
  const [city, setCity] = useState("");
  const dispatch = useDispatch();
  const weatherData = useSelector((state) => state.weather.weatherData);
  const loading = useSelector((state) => state.weather.loading);
  const error = useSelector((state) => state.weather.error);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (city) {
      dispatch(fetchWeatherData(city));
    }
  };

  return (
    <div className='home-1'>
      <form className="inpt_btn" onSubmit={handleSubmit}>
        <InputComp
          value={city}
          onChange={(event) => setCity(event.target.value)}
        />
        <ButtonComp onClick={() => {}} disabled={loading} loading={loading} />
      </form>
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

export default Weather;
