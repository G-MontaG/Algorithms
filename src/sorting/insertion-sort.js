"use strict";

// Insertion sort uses ~(N^2/4) compares and ~(N^2/4) exchanges to sort
// a randomly ordered array of length N with distinct keys, on the average. The worst
// case is ~(N^2/2) compares and ~(N^2/2) exchanges and the best case is N-1 compares and 0 exchanges.
module.exports = (function () {

  function sort(array) {
    let size = array.length;
    for (let i = 1; i < size; i++) {
      for (let j = i; j > 0 && _less(array, j, j - 1); j--) {
        _exch(array, j, j - 1);
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