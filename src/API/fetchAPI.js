'use strict';
import { API } from '../data.js';

export async function fetchWeather(city = 'Cairo') {
  const weather = await fetch(
    `${API.url}q=${city}&units=metric&APPID=${API.key}`
  );
  console.log(weather.json);
  return weather.json();
}
