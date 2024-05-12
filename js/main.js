const swiper = new Swiper('.swiper', {
    // Parameters
    direction: 'horizontal',
    loop: true,
    grabCursor: true,
    autoplay: {
        delay: 2500,
    },

    //pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.slider-buttons-forward',
        prevEl: '.slider-buttons-back',
    },
    });
