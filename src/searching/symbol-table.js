"use strict";

const _ = require('lodash');

// Map is default implementation of symbol table
class SymbolTable {

  constructor(items) {
    this._st = new Map();

    _.forEach(items, (item) => {
      if (_.isArray(item)) {
        this._st.set(item[0], item[1]);
      } else if (_.isObject(item)) {
        this._st.set(item.key, item.value);
      }
    });
  }

  get(key) {
    if(!key) {
      return null;
    } else {
      return this._st.get(key);
    }
  }

  put(key, value) {
    if(!key) {
      return null;
    } else {
      return this._st.set(key, value);
    }
  }

  delete(key) {
    if(!key) {
      return null;
    } else {
      return this._st.delete(key);
    }
  }

  contain(key) {
    if(!key) {
      return null;
    } else {
      return this._st.has(key);
    }
  }

  get size() {
    return this._st.size;
  }

  isEmpty() {
    return this._st.size === 0;
  }

  get keys() {
    let keys = [];
    this._st.forEach((value, key) => {
      keys.push(key);
    });
    return keys;
  }

}

module.exports = SymbolTable;