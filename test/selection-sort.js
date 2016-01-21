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

let smallArray = _.map(new Array(100), () => _.random(9));
let mediumArray = _.map(new Array(1000), () => _.random(9));
let largeArray = _.map(new Array(10000), () => _.random(9));

describe('Sorting algorithms', () => {

  let smallArrayTest;
  let mediumArrayTest;
  let largeArrayTest;

  beforeEach(() => {
    smallArrayTest = _.clone(smallArray);
    mediumArrayTest = _.clone(mediumArray);
    largeArrayTest = _.clone(largeArray);
  });

  describe('Selection sort', () => {

    it('sorting small array', () => {
      selection.sort(smallArrayTest);
      assert.isTrue(isSorted(smallArrayTest));
    });

    it('sorting medium array', () => {
      selection.sort(mediumArrayTest);
      assert.isTrue(isSorted(mediumArrayTest));
    });

    it('sorting large array', () => {
      selection.sort(largeArrayTest);
      assert.isTrue(isSorted(largeArrayTest));
    });
  });
});