window.myApp = window.myApp || {};

window.myApp.Utils = (function (Utils) {
    'use strict';

    Utils.stringCaseInsensitiveEquals = function (string1, string2) {
        return string1.toUpperCase === string2.toUpperCase;
    };

    return Utils;

}(window.myApp.Utils || {}));

