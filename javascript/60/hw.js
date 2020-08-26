(function () {
    'use strict';

    const colorArray = ['red', 'yellow', 'blue'];
    let i = 0;
    let intervalId;
    const theButton = document.getElementById('theButton');

    theButton.addEventListener('click', () => {
        if (intervalId) {
            setStart();
        }
        else {
            setStop();
        }


        function setStart() {
            clearInterval(intervalId);
            intervalId = null;
            theButton.innerHTML = 'Start Color Change';
        }
        function setStop() {
            intervalId = setInterval(startChange, 1100);
            theButton.innerHTML = 'Stop Color Change';
        }
    });


    function startChange() {
        document.body.style.color = colorArray[i++];
        ColorArrayLoopRestart();
        document.body.style.backgroundColor = colorArray[i];
    }

    function ColorArrayLoopRestart() {
        if (i === colorArray.length) {
            i = 0;
        }
    }
}());