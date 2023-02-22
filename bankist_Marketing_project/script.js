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

//  1. Implementing the Smooth Scrolling
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

// 2. Page Navigation WithOut Using The Event Delegation

/*document.querySelectorAll('.nav__link').forEach(function (el) {
  el.addEventListener('click', function (e) {
    e.preventDefault();
    const id = this.getAttribute('href');
    // With this the This keyWord will select the each Element and with this GetAttribute('href')
    // the Link will convert selector and now was use that selector to select the elements
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  });
});*/

// Page Navigation  Using The Event Delegation
/* Steps to do That 
1. Add Event Listener to Common Parent Element
2.Determine what element originated the Event*/

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  // Matching Strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// Tabbed Component
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabscontent = document.querySelectorAll('.operations__content');

//   Applying Event Propagation to select the buttons
tabsContainer.addEventListener('click', function (e) {
  //   This will Select teh nearest Parent Element With the Operations__tab
  const clicked = e.target.closest('.operations__tab');
  // if the user Click outside the button and inside the container to avoid the error.
  if (!clicked) return;
  // before Adding the operations__tab--active we need to remove them and then add them
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabscontent.forEach(c => c.classList.remove('operations__content--active'));
  //     Activate Tab

  clicked.classList.add('operations__tab--active');

  // Activating Content Area

  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});
