"use strict";

// insert - N
// remove maximum - 1
class MaxPQ {
  constructor(queue) {
    this._pq = [];
    this._size = 0;

    if (!queue) {
      this._size = 0;
    } else {
      this._size = queue.length;
      for (let i = 0; i < this._size; i++) {
        this._pq[i + 1] = queue[i];
      }

      for (let k = Math.floor(this._size / 2); k >= 1; k--) {
        this._sink(k);
      }
    }
  }

  isEmpty() {
    return this._size === 0;
  }

  get size() {
    return this._size;
  }

  get max() {
    return this._pq[1];
  }

  insert(item) {
    this._pq[++this._size] = item;
    this._swim(this._size);
  }

  deleteMax() {
    let max = this._pq[1];
    this._exch(1, this._size--);
    this._sink(1);
    this._pq[this._size + 1] = null;
    return max;
  }

  _swim(k) {
    while (k > 1 && this._less(Math.floor(k / 2), k)) {
      this._exch(k, Math.floor(k / 2));
      k = Math.floor(k / 2);
    }
  }

  _sink(k) {
    while (2 * k <= this._size) {
      let j = 2 * k;
      if (j < this._size && this._less(j, j + 1)) {
        j++;
      }
      if (!this._less(k, j)) {
        break;
      }
      this._exch(k, j);
      k = j;
    }
  }

  _less(i, j) {
    return this._pq[i] < this._pq[j];
  }

  _exch(i, j) {
    let temp = this._pq[i];
    this._pq[i] = this._pq[j];
    this._pq[j] = temp;
  }
}

module.exports = MaxPQ;