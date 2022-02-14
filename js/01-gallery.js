import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const addMarkup = createGallery(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', addMarkup);

galleryContainer.addEventListener('click', onGalleryClick);

function createGallery (galleryItems) {
    return galleryItems.map(({ preview, original, description }) =>
        //  style="pointer-events: none;" - не подходит
        // onclick="return false;"
        `<div class="gallery__item">
            <a class="gallery__link" href="large-image.jpg">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
        </div>`
    ).join('');
    // Можно без return, но только на его месте const = addMarkup и вызов его в теле fn со строки 7!!! 
};

function onGalleryClick(e) {
    e.preventDefault();
    if (e.target.nodeName !== 'IMG') {
        return
    }
    
    const datasetValue = e.target.dataset.source
    const changeSrcInGallery = basicLightbox.create(
        `<img src="${datasetValue}" width="800" height="600">
        `)
    changeSrcInGallery.show()
        
    // console.log(datasetValue);
    // console.log(e.target.nodeName);
}

// console.log(galleryItems);

/*
*Выполняй это задание в файлах 01-gallery.html и 01-gallery.js. Разбей его на несколько подзадач:
    1 Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.
    2 Реализация делегирования на div.gallery и получение url большого изображения.
    3 Подключение скрипта и стилей библиотеки модального окна basicLightbox. Используй CDN сервис jsdelivr и добавь в проект ссылки на минифицированные (.min) файлы библиотеки.
    4 Открытие модального окна по клику на элементе галереи. Для этого ознакомься с документацией и примерами.
    5 Замена значения атрибута src элемента <img> в модальном окне перед открытием. Используй готовую разметку модального окна с изображением из примеров библиотеки basicLightbox.
*/
