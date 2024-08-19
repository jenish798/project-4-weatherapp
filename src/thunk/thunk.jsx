import { fetchWeatherDataFromAPI } from '../service/weatherservice';
import { fetchWeatherRequest, fetchWeatherSuccess, fetchWeatherFailure } from '../redux/action/weatherAction';

export const fetchWeatherData = (city) => {
  return async (dispatch) => {
    dispatch(fetchWeatherRequest());
    try {
      const data = await fetchWeatherDataFromAPI(city);
      dispatch(fetchWeatherSuccess(data));
    } catch (error) {
      dispatch(fetchWeatherFailure(error.message));
    }
  };
};