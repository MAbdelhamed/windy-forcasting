'use strict';
import { createDOMElement, clearDOMElement } from '../utils/DOMUtils.js';
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

export async function cityBox(city) {
  const cityContainer = createDOMElement('div');
  clearDOMElement(cityContainer);
  const cityName = createDOMElement('h2');
  const date = createDOMElement('h5');
  const temperature = createDOMElement('h3');
  const weatherStatus = createDOMElement('h3');
  const weatherStatusImage = createDOMElement('img');
  const highLow = createDOMElement('h4');

  if (city === '') {
    cityName.textContent = `City name`;
    temperature.textContent = `Temperature in °C`;
    weatherStatus.textContent = `Weather status`;
    highLow.textContent = `High Low in °C`;
  } else {
    try {
      const weather = await fetchWeather(city);
      const now = new Date();
      date.textContent = getDate(now);
      cityName.textContent = `${weather.name} , ${weather.sys.country}`;
      temperature.textContent = `${Math.round(weather.main.temp)} °C`;
      temperature.className = 'temp';
      weatherStatus.textContent = `${weather.weather[0].main}`;
      weatherStatusImage.src = `http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`;
      weatherStatusImage.alt = `${weather.weather[0].main}`;
      highLow.textContent = `${Math.round(
        weather.main.temp_min
      )} °C / ${Math.round(weather.main.temp_max)} °C`;
      cityContainer.className = 'col-sm-3 city-box';
    } catch (error) {
      setTimeout(function () {
        alert('Invalid city name, Please Enter a valid city name');
      }, 100);
      throw error.message;
    }
    cityContainer.appendChild(cityName);
    cityContainer.appendChild(date);
    cityContainer.appendChild(temperature);
    cityContainer.appendChild(weatherStatus);
    cityContainer.appendChild(weatherStatusImage);
    cityContainer.appendChild(highLow);
  }
  return cityContainer;
}
