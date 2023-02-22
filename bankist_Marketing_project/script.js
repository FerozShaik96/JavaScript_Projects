'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//    Implementing the Smooth Scrolling
// The Old MEthod to Implementing the Scroll
const btnScorllTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
btnScorllTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  // Or you you can use bellow one also
  // const s1coords=e.target.getBoundingClientRect();
  // Scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );
  //   Better Way Of Doing Above One
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });
  //  The Modern Way of Doing Scrolling Implementation
  section1.scrollIntoView({ behavior: 'smooth' });
});
