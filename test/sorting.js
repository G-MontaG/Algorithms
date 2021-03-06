"use strict";

const _ = require('lodash');
const assert = require('chai').assert;

const selection = require('../src/sorting/selection-sort');
const insertion = require('../src/sorting/insertion-sort');
const shell = require('../src/sorting/shell-sort');
const mergeTopBottom = require('../src/sorting/merge-sort(top-bottom)');
const mergeBottomTop = require('../src/sorting/merge-sort(bottom-top)');
const quick = require('../src/sorting/quick-sort');
const quick3way = require('../src/sorting/quick-sort-3way');
const quickX = require('../src/sorting/quick-sort-x');
const MaxPQ = require('../src/sorting/max-pq');
const MinPQ = require('../src/sorting/min-pq');
const heapSort = require('../src/sorting/heap-sort');

function isSorted(array) {
  for (let i = 1, size = array.length; i < size; i++) {
    if (array[i] < array[i - 1]) {
      return false;
    }
  }
  return true;
}

let smallArray = _.map(new Array(1000), () => _.random(9));
let mediumArray = _.map(new Array(10000), () => _.random(9));
let largeArray = _.map(new Array(50000), () => _.random(9));
let extraLargeArray = _.map(new Array(100000), () => _.random(9));

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

  describe('Quick sort', () => {

    it('sorting small array', () => {
      quick.sort(smallArrayTest);
      assert.isTrue(isSorted(smallArrayTest));
    });

    it('sorting medium array', () => {
      quick.sort(mediumArrayTest);
      assert.isTrue(isSorted(mediumArrayTest));
    });

    it('sorting large array', () => {
      quick.sort(largeArrayTest);
      assert.isTrue(isSorted(largeArrayTest));
    });

    it('sorting extra large array', () => {
      quick.sort(extraLargeArrayTest);
      assert.isTrue(isSorted(extraLargeArrayTest));
    });

  });

  describe('Quick 3 way sort', () => {

    it('sorting small array', () => {
      quick3way.sort(smallArrayTest);
      assert.isTrue(isSorted(smallArrayTest));
    });

    it('sorting medium array', () => {
      quick3way.sort(mediumArrayTest);
      assert.isTrue(isSorted(mediumArrayTest));
    });

    it('sorting large array', () => {
      quick3way.sort(largeArrayTest);
      assert.isTrue(isSorted(largeArrayTest));
    });

    it('sorting extra large array', () => {
      quick3way.sort(extraLargeArrayTest);
      assert.isTrue(isSorted(extraLargeArrayTest));
    });

  });

  describe('Quick X sort', () => {

    //it('sorting small array', () => {
    //  quickX.sort(smallArrayTest);
    //  console.log(smallArrayTest);
    //  assert.isTrue(isSorted(smallArrayTest));
    //});

    //it('sorting medium array', () => {
    //  quickX.sort(mediumArrayTest);
    //  assert.isTrue(isSorted(mediumArrayTest));
    //});
    //
    //it('sorting large array', () => {
    //  quickX.sort(largeArrayTest);
    //  assert.isTrue(isSorted(largeArrayTest));
    //});
    //
    //it('sorting extra large array', () => {
    //  quickX.sort(extraLargeArrayTest);
    //  assert.isTrue(isSorted(extraLargeArrayTest));
    //});

  });

  describe('Max priority queue sort', () => {

    let maxPQ;

    beforeEach(() => {
      maxPQ = new MaxPQ([6, 1, 8]);
    });

    it('get queue size', () => {
      assert.strictEqual(3, maxPQ.size);
    });

    it('get isEmpty test for queue', () => {
      assert.strictEqual(false, maxPQ.isEmpty());
    });

    it('get item with max priority from queue', () => {
      assert.strictEqual(8, maxPQ.max);
    });

    it('insert item to queue', () => {
      maxPQ.insert(10);
      assert.strictEqual(10, maxPQ.max);
    });

    it('delete max item from queue', () => {
      maxPQ.deleteMax();
      assert.strictEqual(6, maxPQ.max);
    });

  });

  describe('Min priority queue sort', () => {

    let minPQ;

    beforeEach(() => {
      minPQ = new MinPQ([6, 2, 8]);
    });

    it('get queue size', () => {
      assert.strictEqual(3, minPQ.size);
    });

    it('get isEmpty test for queue', () => {
      assert.strictEqual(false, minPQ.isEmpty());
    });

    it('get item with min priority from queue', () => {
      assert.strictEqual(2, minPQ.min);
    });

    it('insert item to queue', () => {
      minPQ.insert(1);
      assert.strictEqual(1, minPQ.min);
    });

    it('delete min item from queue', () => {
      minPQ.deleteMin();
      assert.strictEqual(6, minPQ.min);
    });

  });

  describe('Heap sort', () => {

    it('sorting small array', () => {
      heapSort.sort(smallArrayTest);
      assert.isTrue(isSorted(smallArrayTest));
    });

    it('sorting medium array', () => {
      heapSort.sort(mediumArrayTest);
      assert.isTrue(isSorted(mediumArrayTest));
    });

    it('sorting large array', () => {
      heapSort.sort(largeArrayTest);
      assert.isTrue(isSorted(largeArrayTest));
    });

    it('sorting extra large array', () => {
      heapSort.sort(extraLargeArrayTest);
      assert.isTrue(isSorted(extraLargeArrayTest));
    });

  });

});