//1
(function () {
    'use strict';


    const numbers = [2, 3, 4, 5, 10];
    const letters = ['a', 'b', 'c'];

    function ourMap(theArray, callback) {
        const result = [];
        for (let i = 0; i < theArray.length; i++) {
            result.push(callback(theArray[i]));
        }
        return result;
    }
    function double(x) {
        return x * 2;
    }
    function evens(x) {
        if (x % 2 === 0) {
            return x;
        }
        else {
            //return false;
            return 'f';
        }
    }
    function findB(x) {
        if (x === 'b') {
            return x;
        }
        else {
            return false;
            //return 'not b';
        }
    }

    /* console.log('numbers', numbers);
     console.log('ourMap(numbers, double)', ourMap(numbers, double));
 
     console.log('numbers', numbers);
     console.log(ourMap(numbers, evens));
 
     console.log('letters', letters);
     console.log('ourMap(letters, findB)', ourMap(letters, findB)); */

    console.log(numbers);
    console.log(ourMap(numbers, double));
    console.log('');

    console.log(numbers);
    console.log(ourMap(numbers, evens));
    console.log('');

    console.log(letters);
    console.log(ourMap(letters, findB));
    console.log('');
}());
