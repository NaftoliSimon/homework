'use strict';

const letters1 = ['a', 'b', 'c', 'd', 'e', 'f'];
const letters2 = ['a', 'b', 'c', 'D', 'e', 'f'];
const letters3 = ['A', 'B', 'C'];
console.log('letters1:', letters1);
console.log('letters2:', letters2);
console.log('letters3:', letters3);
//1.
console.log('ourEvery:');
console.log('Are all letters lowercase?');

function ourEvery(theArray, callback) {

    for (let i = 0; i < theArray.length; i++) { 
        //if (callback(theArray[i])) {    //testing if each arrayItem is uppercase
      if (!callback(theArray[i])) {   
            return false;               //if any item is uppercase,(test failed,) the entire array is false
        }
    }
    return true;                        //if no items are uppercase,(test passed,) the entire array is true
}

function upperCheck(arrayItem) {
    return arrayItem === arrayItem.toUpperCase();
}

const lowercase = ourEvery(letters2, upperCheck);
console.log('letters2', lowercase);
const lowercase2 = ourEvery(letters1, upperCheck);
console.log('letters1', lowercase2);
const lowercase12 = ourEvery(letters3, upperCheck);
console.log('letters1', lowercase12);

console.log('BuiltIn.every:');
//letters1.every(array, letter === letter.toUpperCase());
const lowercase8 = letters2.every(upperCheck);
console.log('letters2', lowercase8);
const lowercase9 = letters1.every(upperCheck);
console.log('letters1', lowercase9);
const lowercase10 = letters3.every(upperCheck);
console.log('letters3', lowercase10);

//2.
console.log('ourSome:');
console.log('Is any letter uppercase?');
function ourSome(theArray, callback) {

    for (let i = 0; i < theArray.length; i++) {
        if (callback(theArray[i])) {
            return true;
        }
    }
    return false;
}

const lowercase3 = ourSome(letters2, upperCheck);
console.log('letters2', lowercase3);
const lowercase4 = ourSome(letters1, upperCheck);
console.log('letters1', lowercase4);

console.log('builtIn.some:');
console.log('letters2', letters2.some(upperCheck));
console.log('letters1', letters1.some(upperCheck));

//3.                            
console.log('onlyIf:');

function onlyIf(theArray, test, action) {
    for (let i = 0; i < theArray.length; i++) {
        if (test(theArray[i])) {
            action(theArray[i]);
        }
    }
}
const lowercase5 = onlyIf(letters2, arrayItem => arrayItem === arrayItem.toUpperCase(),console.log());
console.log('letters2', lowercase5);
const lowercase6 = onlyIf(letters1, arrayItem => arrayItem === arrayItem.toUpperCase(), console.log());
console.log('letters1', lowercase6);

console.log('onlyIf with .filter and .forEach');
