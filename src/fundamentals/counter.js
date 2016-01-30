"use strict";

class Counter {

  constructor(name, counter) {
    if (!name) {
      this._name = '';
    } else {
      this._name = name;
    }

    if (!counter) {
      this._counter = 0;
    } else {
      this._counter = counter;
    }
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  get counter() {
    return this._counter;
  }

  set counter(value) {
    this._counter = value;
  }

  increment() {
    this._counter++;
  }

  toString() {
    return `${this._name}: ${this._counter} count`;
  }

}

module.exports = Counter;