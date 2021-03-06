(function () {
  'use strict';

  function get(id) {
    return document.getElementById(id);
  }

  function setCss(element, property, value) {
    element.style[property] = value;
  }

  const contacts = [];
  const contactForm = get('contactForm');
  const firstInput = get('first');
  const lastInput = get('last');
  const emailInput = get('email');
  const phoneInput = get('phone');

  
  get('add').addEventListener('click', () => {
    setCss(contactForm, 'display', 'block');
  });

  function hideAddContactForm() {
    contactForm.reset();
    setCss(contactForm, 'display', 'none');
  }

  contactForm.addEventListener('submit', e => {
    e.preventDefault();

    const contactsTable = get('contacts');

    const newContact = {
      first: firstInput.value,
      last: lastInput.value,
      email: emailInput.value,
      phone: phoneInput.value

    };

    contacts.push(newContact);

    const newRow = contactsTable.insertRow();
    const firstCell = newRow.insertCell();
    const lastCell = newRow.insertCell();
    const emailCell = newRow.insertCell();
    const phoneCell = newRow.insertCell();
    const delete1 = document.createElement('button');
    document.body.appendChild(delete1);

    firstCell.innerHTML = newContact.first;
    lastCell.innerHTML = newContact.last;
    emailCell.innerHTML = newContact.email;
    phoneCell.innerHTML = newContact.phone;
    delete1.innerHTML = 'delete';

    if (contacts.length === 1) {
      contactsTable.deleteRow(newContact.rowIndex);
    }

    //deleteContact();

    hideAddContactForm();

    function deleteContact() {
      //TODO: delete row (and delete button)
      //delete1.addEventListener('click', hideDeleteButton);
    }
    function hideDeleteButton() {
      delete1.reset();
      setCss(delete1, 'display', 'none');
    }
  });

  get('cancel').addEventListener('click', hideAddContactForm);
}());

/* TODO: put delete button on each row, instead of bottom of body. 
  Make each button delete SPACIFICALLY that row.
  (Delete contact object as well?)
*/