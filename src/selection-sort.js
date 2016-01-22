"use strict";

const _ = require('lodash');

module.exports = (function() {

  function sort(array) {
    let size = array.length;
    for(let i = 0; i < size; i++) {
      for(let j = i + 1; j < size; j++) {
        if (less(array, j, i)) {
          exch(array, i, j);
        }
      }
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