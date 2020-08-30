window.pcs = window.pcs || {};
window.pcs.messageBox = (function () {
  'use strict';

  const offset = 30;
  let leftOffset = -150;
  let topOffset = -75;
  const width = 300;
  const height = 150;
  let nextZindex = 1;

  //modal and user input was removed

  function show(msg, buttonsArray = false, callback = false) {
    const messageBox = document.createElement('div');
    const span = document.createElement('span');
    span.innerHTML = msg;
    messageBox.appendChild(span);

    const buttons = document.createElement('div');
    if (!buttonsArray) {
      createDefaultOkButton();
    } else {
      buttonsArray.forEach(buttonName => createButton(buttonName));
    }
    function createButton(buttonName) {
      const newButton = document.createElement('button');
      newButton.innerHTML = buttonName;
      buttons.appendChild(newButton);
      messageBox.appendChild(buttons);

      document.body.appendChild(messageBox);

      newButton.addEventListener('click', () => {
        callTheCallback(buttonName);
        document.body.removeChild(messageBox);
      });
    }
    function createDefaultOkButton() {
      const okButton = document.createElement('button');
      okButton.innerHTML = 'ok';
      buttons.appendChild(okButton);
      messageBox.appendChild(buttons);

      document.body.appendChild(messageBox);

      okButton.addEventListener('click', () => {
        document.body.removeChild(messageBox);
      });
    }
    function callTheCallback(buttonName) {
      if (callback) {
        callback(buttonName);
      }
    }

    messageBox.addEventListener('click', () => {
      messageBox.style.zIndex = nextZindex++;
    });

    messageBox.className = 'messageBox';

    // probably should move this all to css file....
    messageBox.style.backgroundColor = 'lightblue';
    messageBox.style.padding = '1em';
    messageBox.style.paddingBottom = '38px';
    messageBox.style.boxSizing = 'border-box';
    messageBox.style.width = `${width}px`;
    messageBox.style.height = `${height}px`;
    messageBox.style.position = 'absolute';
    messageBox.style.top = '50%';
    messageBox.style.left = '50%';
    messageBox.style.marginLeft = `${leftOffset}px`;
    messageBox.style.marginTop = `${topOffset}px`;
    messageBox.style.border = '1px solid black';
    messageBox.style.zIndex = nextZindex++;

    span.style.overflow = 'auto';
    span.style.height = '100%';
    span.style.display = 'inline-block';

    buttons.style.position = 'absolute';
    buttons.style.bottom = '8px';
    buttons.style.left = 0;
    buttons.style.width = '100%';
    buttons.style.textAlign = 'center';

    leftOffset += offset;
    topOffset += offset;

    if (parseFloat(getComputedStyle(messageBox).left) + leftOffset + width > window.innerWidth) {
      leftOffset -= window.innerWidth - width;
    }

    if (parseFloat(getComputedStyle(messageBox).top) + topOffset + height > window.innerHeight) {
      topOffset -= window.innerHeight - height;
    }
  }

  return {
    show: show
  };
}());