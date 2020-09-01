window.pcs = function (id) {
  'use strict';

  function get(id) {
    return document.getElementById(id);
  }

  function setCss(element, property, value) {
    element.style[property] = value;
  }

  function getCss(element, property) {
    //return element.style[property];
    return getComputedStyle(element)[property];
  }

  const theElem = get(id);
  const colorArray = ['red', 'yellow', 'blue'];
  let i = 0;
  function startChange() {
    setCss(theElem, 'color', colorArray[i++]);
    ColorArrayLoopRestart();
  }

  function ColorArrayLoopRestart() {
    if (i === colorArray.length) {
      i = 0;
    }
  }


  return {
    /*setCss: (property, value) => setCss(theElem, property, value),
    getCss: property => getCss(theElem, property),*/
    css: function (property, value) {
      if (arguments.length < 2) { // get
        return getCss(theElem, property);
      }
      setCss(theElem, property, value);
      return this;
    },
    click: function (callback) {
      theElem.addEventListener('click', callback);
      return this;
    },
    hide: function () {
      setCss(theElem, 'display', 'none');
      return this;
    },
    show: function () {
      setCss(theElem, 'display', 'block');
      return this;
    },
    colorChange: function (intervalTime) {
      setInterval(startChange, intervalTime);
      return this;
    }
  };
};