"use strict";

const MaxPQ = require('./src/sorting/max-pq');
let maxPQ = new MaxPQ([1, 2, 3]);

maxPQ.insert(7);
maxPQ.insert(1);
maxPQ.insert(2);

console.log(maxPQ.max);

maxPQ.deleteMax();

console.log(maxPQ.max);