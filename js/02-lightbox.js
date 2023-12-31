import { galleryItems } from './gallery-items.js';

// Change code below this line
const refs = {
    gallery: document.querySelector('.gallery'),
};

function createGalleryMarkup(items) {
    return items
        .map(({ preview, original, description }) => `
            <li class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img class="gallery__image" 
                        src="${preview}" 
                        alt="${description}" 
                        data-source="${original}"/>
                </a>
            </li>
        `)
        .join("");
}

refs.gallery.innerHTML = createGalleryMarkup(galleryItems);

new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
});