var hours = 0;
var min = 0;
var sec = 0;
var msec = 0;
var hoursHeading = document.getElementById("hours");
var minHeading = document.getElementById("mins");
var secHeading = document.getElementById("secs");
var msecHeading = document.getElementById("msecs");
var interval;

function timer() {
    msec++;
    msecHeading.innerHTML = msec;
    if (msec >= 100) {
        sec++;
        secHeading.innerHTML = sec;
        msec = 0;
    } else if (sec >= 60) {
        min++;
        minHeading.innerHTML = min;
        sec = 0;
    } else if (min >= 60) {
        hours++;
        hoursHeading.innerHTML = hours;
        min = 0;
    }
}

function start() {
    interval = setInterval(timer, 10);
    document.getElementById("start-btn").setAttribute("disabled", "disabled");
}

function stop() {
    clearInterval(interval);
    document.getElementById("start-btn").removeAttribute("disabled")
}

function reset() {
    hours = 0;
    min = 0;
    sec = 0;
    msec = 0;
    hoursHeading.innerHTML = hours;
    minHeading.innerHTML = min;
    secHeading.innerHTML = sec;
    msecHeading.innerHTML = msec;
    clearInterval(interval);
    document.getElementById("start-btn").removeAttribute("disabled")
}