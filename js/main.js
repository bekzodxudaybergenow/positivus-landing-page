const header = document.querySelector('.header');
const nav = document.querySelector('.nav');
const headerMenuOpen = document.querySelector('.header__menu--open');

window.addEventListener('scroll', () => {
    if(window.pageYOffset > 0) {
        header.classList.add('shadow');
    }
    else {
        header.classList.remove('shadow');
    }
})

headerMenuOpen.addEventListener('click', () => {
    nav.classList.add('sidebar');
})