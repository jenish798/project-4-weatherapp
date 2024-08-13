import {createStore, combineReducers} from 'redux'
import weatherReducer from '../reducer/weatherReducer'

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

const rootReducer = combineReducers({
    weather:weatherReducer,
})

const store = createStore(rootReducer);

export default store;