import axios from 'axios';
import { fetchWeatherFailure,fetchWeatherRequest,fetchWeatherSuccess } from '../redux/action/weatherAction';

const API_KEY = 'fbc4b181ae0e505b810c83328d502a3b';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const fetchWeatherData = (city) => {
    return async (dispatch) => {
      dispatch(fetchWeatherRequest());
      try {
        const response = await axios.get(
          `${BASE_URL}?q=${city}&${API_KEY}`
        );
        dispatch(fetchWeatherSuccess(response.data));
      } catch (error) {
        dispatch(fetchWeatherFailure(error.message));
      }
    };
  };