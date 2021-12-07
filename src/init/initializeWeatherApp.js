'use strict';


import { getDOMElement, clearDOMElement } from '../utils/DOMUtils.js';
import { cityBox } from '../views/cityWeatherView.js';
import { cityNames } from '../data.js';

export async function initialize() {
  const globalWeatherContainer = getDOMElement('global-forecasting');
  const requestedCity = getDOMElement('search-box');
  clearDOMElement(globalWeatherContainer);
  // get the weather forecast for 3 random cities
  globalWeatherContainer.appendChild(
    await cityBox(cityNames[Math.floor(Math.random() * cityNames.length)])
  );
  globalWeatherContainer.appendChild(
    await cityBox(cityNames[Math.floor(Math.random() * cityNames.length)])
  );
  globalWeatherContainer.appendChild(
    await cityBox(cityNames[Math.floor(Math.random() * cityNames.length)])
  );
  const requestedWeatherContainer = getDOMElement('requested-forecasting');
  // get the weather forecast for a user requested city
  requestedCity.addEventListener('keypress', async (event) => {
    if (event.key === 'Enter') {
      const cityForecast = await cityBox(requestedCity.value);
      clearDOMElement(requestedWeatherContainer);
      requestedWeatherContainer.appendChild(requestedCity);
      requestedWeatherContainer.appendChild(cityForecast);
    }
  });
}

// Step one initialize the weather forecasting
window.addEventListener('load', initialize);
