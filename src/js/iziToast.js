import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import cross from '../img/icon.svg';

export function alert() {
  iziToast.show({
    message: 'Please choose a date in the future',
    messageColor: '#fff',
    color: '#ef4040',
    position: 'topRight',
    timeout: 2000,
    close: true,
    progressBar: false,
    iconUrl: cross,
  });
}

export function success(delay) {
  iziToast.show({
    message: `✅ Fulfilled promise in ${delay}ms`,
    messageColor: '#fff',
    color: '#59a10d',
    position: 'topRight',
    timeout: 2000,
    close: true,
    progressBar: false,
  });
}

export function unsuccess(delay) {
  iziToast.show({
    message: `❌ Rejected promise in ${delay}ms`,
    messageColor: '#fff',
    color: '#f56e6e',
    position: 'topRight',
    timeout: 2000,
    close: true,
    progressBar: false,
  });
}
