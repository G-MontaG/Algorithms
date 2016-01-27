"use strict";

module.exports = (function () {

  let _pq = [];
  let _size = 0;

  function maxPQ(maxN) {
    _pq = new Array(maxN + 1);
  }

  function isEmpty() {
    return _size === 0;
  }

  function size() {
    console.log(_pq);
    return _size;
  }

  function insert(v) {
    _pq[++_size] = v;
    _swim(_size);
  }

  function deleteMax() {
    let max = _pq[1];
    _exch(_pq, 1, _size--);
    _pq[_size + 1] = null;
    _sink(1);
    return max;
  }

  function _swim(k) {
    while (k > 1 && _less(_pq, k / 2, k)) {
      _exch(_pq, k / 2, k);
      k = k / 2;
    }
  }

  function _sink(k) {
    while (2 * k <= _size) {
      let j = 2 * k;
      if (j < _size && _less(_pq, j, j + 1)) {
        j++;
      }
      if (!_less(_pq, k, j)) {
        break;
      }
      _exch(k, j);
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
    maxPQ: maxPQ,
    isEmpty: isEmpty,
    size: size,
    insert: insert,
    deleteMax: deleteMax
  };

})();