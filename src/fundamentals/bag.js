"use strict";

const _ = require('lodash');

// Set is default implementation of bag in ES6
class Bag {

  constructor(items) {
    if (!items) {
      this._counter = 0;
      this._items = [];
    } else {
      this._counter = items.length;
      this._items = _.clone(items);
    }
  }

  isEmpty() {
    return this._counter === 0;
  }

  get size() {
    return this._counter;
  }

  add(items) {
    _.forEach(items, (item) => {
      this._items[this._counter++] = item;
    });
  }

  clear() {
    this._counter = 0;
    this._items = [];
  }

  get items() {
    return this._items;
  }

}

module.exports = Bag;