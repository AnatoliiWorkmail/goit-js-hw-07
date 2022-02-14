import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const selectGallery = document.querySelector('.gallery');

// // 
function createGalleryMarkup(ga) {
    const markup = ga.map(({ preview, original, description }) => {
        return  `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
    }).join('');

  
 return markup   
}

selectGallery.insertAdjacentHTML("beforeend", createGalleryMarkup(galleryItems));

// ----------------------------------
var lightbox = new SimpleLightbox('.gallery a', {
    captions: true, captionsData:'alt', captionPosition: 'bottom', captionDelay: 500
});