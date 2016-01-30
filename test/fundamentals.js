"use strict";

const _ = require('lodash');
const assert = require('chai').assert;

const Counter = require('../src/fundamentals/counter');
const Accumulator = require('../src/fundamentals/accumulator');
const Vector = require('../src/fundamentals/vector');
const Bag = require('../src/fundamentals/bag');
const Queue = require('../src/fundamentals/queue');

describe('Fundamentals algorithms', () => {

  describe('Counter', () => {

    let testCounter;

    beforeEach(() => {
      testCounter = new Counter('Test counter', 0);
    });

    it('count 3 calls', () => {
      testCounter.increment();
      testCounter.increment();
      testCounter.increment();
      assert.strictEqual(3, testCounter.counter);
    });

    it('count 3 calls starting from 10', () => {
      testCounter.counter = 10;
      testCounter.increment();
      testCounter.increment();
      testCounter.increment();
      assert.strictEqual(13, testCounter.counter);
    });

    it('get counter name', () => {
      assert.strictEqual('Test counter', testCounter.name);
    });

    it('get counter as a string', () => {
      testCounter.increment();
      testCounter.increment();
      testCounter.increment();
      assert.strictEqual('Test counter: 3 count', testCounter.toString());
    });

  });

  describe('Accumulator', () => {

    let testAccumulator;

    beforeEach(() => {
      testAccumulator = new Accumulator();
    });

    it('get accumulator mean', () => {
      testAccumulator.addDataValue(0);
      testAccumulator.addDataValue(10);
      assert.strictEqual(5, testAccumulator.mean());
    });

    it('get accumulator mean as a string', () => {
      testAccumulator.addDataValue(0);
      testAccumulator.addDataValue(10);
      assert.strictEqual('Mean (2 values): 5', testAccumulator.toString());
    });

  });

  describe('Vector', () => {

    let testVector;

    beforeEach(() => {
      testVector = new Vector([1, 2, 3]);
    });

    it('get vector length', () => {
      assert.strictEqual(3, testVector.length);
      assert.strictEqual(3, testVector.dimension);
    });

    it('get vector', () => {
      assert.deepEqual([1, 2, 3], testVector.vector);
    });

    it('get dot of two vectors', () => {
      assert.deepEqual(12, testVector.dot([2, 2, 2]));
    });

    it('get magnitude of vector', () => {
      assert.strictEqual(3.7416573867739413, testVector.magnitude());
    });

    it('get distance to vector', () => {
      assert.strictEqual(1.4142135623730951, testVector.distanceTo([2, 2, 2]));
    });

    it('get vector plus vector', () => {
      assert.deepEqual([3, 4, 5], testVector.plus([2, 2, 2]));
    });

    it('get vector minus vector', () => {
      assert.deepEqual([-1, 0, 1], testVector.minus([2, 2, 2]));
    });

    it('get cartesian of vector', () => {
      assert.strictEqual(1, testVector.cartesian(0));
    });

    it('get times/scale of vector with value', () => {
      assert.deepEqual([2, 4, 6], testVector.times(2));
      assert.deepEqual([2, 4, 6], testVector.scale(2));
    });

    it('get direction of vector', () => {
      assert.deepEqual([0.2672612419124244, 0.5345224838248488, 0.8017837257372732], testVector.direction());
    });

    it('get vector as string', () => {
      assert.deepEqual('{1 2 3}', testVector.toString());
    });

  });

  describe('Bag', () => {

    let testBag;

    beforeEach(() => {
      testBag = new Bag([1, 2, 'string', [1, 2, 3], {'property': 'value'}]);
    });

    it('get bag size for bag', () => {
      assert.strictEqual(5, testBag.size);
    });

    it('get isEmpty test', () => {
      assert.strictEqual(false, testBag.isEmpty());
    });

    it('add items to bag', () => {
      testBag.add(['new string', [2, 2, 2]]);
      assert.deepEqual([1, 2, 'string', [1, 2, 3], {'property': 'value'}, 'new string', [2, 2, 2]], testBag.items);
    });

    it('clear bag', () => {
      testBag.clear();
      assert.deepEqual(0, testBag.size);
    });

  });

  describe('Queue', () => {

    let testQueue;

    beforeEach(() => {
      testQueue = new Queue([2, 4, 1]);
    });

    it('get queue size', () => {
      assert.strictEqual(3, testQueue.size);
    });

    it('get isEmpty test for queue', () => {
      assert.strictEqual(false, testQueue.isEmpty());
    });

    it('add items to stack queue', () => {
      testQueue.enqueue(3);
      assert.deepEqual([2, 4, 1, 3], testQueue.items);
    });

    it('remove items from stack queue', () => {
      testQueue.dequeue();
      assert.deepEqual([2, 4], testQueue.items);
    });

    it('get item from queue', () => {
      assert.strictEqual(2, testQueue.peek());
    });

    it('clear queue', () => {
      testQueue.clear();
      assert.deepEqual(0, testQueue.size);
    });

  });

});