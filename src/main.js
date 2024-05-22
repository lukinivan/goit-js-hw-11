import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { imagesTemplate } from './js/render-functions.js';
import { getPhotos } from './js/pixabay-api.js';
import { noImageMsg, responseError } from './js/iziToast.js';

const lightBox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

const requestForm = document.querySelector('.js-request-form');
const galleryCont = document.querySelector('.js-gallery');
const imageLoader = document.querySelector('.js-loader');

requestForm.addEventListener('submit', e => {
  e.preventDefault();

  const query = e.currentTarget.elements.query.value.trim();
  galleryCont.innerHTML = '';
  imageLoader.classList.add('loader');

  getPhotos(query)
    .then(data => {
      data.total === 0
        ? noImageMsg()
        : (galleryCont.innerHTML = imagesTemplate(data.hits));

      lightBox.refresh();
      imageLoader.classList.remove('loader');
    })
    .catch(error => {
      responseError(error.message);
      imageLoader.classList.remove('loader');
    });

  e.currentTarget.reset();
});
