import ServiceAPI from './js/getImages';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

//mobile menu

(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');

  const toggleMenu = () => {
    const isMenuOpen =
    openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();

//modal

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  }

// ----
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');

  const toggleMenu = () => {
    const isMenuOpen =
    openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');
  }

  const mobileMenuBtn = document.getElementById('M2')
  mobileMenuBtn.addEventListener('click', function(){
    toggleMenu()
    toggleModal()
  })
 // ----
  
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

///// input

const showInputBtn = document.getElementById('showInput');
const inputSearch = document.getElementById('inputSearch');


showInputBtn.addEventListener('click', function () {
  inputSearch.classList.toggle('input-search');
  inputSearch.classList.toggle('input');

})
  
const showInputBtnMobile = document.getElementById('showInputMobile');
const inputSearchMobile = document.getElementById('inputSearchMobile');


showInputBtnMobile.addEventListener('click', function () {
  inputSearchMobile.classList.toggle('input-search');
  inputSearchMobile.classList.toggle('input');
})


// API

// const searchForm = document.querySelector('.search-form');
// const searchButton = document.querySelector('[type=submit]');
// const gallery = document.querySelector('.gallery');
// const loadService = new ServiceAPI();

// const options = {
//   simpleLightBox: {
//     captions: true,
//     captionsData: 'alt',
//     captionDelay: 250,
//   },
//   intersectionObserver: {
//     root: null,
//     threshold: 1,
//   },
// };

// const callback = function (entries, observer) {
//   if (entries[0].isIntersecting) {
//     observer.unobserve(entries[0].target);
//     loadImages();
//   }
// };

// const observer = new IntersectionObserver(callback, options.intersectionObserver);
// let galleryLightBox = new SimpleLightbox('.gallery a', options.simpleLightBox);

// searchForm.addEventListener('submit', onFormSubmit);

// function onFormSubmit(evt) {
//     evt.preventDefault();

//   const searchImage = evt.currentTarget.elements.searchQuery.value;
  
//     if (searchImage) {
//     searchButton.disabled = true;
//     loadService.searchQuery = searchImage;
//     loadService.resetPage();
//     gallery.innerHTML = '';
//     loadImages();
//   }
// }

// function loadImages() {
//   loadService
//     .getPictures()
//     .then(showResultOfSearchingImages)
//     .catch(onFetchError);
// }

// function showResultOfSearchingImages(data) {
//   searchButton.disabled = false;
//   if (data.data.totalHits === 0) {
//     Notify.failure('Sorry, there are no images matching your search query. Please try again.');
//     return;
//   }
//   if (data.data.totalHits !== 0 && data.data.hits.length === 0) {
//     Notify.warning(`We're sorry, but you've reached the end of search results.`);
//     return;
//   }

//   gallery.insertAdjacentHTML('beforeend', renderImages(data.data.hits));

//   galleryLightBox.refresh();

//   if (loadService.pageNumber === 2) {
//     Notify.info(`Hooray! We found ${data.data.totalHits} images.`);
//   } else {
//     const { height: cardHeight } = gallery.firstElementChild.getBoundingClientRect();
//     window.scrollBy({
//       top: cardHeight * 2 + 120,
//       behavior: 'smooth',
//     });
//   }
//   observer.observe(gallery.lastElementChild);
// }

// function renderImages(images) {
//   return images.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
//       return `
//   <div class="photo-card">
//   <a class="gallery-item" href="${largeImageURL}">
//     <img src="${webformatURL}" alt="${tags}" loading="lazy" />
//     </a>
//     <div class="info">
//       <p class="info-item">
//         <b>Likes: <span class='gallery-text'>${likes}</span></b>
//       </p>
//       <p class="info-item">
//         <b>Views: <span class='gallery-text'>${views}</span></b>
//       </p>
//       <p class="info-item">
//         <b>Comments: <span class='gallery-text'>${comments}</span></b>
//       </p>
//       <p class="info-item">
//         <b>Downloads: <span class='gallery-text'>${downloads}</span></b>
//       </p>
//     </div>
//   </div>`;
//     })
//     .join('');
// }

// function onFetchError(error) {
//     Notify.failure('Something went wrong, please try again.');
// };



//new

// (() => {
//   const refs = {
//     openModalBtn: document.querySelector('[data-modal-open]'),
//     closeModalBtn: document.querySelector('[data-modal-close]'),
//     modal: document.querySelector('[data-modal]'),
//   }
//   console.log("hello")

//   const mobileMenuBtn = document.getElementById('M2')
//   console.log(mobileMenuBtn)
    
//   refs.openModalBtn.addEventListener('click', toggleModal);
//   refs.closeModalBtn.addEventListener('click', toggleModal);

//   function toggleModal() {
//     refs.modal.classList.toggle('is-hidden');
//   }
// })();









