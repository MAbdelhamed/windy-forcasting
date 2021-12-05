'use strict';
import {
  getDOMElement,
  createDOMElement,
  clearDOMElement,
} from '../utils/DOMUtils.js';

export function cityBox(city = 'New York') {
  const cityContainer = createDOMElement('div');
  clearDOMElement(cityContainer);
  const cityName = createDOMElement('h2');
  cityName.textContent = `${city}`;
  const date = createDOMElement('h2');
  date.textContent = '11/12/2020';
  const temperature = createDOMElement('h2');
  temperature.textContent = '15 C';
  cityContainer.appendChild(cityName);
  cityContainer.appendChild(date);
  cityContainer.appendChild(temperature);
  return cityContainer;
}
