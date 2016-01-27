"use strict";

const _ = require('lodash');

module.exports = (function () {

  let _aux = [];

  function _merge(array, lo, mid, hi) {
    let i = lo;
    let j = mid + 1;
    _aux = _.slice(array, lo, hi);

    for (let k = lo; k <= hi; k++) {
      if (i > mid) {
        array[k] = _aux[j++];
      }
      else if (j > hi) {
        array[k] = _aux[i++];
      }
      else if (_less(array, j, i)) {
        array[k] = _aux[j++];
      }
      else {
        array[k] = _aux[i++];
      }
    }
  }

  function sort(array) {
    _aux = new Array(array.length);
    _sort(array, 0, array.length - 1);
  }

  function _sort(array, lo, hi) {
    if (hi <= lo) {
      return null;
    }

    let mid = lo + (hi - lo) / 2;

    _sort(array, lo, mid);
    _sort(array, mid + 1, hi);
    _merge(array, lo, mid, hi);
  }

  function _less(array, i, min) {
    return array[i] < array[min];
  }

  return {
    sort: sort
  };

})();