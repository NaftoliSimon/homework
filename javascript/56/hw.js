
const dow = (function () {
    'use strict';

    const dayOfweek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return {
        getDayName: function (index) {
            return dayOfweek[index - 1];
        },
        getDayNumber: function (name) {
            return dayOfweek.findIndex(elem => elem.toLowerCase() === name.toLowerCase()) + 1;
        }
    };
}());

console.log('dow.getDayName (2)', dow.getDayName(2));
console.log('dow.getDayNumber ("monday")', dow.getDayNumber('monday'));
//2.
//not finished yet

const interest = (function () {
    'use strict';

    const numberOfYear = ['1999', '2000', '2001', '2002', '2003', '2004', '2005'];// ['year1', 'year2', 'year3', 'year4', 'year5', 'year6', 'year7']
    //interestRate
    //principleAmount

    return {
        //3 functions to retrun: calculateInterest, setRate, setYear
        calculateInterest: function () {
            return;
        }
        setRate: 
        }
        setYear: 
        }
    };
}());

console.log('dow.getDayName (2)', dow.getDayName(2));
console.log('dow.getDayNumber ("monday")', dow.getDayNumber('monday'));