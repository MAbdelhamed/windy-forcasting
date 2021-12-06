'use strict';
import {
  getDOMElement,
  createDOMElement,
  clearDOMElement,
} from '../utils/DOMUtils.js';
import { fetchWeather } from '../API/fetchAPI.js';

function getDate(now) {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  return `${days[now.getDay()]} ${now.getDate()} ${
    months[now.getMonth()]
  } ${now.getFullYear()}`;
}
// function that build the view for each city container with its elements

export async function cityBox(city = '') {
  const cityContainer = createDOMElement('div');
  clearDOMElement(cityContainer);
  const cityName = createDOMElement('h2');
  const date = createDOMElement('h5');
  let now = new Date();
  date.textContent = getDate(now);
  const temperature = createDOMElement('h3');
  const weatherStatus = createDOMElement('h4');
  const highLow = createDOMElement('h4');

  if (city === '') {
    cityName.textContent = `City name`;
    temperature.textContent = `Temperature in °C`;
    weatherStatus.textContent = `Weather status`;
    highLow.textContent = `High Low in °C`;
    
  } else {
    try {
      const weather = await fetchWeather(city);
      cityName.textContent = `${weather.name} , ${weather.sys.country}`;
      temperature.textContent = `${Math.round(weather.main.temp)} °C`;
      weatherStatus.textContent = `${weather.weather[0].main}`;
      highLow.textContent = `${Math.round(
        weather.main.temp_min
      )} °C / ${Math.round(weather.main.temp_max)} °C`;
      
    } catch (error) {
      throw console.log(error);
    }
    cityContainer.appendChild(cityName);
    cityContainer.appendChild(date);
    cityContainer.appendChild(temperature);
    cityContainer.appendChild(weatherStatus);
    cityContainer.appendChild(highLow);
  }
  return cityContainer;
}
