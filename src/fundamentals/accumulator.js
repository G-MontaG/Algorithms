"use strict";

class Accumulator {

  constructor(total, counter) {
    if (!total) {
      this._total = 0;
      this._counter = 0;
    } else {
      this._total = total;
      this._counter = counter;
    }
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