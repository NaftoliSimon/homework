(function () { // this is clock module but current time is added
    'use strict';

    const clock = document.createElement('div');
    const seconds = document.createElement('span');
    const minutes = document.createElement('span');
    const hours = document.createElement('span');
    document.body.appendChild(clock);
    clock.appendChild(hours);
    clock.appendChild(minutes);
    clock.appendChild(seconds);

    let d = new Date();
    let currentHour = d.getHours();
    let currentMinutes = d.getMinutes();
    let currentSeconds = d.getSeconds();

    if (currentHour > 12) { //if army time, turns into regular time
        currentHour = currentHour - 12;
    }

    let secondsArray = currentSeconds.toString().split(''); //seperates the digits from each other, 
    let minuteArray = currentMinutes.toString().split(''); //for example: 24 becomes array of [2][4]
    let hoursArray = currentHour.toString().split('');

    if (secondsArray.length === 1) {
        secondsArray.push(0);
    }
    if (minuteArray.length === 1) {
        minuteArray.push(0);
    }
    if (hoursArray.length === 1) {
        hoursArray.unshift(0);
    }

    let s2 = secondsArray[0];
    let s1 = secondsArray[1];

    let m2 = minuteArray[0];
    let m1 = minuteArray[1];

    let h2 = hoursArray[0];
    let h1 = hoursArray[1];


    seconds.innerHTML = `${s2}${s1}`;
    minutes.innerHTML = `${m2}${m1}:`;
    hours.innerHTML = `${h2}${h1}:`;

    setInterval(increaseSeconds, 1000);
    function increaseSeconds() {
        s1++;
        if (s1 === 10) {
            s1 = 0;
            s2++;
            if (s2 === 6) {
                s2 = 0;
                increaseMinutes();
            }
        }
        seconds.innerHTML = `${s2}${s1}`;
    }
    function increaseMinutes() {
        m1++;
        if (m1 === 10) {
            m1 = 0;
            m2++;
            if (m2 === 6) {
                m2 = 0;
                increaseHours();
            }
        }
        minutes.innerHTML = `${m2}${m1}:`;
    }
    function increaseHours() {
        h1++;
        if (h2 === 1 && h1 === 3) {
            h1 = 1;
            h2 = 0;
        }
        if (h1 === 10) {
            h1 = 0;
            h2++;
        }
        hours.innerHTML = `${h2}${h1}:`;
    }

}());