"use strict";

const _ = require('lodash');

// Map is default implementation of symbol table
class BinarySearch {

  constructor(items) {
    this._item = [{
      key: '',
      value: ''
    }];

    if (!items) {
      this._size = 0;
    } else {
      _.forEach(items, (item, index) => {
        this._item[index].key = item.key;
        this._item[index].value = item.value;
      });
      this._size = this._item.length;
    }
  }

}

module.exports = BinarySearch;