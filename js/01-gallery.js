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
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>
    `)
    .join("");
}

refs.gallery.innerHTML = createGalleryMarkup(galleryItems);
refs.gallery.addEventListener("click", onClick);

function onClick(event) {
    event.preventDefault();

    const { target } = event;
    if (!target.classList.contains("gallery__image")) {
        return;
    }

    const largeImageUrl = target.dataset.source;
    const alt = target.alt;
    const instance = basicLightbox.create(
        `<img src="${largeImageUrl}" alt="${alt}">`,
        {
            onShow: () => document.addEventListener("keydown", onKeyPress),
            onClose: () => document.removeEventListener("keydown", onKeyPress),
        }
    );
    instance.show();

    function onKeyPress(event) {
        if (event.code === "Escape") {
            instance.close();
        }
    }
};


