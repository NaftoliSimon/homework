window.myApp = window.myApp || {};

window.myApp.Utils = (function (Utils) {
    'use strict';

    const dayOfweek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    Utils.getDayName = function (index) {
        return dayOfweek[index - 1];
    };
    Utils.getDayNumber = function (name) {
        return dayOfweek.findIndex(elem => elem.toLowerCase() === name.toLowerCase()) + 1;
    };

    return Utils;

}(window.myApp.Utils || {}));
