export function getPhotos(query) {
  const BASE_URL = 'https://pixabay.com/api/';
  const API_KEY = '44003480-04272ce3fae5ad0292fb853b7';
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  const url = `${BASE_URL}?${params}`;

  return fetch(url).then(res => {
    if (!res.ok) throw new Error(res.status);
    return res.json();
  });
}
