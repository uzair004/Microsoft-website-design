const hamburgerIcon = document.querySelector('.hamburger-icon');
const menu = document.querySelector('.left-menu');

hamburgerIcon.addEventListener('click', () => {
    menu.classList.toggle('hamburger-menu');
});