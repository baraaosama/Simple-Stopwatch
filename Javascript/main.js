
window.onload = function () {
    let seconds = 00;
    let tens = 00;
    let mins = 00;
    const start = document.querySelector(".start");
    const stop = document.querySelector(".stop");
    const reset = document.querySelector(".reset");
    const appendTens = document.querySelector(".tens");
    const appendSecs = document.querySelector(".secs");
    const appendMins = document.querySelector(".mins");
    let interval;
    start.onclick = function () {
        clearInterval(interval);
        interval = setInterval(startTimer, 10);
    }
    stop.onclick = function () {
        clearInterval(interval);
    }
    reset.onclick = function () {
        clearInterval(interval);
        tens = "00";
        seconds = "00";
        mins = "00";
        appendTens.innerHTML = tens;
        appendSecs.innerHTML = seconds;
        appendMins.innerHTML = mins;
    }
    function startTimer() {
        tens++;
        if (tens <= 9) {
            appendTens.innerHTML = "0" + tens;
        }
        if (tens > 9) {
            appendTens.innerHTML = tens
        }
        if (tens > 99) {
            seconds++;
            appendSecs.innerHTML = "0" + seconds;
            tens = 0;
            appendTens.innerHTML = "0" + tens;
        }
        if (seconds > 9) {
            appendSecs.innerHTML = seconds
        }
        if (seconds > 59) {
            mins++;
            appendMins.innerHTML = "0" + mins;
            seconds = 0;
            appendSecs.innerHTML = "0" + seconds;
        }
    }

}


