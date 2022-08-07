'use strict';
const btnsOpenModel = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const btnCloseModel = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

for (const btn of btnsOpenModel) {
    btn.addEventListener(
        'click',
        function () {
            modal.classList.remove('hidden');
            overlay.classList.remove('hidden');
        }
    );
}

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

btnCloseModel.addEventListener('click', closeModal)
overlay.addEventListener('click', closeModal)

document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
})