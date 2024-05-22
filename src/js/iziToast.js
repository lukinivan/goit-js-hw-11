import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import icon from '../img/blocked.svg';

export function noImageMsg() {
  iziToast.show({
    message:
      'Sorry, there are no images matching your search query. Please try again!',
    messageColor: 'black',
    color: 'red',
    position: 'topRight',
    timeout: 3000,
    close: true,
    progressBar: true,
    iconUrl: icon,
  });
}

export function responseError(errorMessage) {
  iziToast.error({
    title: 'Error',
    position: 'topRight',
    message: errorMessage,
  });
}
