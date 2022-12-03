const more = document.querySelector('.more');
const moreText = document.querySelector('.more__text');

const button = document.querySelector('.detailed-information__button');
const contacts = document.querySelector('.contacts');

const back = document.querySelector('.logo__arrow');

more.addEventListener('click', () => {
    moreText.classList.remove('more__text');
    
});

button.addEventListener('click', () => {
    contacts.classList.remove('contacts');
    button.style.display = 'none';
});

back.addEventListener('click', () => {
    window.location.href = 'index.html';
});