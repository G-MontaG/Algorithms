"use strict";

const _ = require('lodash');

class SequentialSearch {

  constructor(items) {
    this._item = {
      key: '',
      value: ''
    };

    if (!items) {

    } else {
      _.forEach((item) => {
        this._item.key = item.key;
        this._item.value = item.value;
      });
    }
  }

  size() {
    return this._item
  }

}

module.exports = SequentialSearch;