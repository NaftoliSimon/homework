(function () {
  'use strict';

  let dragging;
  let offset;
  let zindex = 0;
  const amountOfBodyparts = 24;

  for (let i = 1; i <= amountOfBodyparts; i++) {
    $(`#img${i}`).css({ top: 15, left: i * 45 });
  }

  $(document).on('mousedown', '.box', e => {
    zindex++;
    offset = { x: e.offsetX, y: e.offsetY };
    dragging = $(e.target);
    dragging.css({ zIndex: zindex });

  });

  $(document).mousemove(e => {
    if (dragging) {
      e.preventDefault();
      dragging.css({ top: e.pageY - offset.y, left: e.pageX - offset.x });
    }
  }).mouseup(() => {
    if (dragging) {
      dragging = null;
    }
  });

}());

/*
fix bug where if you drag part out of top of browser and mouse up where you cant see/click part

Save current state in local storage so that if you make a picture, close the browser, and reopen it,
your picture is restored as it was when you closed the browser.
*/