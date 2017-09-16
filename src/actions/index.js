import axios from 'axios';

//constants
const API_KEY = '599849e6048d135ad639a174d2802cb6';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
//single source of action type, export as variable
export const FETCH_WEATHER = 'FETCH_WEATHER';

//make an action creator that makes an AJAX request to fetch weather data

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request =  axios.get(url)
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}