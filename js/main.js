$.i18n().load( {
    en: 'i18n/languages/en.json', // Messages for English
    ru: 'i18n/languages/ru.json', // Messages for English
    uz: 'i18n/languages/uz.json' // Messages for English
}).done(() => {
    $('.change-locale').on('change', function(){
        set_locale_to($(this).val());
    });
});

function set_locale_to(locale){  
    $.i18n().locale = locale;
    if(locale){
        $('body').i18n();
    }
}

new WOW().init();


const swiper = new Swiper('.heading-slider', {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});

const services = new Swiper('.services-slider', {
    // Optional parameters

    // If we need pagination
    pagination: {
        el: '.services-pagination',
    },
    slidesPerView: 3,
    spaceBetween: 20,

    breakpoints:{
        1120:{
            slidesPerView:3
        },
        600:{
          slidesPerView:2
        },
        320 : {
            slidesPerView:1
        }
    },

    // Navigation arrows
    navigation: {
        nextEl: '.services-button-next',
        prevEl: '.services-button-prev',
    },

});


const quote = new Swiper('.quote-slider', {
    spaceBetween: 10,
    slidesPerView: 2,
    centeredSlides: true,
    roundLengths: true,
    loop: true,
    loopAdditionalSlides: 30,
});

let $root = $('html, body');
$('a[href^="#"]').click(function () {
    let href = $.attr(this, 'href');
    $root.animate({
        scrollTop: $(href).offset().top
    }, 200, function () {
        window.location.hash = href;
    });
    return false;
});


//Get the button
let mybutton = document.getElementById("to-top-btn");

// When the user scrolls down 20px from the top of the document, show the button
scrollFunction();

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 800 ||
        document.documentElement.scrollTop > 800
    ) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}