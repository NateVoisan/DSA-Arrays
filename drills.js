'use strict';

const Array = require("./array");

function main() {
    Array.SIZE_RATIO = 3;
    let arr = new Array();
    arr.push(3);
    arr.push(5);
    arr.push(15);
    arr.push(19);
    arr.push(45);
    arr.push(10);
    arr.pop();
    arr.pop();
    arr.pop();
    console.log(arr);
}

console.log(main());

// Array { length: 6, _capacity: 12, ptr: 3 }

function urlifyString(string) {
    string = string.trim();
    let output = '';
    for (let i = 0; i < string.length; i++) {
        if (string[i] === ' ') {
            output += '%20';
        } else {
            output += string[i];
        }
    }
    return output;
}

console.log(urlifyString('  tauhida parveen'));
console.log(urlifyString('www.thinkful.com /tauh ida parv een'));

// Input: tauhida parveen Output: tauhida%20parveen
// Input: www.thinkful.com /tauh ida parv een
// Output: www.thinkful.com%20/tauh%20ida%20parv%20een

function filterArray(arr, filter = 5) {
    let output = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= filter) {
            output.push(arr[i]);
        }
    }
    return output;
}

console.log(filterArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));

// Input: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// Output: [5, 6, 7, 8, 9]
// Complexity: O(n)

function maxSum(arr) {
    let maxSum = 0;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = 0;
        sum = arr[i];
        for (let k = i + 1; k < arr.length; k++) {
            sum += arr[k];
            if (sum > maxSum) {
                maxSum = sum;
            }
        }
    }
    return maxSum;
}

const answer = maxSum([4, 6, -3, 5, -2, 1])
console.log(answer);

// answer = 12
// O(n^2)

function mergeArrays(arr1, arr2) {
    let output=[];
    let index1 = 0;
    let index2 = 0;
    let current = 0;
    while(current < (arr1.length + arr2.length)) {
        let depleted1 = (index1 >= arr1.length);
        let depleted2 = (index2 >= arr2.length);
        if (!depleted1 && (depleted2 || (arr1[index1] < arr2[index2]))) {
            output.push(arr1[index1]);
            index1++;
        } else {
            output.push(arr2[index2]);
            index2++;
        }
        current++;
    }
    return output;
}

const mergeAnswer = mergeArrays([ 1, 3, 6 ], [ 2, 4, 5 ]);
console.log(mergeAnswer);

// mergeAnswer = [ 1, 2, 3, 4, 5, 6 ]
// O(n)

function removeCharacters(string, chars) {
    let output = '';
    for (let i = 0; i < string.length; i++) {
        let contained = true;
        for (let k = 0; k < chars.length; k++) {
            if (string[i] === chars[k]) {
                contained = false;
            }
        }
        if (contained) {
            output += string[i];
        }
    }
    return output;
}

console.log(removeCharacters('Battle fo the Vowels: Hawaii vs. Groszny', 'aeiou'));

// Output: 'Bttl f th Vwls: Hw vs. Grszny'

function products(arr) {
    let output = [];
    for (let i = 0; i < arr.length; i++) {
        let product = 1;
        for (let k = 0; k < arr.length; k++) {
            if (i !== k) {
                product *= arr[k];
            }
        }
        output.push(product);
    }
    return output;
}

// Output: [ 108, 36, 12, 27 ]
// O(n^2)

function twoDeeArray(arr) {
    let output = [];
    let rowCheck = [];
    let columnCheck = [];
    for (let i = 0; i < arr.length; i++) {
        for (let k = 0; k < arr[0].length; k++) {
            if (arr[i][k] === 0) {
                rowCheck[i] = true;
                columnCheck[k] = true;
            }
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (!output[i]) {
            output[i] = [];
        }
        for (let k = 0; k < arr[0].length; k++) {
            if (rowCheck[i] || columnCheck[k]) {
                output[i][k] = 0;
            } else {
                output[i][k] = 1;
            }
        }
    }
    return output;
}

const arr1 = [[1,0,1,1,0],
  [0,1,1,1,0],
  [1,1,1,1,1],
  [1,0,1,1,1],
  [1,1,1,1,1]];

const arr2 = [[0,0,0,0,0],
  [0,0,0,0,0],
  [0,0,1,1,0],
  [0,0,0,0,0],
  [0,0,1,1,0]];

const twoDeeAnswer = twoDeeArray(arr1);
console.log(twoDeeAnswer);

// O(n^2)

function stringRotation(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    let doublestr1 = str1 + str1;
    if (doublestr1.indexOf(str2) === -1) {
        return false;
    } else {
        return true;
    }
}

// Input: amazon, azonma Output: false
// Input: amazon, azonam Output: true

const stringAnswer = stringRotation('amazon', 'azonam');
console.log(stringAnswer);

// stringAnswer = true
// O(n)