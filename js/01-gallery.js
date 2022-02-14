import { galleryItems } from './gallery-items.js';
// Change code below this line

const selectGallery = document.querySelector('.gallery');

// // 
function createGalleryMarkup(ga) {
    const markup = ga.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
        <a class="gallery__link" href="${preview}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
`
    }).join('');

  
 return markup   
}

selectGallery.insertAdjacentHTML("beforeend",createGalleryMarkup(galleryItems));








