'use strict';
import { cityBox } from '../views/cityWeather.js';
import { getDOMElement } from '../utils/DOMUtils.js';
const requestedCity = getDOMElement('search-box');

export async function searchForCity(evnt) {
  const result = await cityBox(requestedCity.value);
  return result;
}
