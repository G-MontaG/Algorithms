"use strict";

const _ = require('lodash');
const assert = require('chai').assert;

const SymbolTable = require('../src/searching/symbol-table');
const SequentialSearch = require('../src/searching/sequential-search');
const BinarySearch = require('../src/searching/binary-search');

describe('Searching algorithms', () => {

  describe('Symbol table', () => {

    let symbolTable;

    beforeEach(() => {
      symbolTable = new SymbolTable([['2', 'second']]);
    });

    it('get value from table', () => {
      assert.strictEqual('second', symbolTable.get('2'));
    });

    it('put value to table', () => {
      symbolTable.put('1', 'first');
      assert.strictEqual('first', symbolTable.get('1'));
    });

    it('remove value from table', () => {
      assert.strictEqual(true, symbolTable.delete('2'));
    });

    it('check contain key in table', () => {
      assert.strictEqual(true, symbolTable.contain('2'));
    });

    it('get size of table', () => {
      assert.strictEqual(1, symbolTable.size);
    });

    it('check isEmpty table', () => {
      assert.strictEqual(false, symbolTable.isEmpty());
    });

    it('get keys from table', () => {
      symbolTable.put('1', 'first');
      assert.deepEqual(['2', '1'], symbolTable.keys);
    });

  });

  describe('Symbol table implementation with sequential search in an unordered linked list of key-value pairs.', () => {

    let sequentialSearch;

    beforeEach(() => {
      sequentialSearch = new SequentialSearch([['2', 'second'], ['3', 'third']]);
    });

    it('get/put value from table by key', () => {
      sequentialSearch.put('1', 'first');
      assert.strictEqual('first', sequentialSearch.get('1'));
    });

    it('delete value from table by key', () => {
      sequentialSearch.put('1', 'first');
      sequentialSearch.delete('2');
      assert.strictEqual(null, sequentialSearch.get('2'));
    });

    it('get keys from table', () => {
      sequentialSearch.put('1', 'first');
      assert.deepEqual(['2', '3', '1'], sequentialSearch.keys);
    });

  });

  describe('Symbol table implementation with binary search', () => {

    let binarySearch;

    beforeEach(() => {
      // must be sorted
      binarySearch = new BinarySearch([['1', 'first'], ['2', 'second'], ['3', 'third']]);
    });

    it('get/put value from table by key', () => {
      binarySearch.put('4', 'fourth');
      assert.strictEqual('fourth', binarySearch.get('4'));
    });

    it('delete value from table by key', () => {
      binarySearch.put('4', 'fourth');
      binarySearch.delete('2');
      assert.strictEqual(null, binarySearch.get('2'));
    });

    it('removes the smallest key and associated value from this symbol table', () => {
      binarySearch.put('4', 'fourth');
      binarySearch.deleteMin();
      assert.strictEqual(null, binarySearch.get('1'));
    });

    it('removes the largest key and associated value from this symbol table', () => {
      binarySearch.put('4', 'fourth');
      binarySearch.deleteMax();
      assert.strictEqual(null, binarySearch.get('4'));
    });

    it('Returns the smallest key in this symbol table', () => {
      assert.strictEqual('1', binarySearch.min);
    });

    it('Returns the largest key in this symbol table', () => {
      assert.strictEqual('3', binarySearch.max);
    });

    it('Returns the largest key in this symbol table less than or equal to key', () => {
      assert.strictEqual('2', binarySearch.floor('2.5'));
    });

    it('Returns the smallest key in this symbol table greater than or equal to key', () => {
      assert.strictEqual('3', binarySearch.ceiling('2.5'));
    });

    it('get keys from table', () => {
      binarySearch.put('4', 'fourth');
      assert.deepEqual(['1', '2', '3', '4'], binarySearch.keys);
    });

  });

});