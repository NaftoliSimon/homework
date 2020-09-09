(function () {
  'use strict';

  const fileInput = $('#fileInput');
  const loadButton = $('#loadButton');
  const fileDisplay = $('#fileDisplay');
  loadButton.click(loadFile);

  function loadFile() {
    loadingMessage();
    fetch(fileInput.val())
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then(file => fileDisplay.text(file))
      .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
        pcs.messageBox.show('Error - There has been a problem with your fetch operation', error);
      });
  }
  function loadingMessage() {
    //TODO: create loading message (similar to messageBox?)
    //show only while loading is happening 
  }
}());
