"use strict";

const _ = require('lodash');

class Vector {
  constructor(vector) {
    this._dimension = vector.length || 0;
    this._vector = vector || [];
  }

  get length() {
    return this._dimension;
  }

  get dimension() {
    return this._dimension;
  }

  get vector() {
    return this._vector;
  }

  dot(vector) {
    if(this._dimension !== vector.length) {
      return null;
    }
    let sum = 0;
    _.forEach(this._vector, (item, index) => {
      sum = sum + (item * vector[index]);
    });
    return sum;
  }

  magnitude(vector) {
    let m = vector || this._vector;
    return Math.sqrt(this.dot(m));
  }

  distanceTo(vector) {
    if(this._dimension !== vector.length) {
      return null;
    }
    return this.magnitude(this.minus(vector));
  }

  plus(vector) {
    if(this._dimension !== vector.length) {
      return null;
    }
    let c = new Array(this._dimension);
    _.forEach(this._vector, (item, index) => {
      c[index] = item + vector[index];
    });
    return c;
  }

  minus(vector) {
    if(this._dimension !== vector.length) {
      return null;
    }
    let c = new Array(this._dimension);
    _.forEach(this._vector, (item, index) => {
      c[index] = item - vector[index];
    });
    return c;
  }

  cartesian(index) {
    return this._vector[index];
  }

  times(alpha) {
    let c = new Array(this._dimension);
    _.forEach(this._vector, (item, index) => {
      c[index] = alpha * item;
    });
    return c;
  }

  scale(alpha) {
    let c = new Array(this._dimension);
    _.forEach(this._vector, (item, index) => {
      c[index] = alpha * item;
    });
    return c;
  }

  direction() {
    if (this.magnitude() === 0) {
      return null;
    }
    return this.times(1 / this.magnitude());
  }

  toString() {
    let s = '';
    _.forEach(this._vector, (item) => {
      s = s + (item + ' ');
    });
    s = _.trimEnd(s);
    s = _.padStart(s, s.length + 1, '{');
    s = _.padEnd(s, s.length + 1, '}');
    return s;
  }

}

module.exports = Vector;