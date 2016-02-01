"use strict";

const _ = require('lodash');
const assert = require('chai').assert;

const SymbolTable = require('../src/searching/symbol-table');
const SequentialSearch = require('../src/searching/sequential-search');

describe('Searching algorithms', () => {

  describe('Symbol table implementation with sequential search in an unordered linked list of key-value pairs.', () => {

    let symbolTable;

    beforeEach(() => {
      symbolTable = new SymbolTable([{
        key: '2',
        value: 'second'
      }]);
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
      sequentialSearch = new SequentialSearch([{
        key: '2',
        value: 'second'
      }]);
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
      assert.deepEqual(['2', '1'], sequentialSearch.keys);
    });

  });

});