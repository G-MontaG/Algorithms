"use strict";

const MaxPQ = require('./src/sorting/max-pq');
let maxPQ = new MaxPQ([5, 2, 3]);

maxPQ.insert(3);
maxPQ.insert(1);
maxPQ.insert(2);

console.log(maxPQ.max);