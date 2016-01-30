"use strict";

// Selection sort uses ~(N^2/2) compares and N exchanges to sort an array of length N.
module.exports = (function () {

  function sort(array) {
    let size = array.length;
    for (let i = 0; i < size; i++) {
      for (let j = i + 1; j < size; j++) {
        if (_less(array, j, i)) {
          _exch(array, i, j);
        }
      }
    }
  }

  function _less(array, i, min) {
    return array[i] < array[min];
  }

  function _exch(array, i, min) {
    let temp = array[i];
    array[i] = array[min];
    array[min] = temp;
  }

  return {
    sort: sort
  };

})();