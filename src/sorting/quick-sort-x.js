"use strict";

const insertion = require('./insertion-sort');

module.exports = (function () {

  let _cutoff = 8;

  function sort(array) {
    _sort(array, 0, array.length - 1);
  }

  function _sort(array, lo, hi) {
    let size = hi - lo + 1;

    if (size <= _cutoff) {
      insertion.sort(array, lo, hi);
    } else {
      let eps = Math.floor(size/8);
      let mid = Math.floor(lo + size/2);
      let m1 = _median3(array, lo, lo + eps, lo + eps + eps);
      let m2 = _median3(array, mid - eps, mid, mid + eps);
      let m3 = _median3(array, hi - eps - eps, hi - eps, hi);

      let ninther = _median3(array, m1, m2, m3);
      _exch(array, ninther, lo);
    }

    let i = lo;
    let j = hi + 1;
    let p = lo;
    let q = hi + 1;
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

      if (i === j && array[i] === v) {
        _exch(array, ++p, i);
      }

      if (i >= j) {
        break;
      }
      _exch(array, i, j);

      if (array[i] === v) {
        _exch(array, ++p, i);
      }
      if (array[j] === v) {
        _exch(array, --q, j);
      }
    }

    i = j + 1;

    for (let k = lo; k <= p; k++) {
      _exch(array, k, j--);
    }
    for (let k = hi; k >= q; k--) {
      _exch(array, k, i++);
    }

    _sort(array, lo, j);
    _sort(array, i, hi);
  }

  function _median3(array, i, j, k) {
    return (array[i] < array[j] ?
      (array[j] < array[k] ? j : array[i] < array[k] ? k : i) :
      (array[k] < array[j] ? j : array[k] < array[i] ? k : i));
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