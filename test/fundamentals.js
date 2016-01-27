"use strict";

const _ = require('lodash');
const assert = require('chai').assert;

const Counter = require('../src/fundamentals/counter');
const testCounter = new Counter('Test counter', 0);

const Accumulator = require('../src/fundamentals/accumulator');
const testAccumulator = new Accumulator();

describe('Fundamentals algorithms', () => {


  describe('Counter', () => {

    beforeEach(() => {
      testCounter.counter = 0;
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

    beforeEach(() => {
      testAccumulator.reset();
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

});