'use strict';
import { API } from '../data.js';

export async function fetchWeather(city = '') {
  const weather = await fetch(
    `${API.url}q=${city}&units=metric&APPID=${API.key}`
  );

  return weather.json();
}
