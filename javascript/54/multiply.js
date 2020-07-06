'use strict'; // jshint ignore:line
//1.
function multiply(x, y) {
    return x * y;
}
console.log(multiply(3, 3), multiply(3, 2), multiply(1, 8), multiply(3, 4), multiply(30, 20), multiply(31, 2));
//2.
function getMultiplier() {
    return function (a, b) {
        console.log(a * b);
    };
}
let multiplyer = getMultiplier();
multiplyer(3, 3);
multiplyer(3, 2);
multiplyer(1, 8);
multiplyer(3, 4);
multiplyer(30, 20);
multiplyer(31, 2);
//3.
function getMultiplier2(c) {
    return function (d) {
        console.log(c * d);
    };
}
let multiplyByThree = getMultiplier2(3);
console.log(multiplyByThree(2));

let multiplyByTwo = getMultiplier2(2);
console.log(multiplyByTwo(4));

let multiplyByTwelve = getMultiplier2(12);
console.log(multiplyByTwelve(6));

