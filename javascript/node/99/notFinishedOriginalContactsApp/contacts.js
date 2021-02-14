/* global pcs*/
(function () {
  'use strict';

  let contacts = [];
  const contactForm = $('#contactForm');
  const firstInput = $('#first');
  const lastInput = $('#last');
  const emailInput = $('#email');
  const phoneInput = $('#phone');

  $('#add').click(() => {
    //contactForm.show();
    contactForm.slideDown('fast');
  });

  function hideAddContactForm() {
    contactForm[0].reset();
    //contactForm.hide();
    contactForm.slideUp('slow');
  }

  function addContact(newContact) {
    const contactsTable = $('#contacts tbody');

    if (!contacts.length) {
      $(':nth-child(1)', contactsTable).remove();
    }

    contacts.push(newContact);

    const theNewRow = $(`<tr>
            <td>${newContact.first}</td>
            <td>${newContact.last}</td>
            <td>${newContact.email}</td>
            <td>${newContact.phone}</td>
            <td><button>delete</button></td>
       </tr>`)
      .appendTo(contactsTable);

    theNewRow.find('button').click(() => {
      contacts = contacts.filter(c => c !== newContact);
      theNewRow.remove();

      if (!contacts.length) {
        contactsTable.append('<tr><td colspan="5">no contacts loaded</td></tr>');
      }
    });
  }

  contactForm.submit(e => {
    e.preventDefault();

    const newContact = {
      first: firstInput.val(),
      last: lastInput.val(),
      email: emailInput.val(),
      phone: phoneInput.val()
    };

    addContact(newContact);

    hideAddContactForm();
  });

  $('#cancel').click(hideAddContactForm);

  /*$('#load').click(() => {
    fetch('contacts.json')
      .then(r => r.json())
      .then(contacts => {
        // console.log(typeof (contacts), contacts);
        contacts.forEach(addContact); //contact => addContact(contact));
      })
      .catch(err => pcs.messageBox(err));
  });*/

  $('#load').click(async () => {
    try {
      //let r = await fetch('contacts.json');
      let r = await fetch('http://localhost:3000/api/contacts'); //NOT FINISHED YET
      let contacts = await r.json();
      contacts.forEach(addContact); //contact => addContact(contact));
      console.log('original contacts:', contacts);
    } catch (err) {
      pcs.messageBox(err);
    }
  });

}());
//NOT FINISHED YET