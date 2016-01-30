"use strict";

// Quicksort with 3-way partitioning uses ~(2*ln2)*N*H compares to sort N items,
// where H is the Shannon entropy, defined from the frequencies of key values.
module.exports = (function () {

  function sort(array) {
    _sort(array, 0, array.length - 1);
  }

  function _sort(array, lo, hi) {
    if (hi <= lo) {
      return null;
    }

    let lt = lo;
    let gt = hi;
    let v = array[lo];
    let i = lo;

    while (i <= gt) {
      let cmp = _compare(array[i], v);
      if (cmp < 0) {
        _exch(array, lt++, i++);
      } else if (cmp > 0) {
        _exch(array, i, gt--);
      } else {
        i++;
      }
    }

    _sort(array, lo, lt - 1);
    _sort(array, gt + 1, hi);
  }

  function _exch(array, i, min) {
    let temp = array[i];
    array[i] = array[min];
    array[min] = temp;
  }

  function _compare(i, j) {
    if (i > j) {
      return 1;
    } else if (i < j) {
      return -1;
    } else {
      return 0;
    }
  }

  return {
    sort: sort
  };

})();