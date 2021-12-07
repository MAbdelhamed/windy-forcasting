'use strict';


import { clearDOMElement } from '../utils/DOMUtils.js';
import { cityBox } from '../views/cityWeatherView.js';
import { cityNames } from '../data.js';
import {
  requestedForecasting,
  globalForecasting,
  requestedCity,
} from '../constants.js';

export async function initialize() {
  clearDOMElement(globalForecasting);
  // get the weather forecast for 3 random capitals
  globalForecasting.appendChild(
    await cityBox(cityNames[Math.floor(Math.random() * cityNames.length)])
  );
  globalForecasting.appendChild(
    await cityBox(cityNames[Math.floor(Math.random() * cityNames.length)])
  );
  globalForecasting.appendChild(
    await cityBox(cityNames[Math.floor(Math.random() * cityNames.length)])
  );
  // get the weather forecast for a user requested city
  requestedCity.addEventListener('keypress', async (event) => {
    if (event.key === 'Enter') {
      const cityForecast = await cityBox(requestedCity.value);
      clearDOMElement(requestedForecasting);
      requestedForecasting.appendChild(requestedCity);
      requestedForecasting.appendChild(cityForecast);
    }
  });
}

// Step one initialize the weather forecasting
window.addEventListener('load', initialize);
