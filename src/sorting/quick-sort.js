"use strict";

const _ = require('lodash');

module.exports = (function () {

  function _partition(array, lo, hi) {
    let i = lo;
    let j = hi + 1;
    let v = array[lo];

    while (true) {
      while (array[++i] < v) {
        if (i === hi) {
          break;
        }
      }
      while (v < array[--j]) {
        if (j === lo) {
          break;
        }
      }
      if (i >= j) {
        break;
      }
      _exch(array, i, j);
    }
    _exch(array, lo, j);
    return j;
  }

  function sort(array) {
    _sort(array, 0, array.length - 1);
  }

  function _sort(array, lo, hi) {
    if (hi <= lo) {
      return null;
    }

    let j = _partition(array, lo, hi);

    _sort(array, lo, j - 1);
    _sort(array, j + 1, hi);
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