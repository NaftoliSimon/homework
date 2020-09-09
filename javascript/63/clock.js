(function () { //this is part 1 of the clock question where html code is pre written
    'use strict';

//if wanted make hour not have 0 appear in the tens spot when there is no 1
    let seconds = document.getElementById('seconds');
    let minutes = document.getElementById('minutes');
    let hours = document.getElementById('hours');

    let s1 = 0;
    let s2 = 0;

    let m1 = 0;
    let m2 = 0;

    let h1 = 2;
    let h2 = 1;

    seconds.innerHTML = `${s2}${s1}`;
    minutes.innerHTML = `${m2}${m1}`;
    hours.innerHTML = `${h2}${h1}`;

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
        minutes.innerHTML = `${m2}${m1}`;
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
        hours.innerHTML = `${h2}${h1}`;
    }

}());