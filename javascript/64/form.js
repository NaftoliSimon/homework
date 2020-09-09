(function () {
    'use strict';
    const name = $('#name');
    const email = $('#email');
    const form = $('#form');
    const checkbox = $('#checkbox');
    const data = $('#data');

    form.submit(function (event) {
        event.preventDefault();
        if (checkbox.is(":checked")) {
            data.append(`<p> Name: ${name.val()} <br> Email: ${email.val()} </p>`);
        } else {
            alert('Form disabled. Please check the checkbox to enable form submission');
        }
    });
}());