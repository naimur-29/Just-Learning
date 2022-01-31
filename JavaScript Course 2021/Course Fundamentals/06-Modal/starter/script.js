'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnShowModals = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');

const showModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnShowModals.length; i++) {
  btnShowModals[i].addEventListener('click', showModal);
}
// modal.style.backgroundColor = 'green';
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (events) {
  //   console.log(events.key);
  if (events.key === 'Escape') {
    if (!modal.classList.contains('hidden')) {
      closeModal();
    }
  }
});
