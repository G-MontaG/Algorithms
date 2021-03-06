"use strict";

const _ = require('lodash');

// Array is default implementation of stack in js
class Queue {

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

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this._items.shift();
  }

  enqueue(item) {
    if (this.isEmpty()) {
      return null;
    }
    return this._items.push(item);
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    return this._items.pop();
  }

  clear() {
    this._counter = 0;
    this._items = [];
  }

  get items() {
    return this._items;
  }

}

module.exports = Queue;