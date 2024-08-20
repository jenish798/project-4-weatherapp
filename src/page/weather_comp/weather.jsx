import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeatherData } from "../../thunk/thunk";
import InputComp from "../../components/input/input";
import ButtonComp from "../../components/button/button";
import Getaction from "../../API/getaction/getaction";

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
    <div>
      <form className="inpt_btn" onSubmit={handleSubmit}>
        <InputComp
          value={city}
          onChange={(event) => setCity(event.target.value)}
        />
        <ButtonComp onClick={() => {}} disabled={loading} loading={loading} />
      </form>
      <Getaction
        city={city}
        weatherData={weatherData}
        loading={loading}
        error={error}
      />
    </div>
  );
};

export default Weather;
