"use strict";

// 2*N*lgN+2*N compares (and half that many exchanges) to sort N items.
module.exports = (function () {

  function sort(array) {
    let size = array.length;
    for (let k = Math.floor(size/2); k >= 1; k--)
    _sink(array, k, size);
    while (size > 1) {
      _exch(array, 1, size--);
      _sink(array, 1, size);
    }
  }

  function _sink(array, k, size) {
    while (2*k <= size) {
      let j = 2*k;
      if (j < size && _less(array, j, j+1)) {
        j++;
      }
      if (!_less(array, k, j)) {
        break;
      }
      _exch(array, k, j);
      k = j;
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