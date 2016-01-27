"use strict";

class Accumulator {

  constructor(total, counter) {
    this._total = total || 0;
    this._counter = counter || 0;
  }

  addDataValue(value) {
    this._counter++;
    this._total = this._total + value;
  }

  mean() {
    return this._total / this._counter;
  }

  reset() {
    this._total = 0;
    this._counter = 0;
  }

  toString() {
    return `Mean (${this._counter} values): ${this.mean()}`;
  }

}

module.exports = Accumulator;