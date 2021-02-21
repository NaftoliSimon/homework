/* global pcs*/
(function () {     //see LINE 81 for change
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
            <td>${newContact.firstName}</td> 
            <td>${newContact.lastName}</td>
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
      firstName: firstInput.val(),
      lastName: lastInput.val(),
      email: emailInput.val(),
      phone: phoneInput.val()
    };
    
     // Example POST method implementation:
async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    //credentials: 'same-origin',
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}
postData('http://localhost:3000/api/contacts', newContact)
  .then(data => {
    console.log(data); // JSON data parsed by `data.json()` call
  });

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
      //let r = await fetch('contacts.json'); //next line replaces this line for 
      let r = await fetch('http://localhost:3000/api/contacts');//      <---------------------------------
      let contacts = await r.json();
      contacts.forEach(addContact); //contact => addContact(contact));
      console.log('original contacts:', contacts);
    } catch (err) {
      pcs.messageBox(err);
    }
  });

}());
