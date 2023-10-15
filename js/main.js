const header = document.querySelector('.header');
const nav = document.querySelector('.nav');
const sidebar = document.querySelectorAll('.sidebar');
const headerMenu = document.querySelector('.header__menu');
const headerMenuImg = document.querySelector('.header__menu--img');

window.addEventListener('scroll', () => {
    if(window.pageYOffset > 0) {
        header.classList.add('shadow');
    }
    else {
        header.classList.remove('shadow');
    }
})

headerMenu.addEventListener('click', () => {
    nav.classList.toggle('sidebar');
})
