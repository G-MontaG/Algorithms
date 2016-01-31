"use strict";

const _ = require('lodash');
const assert = require('chai').assert;

const SequentialSearch = require('../src/searching/sequential-search');

describe('Searching algorithms', () => {

  describe('Symbol table implementation with sequential search in an unordered linked list of key-value pairs.', () => {

    let sequentialSearch;

    beforeEach(() => {
      sequentialSearch = new SequentialSearch();
    });

    it('get value from table by key', () => {
      sequentialSearch.put('1', 'first');
      assert.strictEqual('first', sequentialSearch.get('1'));
    });

  });

});