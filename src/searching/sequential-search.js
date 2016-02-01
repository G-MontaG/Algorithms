"use strict";

const _ = require('lodash');

// Map is default implementation of symbol table
class SequentialSearch {

  constructor(items) {
    this._item = [{
      key: '',
      value: ''
    }];

    if (!items) {
      this._size = 0;
    } else {
      this._size = this._item.length;
      _.forEach(items, (item, index) => {
        this._item[index].key = item.key;
        this._item[index].value = item.value;
      });
    }
  }

  size() {
    return this._size;
  }

  isEmpty() {
    return this._size === 0;
  }

  contains(key) {
    return this.get(key) !== null;
  }

  get(key) {
    if (!key) {
      return null;
    } else {
      let getValue = null;
      _.map(this._item, (item) => {
        if (key === item.key) {
          getValue = item.value;
        }
      });
      return getValue;
    }
  }

  put(key, value) {
    if (!key || !value) {
      return null;
    } else {
      let findKey = false;
      _.map(this._item, (item) => {
        if (key === item.key) {
          item.value = value;
          findKey = true;
        }
      });

      if (!findKey) {
        this._item[this._size++] = {
          key: key,
          value: value
        };
      }
      return true;
    }
  }

  delete(key) {
    if (!key) {
      return null;
    } else {
      _.remove(this._item, (item) => {
        return item.key === key;
      });
    }
  }

  get keys() {
    return _.map(this._item, (item) => {
      return item.key;
    });
  }

}

module.exports = SequentialSearch;