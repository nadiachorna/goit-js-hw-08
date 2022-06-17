// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

const gallery = document.querySelector('.gallery');

const galleryItem = onCreateGalleryItem(galleryItems);

gallery.insertAdjacentHTML('beforeend', galleryItem);

gallery.addEventListener('click', onGalleryItemClick);

function onCreateGalleryItem(items) {
    return items.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
        </a>
      </div>`
    }).join("");
}

function onGalleryItemClick(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return;
    }
    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`)
    instance.show(document.addEventListener('keydown', (e) => {
        if (e.code === "Escape") {
            instance.close()
        }
    }))
}

console.log(galleryItems);
