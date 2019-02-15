'use strict';

const List = require('./list-constructor.js');

let stuff = new List();
stuff.push('a');
stuff.push('b');
let last = stuff.pop();
let removeFirst = stuff.shift();
// let addFirst = stuff.unshift();
console.log('i am push', stuff);
console.log('i am pop', last);
console.log('i am shift', removeFirst);