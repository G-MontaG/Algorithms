"use strict";

const _ = require('lodash');

module.exports = (function() {

  let aux = [];

  function _merge(array, lo, mid, hi) {
    let i = lo;
    let j = mid+1;
    let aux = _.clone(array);

    _.forEach(aux, (value, index) => {
      if(i > mid) {
        array[index] = aux[j++];
      } else if(j > hi) {
        array[index] = aux[i++];
      } else if(_less(aux[j], aux[i])) {
        array[index] = aux[j++];
      } else {
        array[index] = aux[i++];
      }
    });
  }

  function sort(array) {
    aux = new Array(array.length);
    _sort(array, 0, array.length - 1);
  }

  function _sort(array, lo, hi) {
    if(hi <= lo) { return null; }

    let mid = lo + (hi -lo)/2;

    _sort(array, lo, mid);
    _sort(array, mid + 1, hi);
    _merge(array, lo, mid, hi);
  }

  function _less(array, i, min) {
    return array[i] < array[min];
  }

  //function _exch(array, i, min) {
  //  let temp = array[i];
  //  array[i] = array[min];
  //  array[min] = temp;
  //}

  return {
    sort: sort
  };

})();