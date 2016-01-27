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
    let size = array.length;
    _aux = new Array(array.length);

    for (let sz = 1; sz < size; sz = sz + sz) {
      for (let lo = 0; lo < size - sz; lo = lo + (sz + sz)) {
        _merge(array, lo, lo + sz - 1, Math.min(lo + 2 * sz - 1, size - 1));
      }
    }
  }

  function _less(array, i, min) {
    return array[i] < array[min];
  }

  return {
    sort: sort
  };

})();