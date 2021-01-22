let btnEl = document.querySelector('.btn');
let inputTimeEl = document.querySelector('.input');
let timerEl = document.querySelector('.timer');
btnEl.disabled = true;

let timerId = null;
let timeRemaining = 0;
let Start = false;

const runTimer = () => {
    btnEl.removeEventListener('click', runTimer);
    Start != Start;
    let time = moment(inputTimeEl.value, 'HH:mm');
    calcTimeDifference(time);
    timerId = setInterval(printTime, 1000);
    StartStopBtn();
};

const stopTimer = () => {
    btnEl.disabled = true;
    clearInterval(timerId);
    timerId = null;
    timeRemaining = 0;
    StartStopBtn();
}

const StartStopBtn = () => {
    btnEl.classList.toggle('play');
    btnEl.classList.toggle('stop');
};

inputTimeEl.addEventListener('input', (e) => {
    if (inputTimeEl.value != '' && !Start) {
        btnEl.disabled = false;
        btnEl.addEventListener('click', runTimer);
    } else {
        btnEl.disabled = true;
        btnEl.removeEventListener('click', runTimer);
    }
});

btnEl.addEventListener('click', () => {
    if (timerId != null) stopTimer();
});

const printTime = () => {
    timerEl.innerHTML = moment(timeRemaining).utc().format('HH:mm:ss');
    timeRemaining -= 1000;
    if (timeRemaining < 0) {
        stopTimer();
    }
}

const calcTimeDifference = (time) => {
    let currentTime = moment();
    timeRemaining = moment(time - currentTime).utc();
    if (timeRemaining < 0) timeRemaining = moment(timeRemaining).add(1, 'd');
}