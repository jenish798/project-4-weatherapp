
const initialState = {
  weatherData:null,
  loading:false,
  error:null,
}

const weatherReducer = (state=initialState,action)=>{
  switch(action.type){
    case 'fetch_weather_request':
      return{
        ...state,
        loading:true,
        error:null
      };
      case'fetch_weather_success':
      return{
        ...state,
        loading:false,
        weatherData: action.payload,
      };
      case 'fetch_weather_failure':
        return{
          ...state,
          loading:false,
          error:action.payload,
        };
        default:
          return state;
  }

}

export default weatherReducer