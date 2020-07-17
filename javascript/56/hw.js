
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

const interestCalculator = (function () {
    'use strict';

    let interestRate;
    let years;

    return {
        //3 functions to retrun: calculateInterest, setRate, setYear
        
        setRate: newInterestRate => interestRate = newInterestRate,
        
        setYear: newYears => years = newYears,

        calculateInterest: function (principle) {
            let n = principle;
            for(let i = 0; i > years; i++) {
                n += n * interestRate;
            }
            return n - principle;
        }
    };
}());

console.log('rate', interestCalculator.setRate(0.07));
console.log('years', interestCalculator.setYear(4));
console.log('interestCalculator.calculateInterest',interestCalculator.calculateInterest);