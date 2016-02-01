"use strict";

const _ = require('lodash');

// Map is default implementation of symbol table
class SequentialSearch {

  constructor(items) {
    this._item = [];

    if (!items) {
      this._size = 0;
    } else {
      _.forEach(items, (item) => {
        this._item.push(item);
      });
      this._size = this._item.length;
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
        if (key === item[0]) {
          getValue = item[1];
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
        if (key === item[0]) {
          item[1] = value;
          findKey = true;
        }
      });

      if (!findKey) {
        this._item[this._size++] = [key, value];
      }
      return true;
    }
  }

  delete(key) {
    if (!key) {
      return null;
    } else {
      _.remove(this._item, (item) => {
        return item[0] === key;
      });
    }
  }

  get keys() {
    return _.map(this._item, (item) => {
      return item[0];
    });
  }

}

module.exports = SequentialSearch;