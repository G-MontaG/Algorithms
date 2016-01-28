"use strict";

const _ = require('lodash');

class Queue {

  constructor(items) {
    this._counter = items.length || 0;
    this._items = items || [];
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