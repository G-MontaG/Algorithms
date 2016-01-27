"use strict";

const _ = require('lodash');

class Vector {
  constructor(dimension, vector) {
    this._dimension = dimension || vector.length || 0;
    this._vector = vector || [];
  }

  get length() {
    return this._dimension;
  }

  get dimension() {
    return this._dimension;
  }

  dot(vector) {
    if(this._dimension !== vector.length) {
      return null;
    }
    let sum = 0.0;
    _.forEach(this._dimension, function (index, item) {
      sum = sum + (item * vector[index]);
    });
    return sum;
  }

  magnitude() {
    return Math.sqrt(this.dot(this._vector));
  }

  distanceTo(vector) {
    if(this._dimension !== vector.length) {
      return null;
    }
    return this.minus(this._vector).magnitude();
  }

  plus(vector) {
    if(this._dimension !== vector.length) {
      return null;
    }
    let c = new Array(this._dimension);
    _.forEach(this._dimension, function (index, item) {
      c[index] = item + vector[index];
    });
    return c;
  }



}

module.exports = Vector;