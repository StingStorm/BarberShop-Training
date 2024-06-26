document.addEventListener('DOMContentLoaded', function () {
let modalButtons = document.querySelectorAll('.js-open-modal'),
    backdrop = document.querySelector('#backdrop'),
    closeModalButtons = document.querySelectorAll('.js-modal-close'),
    switchModalButtons = document.querySelectorAll('.js-modal-switch');

modalButtons.forEach(function(item) {

    item.addEventListener('click', function(e) {

    e.preventDefault();
        let modalId = this.getAttribute('data-modal'),
            modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');

        modalElem.classList.add('is-open');
        backdrop.classList.add('is-open');

        window.addEventListener('click', function (e) {
        if (e.target === backdrop) {
            modalElem.classList.remove('is-open');
            backdrop.classList.remove('is-open');
    }
        }); // end click
        
        closeModalButtons.forEach(function (item) {
            item.addEventListener('click', function (e) {
                modalElem.classList.remove('is-open');
                backdrop.classList.remove('is-open');
            })
        }); 
    }); // end click
}); // end foreach

switchModalButtons.forEach(function(item){
    item.addEventListener('click', function(e) {
    let parentModal = this.closest('.modal');

    parentModal.classList.remove('is-open');
    });
}); // end foreach
}); // end ready







// closeModalButtons.forEach(function(item){
//     item.addEventListener('click', function(e) {
//     let parentModal = this.closest('.modal');

//     parentModal.classList.remove('is-open');
//     backdrop.classList.remove('is-open');
//     }); // end click
// }); // end foreach

