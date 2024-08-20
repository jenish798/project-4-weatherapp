import axios from 'axios';
import { API_KEY,BASE_URL } from '../../API/key/key';

export const fetchWeatherDataFromAPI = async (city) => {
  try {
    const response = await axios.get(`${BASE_URL}?q=${city}&appid=${API_KEY}`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};