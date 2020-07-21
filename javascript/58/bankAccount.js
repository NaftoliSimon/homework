(function () {
    'use strict';

    const account1 = {

        balance: 500,
        performTransaction: function (transaction) {
            this.balance = this.balance + transaction;
            return this.balance;
        }
    };

    const account2 = {

        balance: 1000,
        performTransaction: function (transaction) {
            this.balance = this.balance + transaction;
            return this.balance;
        }
    };

    console.log('old balance:', account1.balance, 'new balance:', account1.performTransaction(500));
    console.log('old balance:', account2.balance, 'new balance:', account2.performTransaction(-500));
    /////////////////////////////////////
    //2.
    const account3 = {

        balance: 100,
        performTransaction: function (transaction) {

            this.balance = this.balance + transaction;
            return this.balance;
        }
    };
    const account4 = {

        balance: 150,
    };
    function transaction(transaction) {
        this.balance = this.balance + transaction;
        return this.balance;
    }
    console.log('old balance:', account3.balance, 'new balance:', transaction.call(account3, 50));
    console.log('old balance:', account4.balance, 'new balance:', transaction.apply(account4, [-100]));
}());