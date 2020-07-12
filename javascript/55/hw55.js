'use strict';

const letters1 = ['a', 'b', 'c', 'd', 'e', 'f'];
const letters2 = ['a', 'b', 'c', 'D', 'e', 'f'];
console.log('letters1:', letters1);
console.log('letters2:', letters2);
//1.
console.log('Every:');

function ourEvery(theArray, test, action) {

    for (let i = 0; i < theArray.length; i++) {
        if (test, action(theArray[i])) {
            return false;
        }
    }
    return true;
}

const lowercase = ourEvery(letters2, arrayItem => arrayItem === arrayItem.toUpperCase());
console.log('letters2', lowercase);
const lowercase2 = ourEvery(letters1, arrayItem => arrayItem === arrayItem.toUpperCase());
console.log('letters1', lowercase2);


//2.
console.log('Some:');

//TODO: make the function and implement it.

const even = (element) => element === element.toUpperCase();
console.log('letters2', letters2.some(even));
console.log('letters1', letters1.some(even));

//3.                            
console.log('onlyIf:')

function onlyIf(theArray, test, action) {
    const result = [];

    for (let i = 0; i < theArray.length; i++) {
        if (test(theArray[i])) {
            result.push(theArray[i]);
        }
    }

    return result;
}
//Not finished yet
//not enough time left to finish