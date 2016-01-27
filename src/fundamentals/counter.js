"use strict";

class Counter {

  constructor(name, counter) {
    this._name = name || '';
    this._counter = counter || 0;
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