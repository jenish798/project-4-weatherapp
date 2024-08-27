import axios from 'axios';

export const fetchWeatherDataFromAPI = async (city) => {

  const apiUrl = import.meta.env.VITE_API_URL;
  const apiKey = import.meta.env.VITE_API_KEY;

  try {
    const response = await axios.get(`${apiUrl}?q=${city}&appid=${apiKey}`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};