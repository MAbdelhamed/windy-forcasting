'use strict';


import { getDOMElement, clearDOMElement } from '../utils/DOMUtils.js';
import { cityBox } from '../views/cityWeather.js';

export async function initialize() {
  const globalWeatherContainer = getDOMElement('global-forecasting');
  clearDOMElement(globalWeatherContainer);
  const requestedCity = getDOMElement('search-box');

  globalWeatherContainer.appendChild(await cityBox('New York'));
  globalWeatherContainer.appendChild(await cityBox('Cairo'));
  globalWeatherContainer.appendChild(await cityBox('Amsterdam'));
  const requestedWeatherContainer = getDOMElement('requested-forecasting');
  // get the weather forecast for a specific city
  requestedCity.addEventListener('keypress', async (evnt) => {
    if (evnt.key === 'Enter') {
      const cityForecast = await cityBox(requestedCity.value);
      clearDOMElement(requestedWeatherContainer);
      requestedWeatherContainer.appendChild(requestedCity);
      requestedWeatherContainer.appendChild(cityForecast);
    }
  });
}

// Step one initialize the weather forecasting
window.addEventListener('load', initialize);
