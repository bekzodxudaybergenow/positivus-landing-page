const header = document.querySelector('.header');
const headerSidebar = document.querySelector('.header__sidebar');
const headerMenu = document.querySelector('.header__menu');
const closeBtn = document.querySelector('.header__sidebar--closebtn');
const accordionItems = document.querySelectorAll('.accordion__item');

window.addEventListener('scroll', () => {
    if(window.pageYOffset > 0) {
        header.classList.add('shadow');
    }
    else {
        header.classList.remove('shadow');
    }
})


headerMenu.addEventListener('click', () => {
    headerSidebar.classList.remove('hidden');
})
closeBtn.addEventListener('click', () => {
    headerSidebar.classList.add('hidden');
})



let swiper = new Swiper(".swiper__wrap ", {
    spaceBetween: 20,
    slidesPerView: 6,
    freeMode: true,
    breakpoints: {
        1024: {
            grabCursor: true,
            slidesPerView: 6,
            spaceBetween: 96,
        },
    },
});

let caseSwiper = new Swiper(".case__swiper ", {
    slidesPerView: 2,
    freeMode: true,
    985: {
        slidesPerView: 3,
        freeMode: true,
    },
});


accordionItems.forEach((e) => {
    e.addEventListener('click', (item) => {
        e.classList.toggle('active');
    })
}) 
