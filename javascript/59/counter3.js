//2c.
//Didn't have enough time to finish "keep global data to a minimum, and keep private data, private" , but I did make it work before without using private data/non globals.
(function () {
    'use strict';

    function incrementCounterTimes(amount, counter) {
        for (let i = 0; i < amount; i++) {
            counter.increment();
        }
    }
    incrementCounterTimes(10, counter1);

    const counter4 = createCounter();
    const counter5 = createCounter();

    incrementCounterTimes(5, counter4);
    incrementCounterTimes(15, counter5);

    counter1.getCount();
    counter2.getCount();
    counter3.getCount();
    counter4.getCount();
    counter5.getCount();

}());
