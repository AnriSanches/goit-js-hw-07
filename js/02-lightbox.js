import { galleryItems } from './gallery-items.js';
// import SimpleLightbox from "simplelightbox";
// Change code below this line

// console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');



function createGallery () {
    const addMarkup = galleryItems.map(({ preview, original, description }) => `
    <li>
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
    </li>`).join('');
    
    galleryContainer.insertAdjacentHTML('beforeend', addMarkup);
};
createGallery();

let lightbox = new SimpleLightbox('a', {
    captions: true,
    // captionType: 'attr',
    captionsData: 'alt',
    captionDelay: 250,
    captionPosition: 'bottom',
    loop: true,
    scrollZoom: true,
    scrollZoomFactor: 0.001,
});
// var lightbox = new SimpleLightbox('.gallery a', { /* options */ });
