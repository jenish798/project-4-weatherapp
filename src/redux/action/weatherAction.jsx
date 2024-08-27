import { FETCH_WEATHER_FAILURE,FETCH_WEATHER_REQUEST,FETCH_WEATHER_SUCCESS } from '../actiontype/actiontyperequest';


export const fetchWeatherRequest = () =>({
  type: FETCH_WEATHER_REQUEST,
})

export const fetchWeatherSuccess = (data) =>({
  type:FETCH_WEATHER_SUCCESS,
  payload:data,
})

export const fetchWeatherFailure = (error) =>({
  type:FETCH_WEATHER_FAILURE,
  payload:error,
})
