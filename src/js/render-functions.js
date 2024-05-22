export function imagesTemplate(data) {
  return data.map(imageTemplate).join('');
}

function imageTemplate(img) {
  return `
  <div class="image-container">
    <a href="${img.largeImageURL}">
      <img src="${img.webformatURL}" alt="${img.tags}" title="" />
    </a>
    
    <div class="stats">
      <div class="stat">
        <span class="label">Likes</span>
        <span class="value">${img.likes}</span>
      </div>
      <div class="stat">
        <span class="label">Views</span>
        <span class="value">${img.views}</span>
      </div>
      <div class="stat">
        <span class="label">Comments</span>
        <span class="value">${img.comments}</span>
      </div>
      <div class="stat">
        <span class="label">Downloads</span>
        <span class="value">${img.downloads}</span>
      </div>
    </div>
  </div>`;
}
