(function () {
    'use strict';

    const name = $('#name');
    const button = $('#button');
    const display = $('#display');

    button.click(() => display.text(name.val()));
}());