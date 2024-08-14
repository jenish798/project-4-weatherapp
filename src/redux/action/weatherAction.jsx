import axios from 'axios';

export const FETCH_WEATHER_REQUEST = 'FETCH_WEATHER_REQUEST';
export const FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS';
export const FETCH_WEATHER_FAILURE = 'FETCH_WEATHER_FAILURE';

export const fetchWeatherRequest = () =>({
  type:'fetch_weather_request',
})

export const fetchWeatherSuccess = (data) =>({
  type:'fetch_weather_success',
  payload:data,
})

export const fetchWeatherFailure = (error) =>({
  type:'fetch_weather_failure',
  payload:error,
})

export const fetchWeatherData = (city) => {
  return async (dispatch) => {
    dispatch(fetchWeatherRequest());
    try {
      const response = await axios.get(
      );
      dispatch(fetchWeatherSuccess(response.data));
    } catch (error) {
      dispatch(fetchWeatherFailure(error.message));
    }
  };
};
