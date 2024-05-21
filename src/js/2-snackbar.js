import { success, unsuccess } from './iziToast.js';

const formEl = document.querySelector('.form');

formEl.addEventListener('submit', e => {
  e.preventDefault();
  const delay = Number(e.target.elements.delay.value);
  const state = e.target.elements.state.value;

  promiseAlert(delay, state)
    .then(res => success(res))
    .catch(err => unsuccess(err));

  e.target.elements.delay.value = '';
});

const promiseAlert = (delay, state) => {
  console.log(state);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') resolve(delay);
      if (state === 'rejected') reject(delay);
    }, delay);
  });
};
