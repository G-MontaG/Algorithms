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

    it('get/put value from table by key', () => {
      sequentialSearch.put('1', 'first');
      assert.strictEqual('first', sequentialSearch.get('1'));
    });

    it('delete value from table by key', () => {
      sequentialSearch.put('1', 'first');
      sequentialSearch.put('2', 'second');
      sequentialSearch.delete('2');
      assert.strictEqual(null, sequentialSearch.get('2'));
    });

    it('get keys from table', () => {
      sequentialSearch.put('1', 'first');
      sequentialSearch.put('2', 'second');
      assert.deepEqual(['1', '2'], sequentialSearch.keys);
    });

  });

});