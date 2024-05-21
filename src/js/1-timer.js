import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { alert } from './iziToast.js';

let selectedDateMs;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] - Date.now() < 0) {
      startBtn.disabled = true;
      return alert();
    }
    selectedDateMs = selectedDates[0];
    startBtn.disabled = false;
  },
};

flatpickr('#datetime-picker', options);
document.addEventListener('DOMContentLoaded', () => (startBtn.disabled = true));
const inputPicker = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');
const daysSpan = document.querySelector('[data-days]');
const hoursSpan = document.querySelector('[data-hours]');
const minutesSpan = document.querySelector('[data-minutes]');
const secondsSpan = document.querySelector('[data-seconds]');

startBtn.addEventListener('click', () => {
  start();
  startBtn.disabled = true;
  inputPicker.disabled = true;
});

function start() {
  tick(selectedDateMs - Date.now());
  const intervalId = setInterval(() => {
    const diff = selectedDateMs - Date.now();
    tick(diff);
    if (diff <= 1000) {
      clearInterval(intervalId);
      inputPicker.disabled = false;
    }
  }, 1000);
}

function tick(ms) {
  const convertDate = convertMs(ms);
  daysSpan.textContent = convertDate.days;
  hoursSpan.textContent = convertDate.hours;
  minutesSpan.textContent = convertDate.minutes;
  secondsSpan.textContent = convertDate.seconds;
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  return {
    days: addLeadingZero(Math.floor(ms / day)),
    hours: addLeadingZero(Math.floor((ms % day) / hour)),
    minutes: addLeadingZero(Math.floor(((ms % day) % hour) / minute)),
    seconds: addLeadingZero(
      Math.floor((((ms % day) % hour) % minute) / second)
    ),
  };
}

function addLeadingZero(value) {
  return `${value}`.padStart(2, '0');
}
