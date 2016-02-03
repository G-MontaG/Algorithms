"use strict";

const _ = require('lodash');

class BinarySearchTree {

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


}

module.exports = BinarySearchTree;