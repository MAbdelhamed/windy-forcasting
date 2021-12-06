'use strict';

import {
  getDOMElement,
  createDOMElement,
  clearDOMElement,
} from '../utils/DOMUtils.js';
import { cityBox } from '../views/cityWeather.js';

async function initialize() {
  const globalWeatherContainer = getDOMElement('global-forecasting');

  // globalWeatherContainer.appendChild(await cityBox('New York'));
  // globalWeatherContainer.appendChild(await cityBox('Cairo'));
  // globalWeatherContainer.appendChild(await cityBox('Amsterdam'));
  // const requestedWeatherContainer = getDOMElement('requested-forecasting');

  requestedWeatherContainer.appendChild(await cityBox('Cairo'));
}

// Step one initialize the weather forecasting
window.addEventListener('load', initialize);
