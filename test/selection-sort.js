"use strict";

const _ = require('lodash');
const assert = require('chai').assert;

const selection = require('../src/selection-sort');

function isSorted(array) {
  for(let i = 1, size = array.length; i < size; i++) {
    if (array[i] < array[i-1]) {
      return false;
    }
  }
  return true;
}

describe('Selection sort', () => {

  let array = [2,7,3,9,1,6,4,5,6,9,2,6,9,0,2];

  it('should sorted array', () => {
    selection.sort(array);
    assert.isTrue(isSorted(array));
  });

});