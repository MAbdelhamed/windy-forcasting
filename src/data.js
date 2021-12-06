'use strict';

export const API = {
  key: '2a48b7d08f044875a7b52a44aa88f303',
  url: 'https://api.openweathermap.org/data/2.5/weather?',
};

export const weatherStatusImage = [
  {
    key: 'clear sky',
    time: {
      classNameDay: 'bi bi-brightness-high',
      classNameNight: 'bi bi-moon-fill',
    },
  },
  {
    key: 'few clouds',
    time: {
      classNameDay: 'bi bi-cloud-sun',
      classNameNight: 'bi bi-cloud-moon-fill',
    },
  },
  {
    key: 'scattered clouds',
    time: {
      classNameDay: 'bi bi-cloud',
      classNameNight: 'bi bi-cloud-fill',
    },
  },
  {
    key: 'broken clouds',
    time: {
      classNameDay: 'bi bi-clouds',
      classNameNight: 'bi bi-clouds-fill',
    },
  },
  {
    key: 'shower rain',
    time: {
      classNameDay: 'bi bi-cloud-rain-heavy',
      classNameNight: 'bi bi-cloud-rain-heavy-fill',
    },
  },
  {
    key: 'rain',
    time: {
      classNameDay: 'bi bi-cloud-drizzle',
      classNameNight: 'bi bi-cloud-drizzle-fill',
    },
  },
  {
    key: 'thunderstorm',
    time: {
      classNameDay: 'bi bi-cloud-lightning-rain',
      classNameNight: 'bi bi-cloud-lightning-rain-fill',
    },
  },

  {
    key: 'snow',
    time: {
      classNameDay: 'bi bi-cloud-snow',
      classNameNight: 'bi bi-cloud-sleet-fill',
    },
  },
  {
    key: 'mist',
    time: {
      classNameDay: 'bi bi-cloud-haze2',
      classNameNight: 'bi bi-cloud-haze2-fill',
    },
  },
];

