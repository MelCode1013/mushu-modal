'use strict';

const buttons = document.querySelectorAll('button')
const closebtns = document.querySelectorAll('.close-modal')
const overlay = document.querySelector('.overlay')

buttons.forEach(button => {

    button.addEventListener('click', function () {
        const modalID = button.getAttribute('data-modal-target')
        const modal = document.querySelector(modalID)
        if (modal) {
            overlay.classList.add('active')
            modal.classList.add('active')
        }
    })
})

closebtns.forEach(closebtn => {
    closebtn.addEventListener('click', () => {
        const modal = closebtn.closest('.modal')
        overlay.classList.remove('active')
        modal.classList.remove('active')
    })
})