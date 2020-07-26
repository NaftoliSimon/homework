//2a.
//Didn't have enough time to finish "keep global data to a minimum, and keep private data, private" , but I did make it work before without using private data/non globals.
window.app = window.app || {};
window.app.theCounter = (function (theCounter) {
    'use strict';

    const counter1 = {
        counter: 0,
        increment: function () {
            this.counter = this.counter + 1;
            //return this.counter;
        },
        getCount: function () {
            //console.log(this.counter);
            return console.log(this.counter);
        }
    };

    theCounter.increment = counter1.increment;
    theCounter.getCount = counter1.getCount;
    return theCounter;
}(window.app.theCounter || {}));

window.app.theCounter.increment();
window.app.theCounter.getCount();
