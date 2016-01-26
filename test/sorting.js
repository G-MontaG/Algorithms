"use strict";

const _ = require('lodash');
const assert = require('chai').assert;

const selection = require('../src/selection-sort');
const insertion = require('../src/insertion-sort');
const shell = require('../src/shell-sort');
const mergeTopBottom = require('../src/merge-sort(top-bottom)');
const mergeBottomTop = require('../src/merge-sort(bottom-top)');

function isSorted(array) {
  for (let i = 1, size = array.length; i < size; i++) {
    if (array[i] < array[i - 1]) {
      return false;
    }
  }
  return true;
}

let smallArray = _.map(new Array(100), () => _.random(9));
let mediumArray = _.map(new Array(1000), () => _.random(9));
let largeArray = _.map(new Array(10000), () => _.random(9));
let extraLargeArray = _.map(new Array(50000), () => _.random(9));

describe('Sorting algorithms', () => {

  let smallArrayTest;
  let mediumArrayTest;
  let largeArrayTest;
  let extraLargeArrayTest;

  beforeEach(() => {
    smallArrayTest = _.clone(smallArray);
    mediumArrayTest = _.clone(mediumArray);
    largeArrayTest = _.clone(largeArray);
    extraLargeArrayTest = _.clone(extraLargeArray);
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

    it('sorting extra large array', () => {
      selection.sort(extraLargeArrayTest);
      assert.isTrue(isSorted(extraLargeArrayTest));
    });

  });

  describe('Insertion sort', () => {

    it('sorting small array', () => {
      insertion.sort(smallArrayTest);
      assert.isTrue(isSorted(smallArrayTest));
    });

    it('sorting medium array', () => {
      insertion.sort(mediumArrayTest);
      assert.isTrue(isSorted(mediumArrayTest));
    });

    it('sorting large array', () => {
      insertion.sort(largeArrayTest);
      assert.isTrue(isSorted(largeArrayTest));
    });

    it('sorting extra large array', () => {
      insertion.sort(extraLargeArrayTest);
      assert.isTrue(isSorted(extraLargeArrayTest));
    });

  });


  describe('Shell sort', () => {

    it('sorting small array', () => {
      shell.sort(smallArrayTest);
      assert.isTrue(isSorted(smallArrayTest));
    });

    it('sorting medium array', () => {
      shell.sort(mediumArrayTest);
      assert.isTrue(isSorted(mediumArrayTest));
    });

    it('sorting large array', () => {
      shell.sort(largeArrayTest);
      assert.isTrue(isSorted(largeArrayTest));
    });

    it('sorting extra large array', () => {
      shell.sort(extraLargeArrayTest);
      assert.isTrue(isSorted(extraLargeArrayTest));
    });

  });

  describe('Merge (top-bottom) sort', () => {

    it('sorting small array', () => {
      mergeTopBottom.sort(smallArrayTest);
      assert.isTrue(isSorted(smallArrayTest));
    });

    it('sorting medium array', () => {
      mergeTopBottom.sort(mediumArrayTest);
      assert.isTrue(isSorted(mediumArrayTest));
    });

    it('sorting large array', () => {
      mergeTopBottom.sort(largeArrayTest);
      assert.isTrue(isSorted(largeArrayTest));
    });

    it('sorting extra large array', () => {
      mergeTopBottom.sort(extraLargeArrayTest);
      assert.isTrue(isSorted(extraLargeArrayTest));
    });

  });

  describe('Merge (bottom-top) sort', () => {

    it('sorting small array', () => {
      mergeBottomTop.sort(smallArrayTest);
      assert.isTrue(isSorted(smallArrayTest));
    });

    it('sorting medium array', () => {
      mergeBottomTop.sort(mediumArrayTest);
      assert.isTrue(isSorted(mediumArrayTest));
    });

    it('sorting large array', () => {
      mergeBottomTop.sort(largeArrayTest);
      assert.isTrue(isSorted(largeArrayTest));
    });

    it('sorting extra large array', () => {
      mergeBottomTop.sort(extraLargeArrayTest);
      assert.isTrue(isSorted(extraLargeArrayTest));
    });

  });
});