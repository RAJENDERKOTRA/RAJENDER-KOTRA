



let milliSeconds = 0, seconds = 0, minuts = 0, hours = 0;
let timeShow = document.getElementById("time show");
let timeRef;


// document.getElementById('start').onclick = function () {
//     timeRef = setInterval(upDateTime, 10)
// }

let start = document.getElementById("start")
start.addEventListener("click", change)
function change() {
    timeRef = setInterval(upDateTime, 15);
}


function upDateTime() {
    milliSeconds = milliSeconds + 10;
    if (milliSeconds == 1000) {
        seconds = seconds + 1;
        milliSeconds = 0;
        if (seconds == 60) {
            minuts = minuts + 1;
            seconds = 0;
            if (minuts == 60) {
                hours = hours + 1;
                minuts = 0;

            }
        }
    }

    let h, m, s, ms;
    if (hours < 10) {
        h = '0' + hours;
    } else {
        h = hours;
    }
    if (minuts < 10) {
        m = '0' + minuts;
    } else {
        m = minuts;
    }
    if (seconds < 10) {
        s = '0' + seconds;
    } else {
        s = seconds;
    }
    if (milliSeconds < 10) {
        ms = '0' + milliSeconds;
    } else if (milliSeconds < 100) {
        ms = '00' + milliSeconds;
    } else {
        ms = milliSeconds;
    }
    timeShow.innerHTML = `${h} : ${m} :  ${s} : ${ms}`
}

document.getElementById("pause").onclick = function () {
    clearInterval(timeRef);
}


document.getElementById("reset").onclick = function () {
    clearInterval(timeRef);
    milliSeconds = 0;
    seconds = 0;
    minuts = 0;
    hours = 0;
    timeShow.innerHTML = "00 : 00 : 00 : 000"
}