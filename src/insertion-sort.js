"use strict";

module.exports = (function() {

  function sort(array) {
    let size = array.length;
    for(let i = 1; i < size; i++) {
      for(let j = i; j > 0 && _less(array, j, j-1); j--) {
        _exch(array, j, j-1);
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