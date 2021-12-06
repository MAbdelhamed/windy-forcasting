'use strict';

import { weatherStatusImage } from '../data.js';

export async function setWeatherStatusImage(date, weatherStatus, image) {
  // console.log(date);
  const classNames = setWeatherStatusImage.filter((img) => {
    if (img.key === weatherStatus) return img.time;
  });
  console.log(classNames);
  image.alt = 'weather status';
  return image;
}
