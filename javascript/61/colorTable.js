(function () {
    'use strict';

    const colorArray = ['red', 'yellow', 'blue'];
    let i = 0;
    let intervalId;
    const theButton = get('theButton');
    function get(id) {
        return document.getElementById(id);
    }

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
            intervalId = setInterval(startChange, 1500);
            theButton.innerHTML = 'Stop Color Change';
        }
    });


    function startChange() {
        addToTable();
        document.body.style.color = colorArray[i++];
        ColorArrayLoopRestart();
        document.body.style.backgroundColor = colorArray[i];
    }

    function ColorArrayLoopRestart() {
        if (i === colorArray.length) {
            i = 0;
        }
    }

    const colorTableArray = []; //Don't confuse this with colorArray ['red', 'yellow', 'blue']

    function addToTable() {
        const colorTable = get('colorTable');

        if (!colorTableArray.length) {
            colorTable.deleteRow(1);
        }

        const newColor = {
            color: colorArray[i],
            bgcolor: colorArray[i + 1],
            time: new Date()
        };
        if (newColor.bgcolor === undefined) { // because color array is a loop, every time i = 2, bgcolor is undefined, therefore all undefined bgcolor become red, since red is slot 0
            newColor.bgcolor = 'red';
        }
        colorTableArray.push(newColor);

        const newRow = colorTable.insertRow();
        const colorCell = newRow.insertCell();
        const bgcolorCell = newRow.insertCell();
        const timeCell = newRow.insertCell();

        // If user clicks on a row in the table, colors set to the colors captured in that row
        newRow.addEventListener('click', () => {
            document.body.style.color = newColor.color;
            document.body.style.backgroundColor = newColor.bgcolor;
        });

        colorCell.innerHTML = newColor.color;
        bgcolorCell.innerHTML = newColor.bgcolor;
        timeCell.innerHTML = newColor.time;
    }
}());