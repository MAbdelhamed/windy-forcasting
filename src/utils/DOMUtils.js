'use strict';

/**
 * This function removes all the html inside the given element
 */
export const clearDOMElement = (DOMElement) => {
  DOMElement.innerHTML = '';
};

/**
 * This function creates a DOM element with the given tag.
 * In the options parameter it is possible to add some extra data to it:
 *
 *  class - the class that contains this element
 */
export const createDOMElement = (tag, options) => {
  const { className } = options || {};

  const element = document.createElement(tag);

  if (className != null) {
    element.class = className;
  }

  return element;
};

/**
 * Find and return a DOM element by its id
 */
export const getDOMElement = (id) => {
  return document.getElementById(id);
};
