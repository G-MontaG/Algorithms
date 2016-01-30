"use strict";

// The number of compares used by shellsort with the increments 1, 4, 13, 40, 121, 364, ...
// is bounded by a small multiple of N times the number of increments used.
module.exports = (function () {

  function sort(array) {
    let size = array.length;
    let h = 1;
    while (h < size / 3) {
      h = h * 3 + 1;
    }
    while (h >= 1) {
      for (let i = h; i < size; i++) {
        for (let j = i; j >= h && _less(array, j, j - h); j = j - h) {
          _exch(array, j, j - h);
        }
      }
      h = Math.floor(h / 3);
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