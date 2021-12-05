'use strict';

import {
  getDOMElement,
  createDOMElement,
  clearDOMElement,
} from '../utils/DOMUtils.js';
import { cityBox } from '../views/cityWeather.js';

function initialize() {
  const globalWeatherContainer = getDOMElement('global-forecasting');
  clearDOMElement(globalWeatherContainer);
  globalWeatherContainer.appendChild(cityBox());
  globalWeatherContainer.appendChild(cityBox());
  globalWeatherContainer.appendChild(cityBox());
}

// Step one initialize the weather forecasting
window.addEventListener('load', initialize);
