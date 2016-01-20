"use strict";

const _ = require('lodash');

module.exports = (function() {
  function sort(array) {
    let size = array.length;
    for(let i = 0; i < size; i++) {
      let min = i;
      for(let j = i+1; j < size; j++) {
        if (array[j] < array[min]) {
          min = j;
        }
      }
      exch(array, i, min);
    }
  }

  function exch(array, i, min) {
    let temp = array[i];
    array[i] = array[min];
    array[min] = temp;
  }

  return {
    sort: sort
  };
})();