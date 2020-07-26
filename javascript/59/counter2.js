//2b.
//Didn't have enough time to finish "keep global data to a minimum, and keep private data, private" , but I did make it work before without using private data/non globals.
window.app = window.app || {};
window.app.theModule = (function (theModule) {
    'use strict';

    let counters = 0;
    function createCounter() {
        counters = counters + 1;
        return {
            counter: 0,
            increment: function () {
                this.counter = this.counter + 1;
                //return this;
            },
            getCount: function () {
                console.log(this.counter);
                //return this;
            },
            getCounters: function () {
                console.log(counters);
            }
        };
    }
    theModule.increment = createCounter.increment;
    theModule.getCount = createCounter.getCount;
    return theModule;
}(window.app.theModule || {}));

const counter2 = window.app.theModule.createCounter();
const counter3 = window.app.theModule.createCounter();

window.app.theModule.increment(counter3);
window.app.theModule.getCount(counter3);

//window.app.theModule.counter3.increment();

counter2.getCounters(); //should show 4 in the console<--------- <---------- <----------
console.log('');



