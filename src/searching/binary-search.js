"use strict";

const _ = require('lodash');

// Map is default implementation of symbol table
class BinarySearch {

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
    } else if (this.isEmpty()) {
      return null;
    } else {
      let i = this.rank(key);
      if (i < this._size && this._item[i][0] === key) {
        return this._item[i][1];
      }
      return null;
    }
  }

  rank(key) {
    let lo = 0;
    let hi = this._size - 1;
    while (lo <= hi) {
      let mid = lo + Math.floor((hi - lo) / 2);
      if (key < this._item[mid][0]) {
        hi = mid - 1;
      } else if (key > this._item[mid][0]) {
        lo = mid + 1;
      } else {
        return mid;
      }
    }
    return lo;
  }

  put(key, value) {
    if (!key || !value) {
      return null;
    } else {
      let i = this.rank(key);
      let findKey = false;
      if (i < this._size && this._item[i][0] === key) {
        this._item[i][1] = value;
        findKey = true;
      }
      if (!findKey) {
        this._item[this._size++] = [key, value];
        findKey = true;
      }
      return findKey;
    }
  }

  delete(key) {
    if (!key) {
      return null;
    } else if (this.isEmpty()) {
      return null;
    } else {
      let i = this.rank(key);
      if (i === this._size || this._item[i][0] !== key) {
        return false;
      } else {
        _.pullAt(this._item, i);
        this._size--;
        return true;
      }
    }
  }

  deleteMin() {
    if (this.isEmpty()) {
      return null;
    } else {
      _.pullAt(this._item, 0);
      this._size--;
      return true;
    }
  }

  deleteMax() {
    if (this.isEmpty()) {
      return null;
    } else {
      _.pullAt(this._item, this._size - 1);
      this._size--;
      return true;
    }
  }

  get min() {
    if (this.isEmpty()) {
      return null;
    } else {
      return this._item[0][0];
    }
  }

  get max() {
    if (this.isEmpty()) {
      return null;
    } else {
      return this._item[this._size - 1][0];
    }
  }

  get keys() {
    return _.map(this._item, (item) => {
      return item[0];
    });
  }

  select(k) {
    if (!k) {
      return null;
    } else if (this.isEmpty()) {
      return null;
    } else if (k < 0 || k >= this._size) {
      return null;
    } else {
      return this._item[k][0];
    }
  }

  floor(key) {
    if (!key) {
      return null;
    } else if (this.isEmpty()) {
      return null;
    } else {
      let i = this.rank(key);
      if (i < this._size && this._item[i][0] === key) {
        return this._item[i][0];
      }
      if (i === 0) {
        return null;
      } else {
        return this._item[i - 1][0];
      }
    }
  }

  ceiling(key) {
    if (!key) {
      return null;
    } else if (this.isEmpty()) {
      return null;
    } else {
      let i = this.rank(key);
      if (i === this._size) {
        return null;
      } else {
        return this._item[i][0];
      }
    }
  }
}

module.exports = BinarySearch;