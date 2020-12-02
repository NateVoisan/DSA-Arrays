'use strict';
const Array = require('./array');

let arr = new Array();

arr.push(3);

// Array { length: 1, _capacity: 3, ptr: 0 }

arr.push(5);
arr.push(15);
arr.push(19);
arr.push(45);
arr.push(10);

// Array { length: 6, _capacity: 12, ptr: 3 }

arr.pop();
arr.pop();
arr.pop();

// Array { length: 3, _capacity: 12, ptr: 3 }

arr = new Array();
arr.push('tauhida');
console.log(arr.get(0));

// Returning NaN
// Memory array can only return strings, not float values, so it returns NaN

// Purpose of resize()
// Have enoughs space to hold the array when modified
// Must copy it to new space in memory that has enough room for it