"use strict";

const _ = require('lodash');

module.exports = (function() {

  function sort(array) {
    let size = array.length;
    let h = 1;
    while(h < size/3) {
      h = h * 3 + 1;
    }
    while(h >= 1) {
      for(let i = h; i < size; i++) {
        for(let j = i; j >= h && less(array, j, j-h); j = j-h) {
          exch(array, j, j-h);
        }
      }
      h = h/3;
    }
  }

  function less(array, i, min) {
    return array[i] < array[min];
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