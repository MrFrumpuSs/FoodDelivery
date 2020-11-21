//Аккордеон
const accordion = document.getElementsByClassName('faq__accordion-item');
for(i = 0; i<accordion.length; i++) {
    accordion[i].addEventListener('click', function(){
        this.classList.toggle('active');
    })
}

//Слайдер
$(document).ready(function(){
    $('.reviews__review-block').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        mobileFirst: true,
        prevArrow: '<button type="button" class="reviews__prev"><svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none"><path d="M14.8217 8.89739L5.31386 0.232812C5.00186 -0.0776041 4.49586 -0.0776041 4.18386 0.232812C3.87186 0.543205 3.87186 1.04685 4.18386 1.35727L13.1185 9.50001L4.18465 17.6427C3.87265 17.9531 3.87265 18.4568 4.18465 18.7672C4.49665 19.0776 5.00265 19.0776 5.31462 18.7672L14.8225 10.1026C14.9888 9.93714 15.0601 9.71776 15.049 9.5008C15.0593 9.28303 14.9881 9.06368 14.8217 8.89739Z"/></svg></button>',
        nextArrow: '<button type="button" class="reviews__next"><svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none"><path d="M14.8217 8.89739L5.31386 0.232812C5.00186 -0.0776041 4.49586 -0.0776041 4.18386 0.232812C3.87186 0.543205 3.87186 1.04685 4.18386 1.35727L13.1185 9.50001L4.18465 17.6427C3.87265 17.9531 3.87265 18.4568 4.18465 18.7672C4.49665 19.0776 5.00265 19.0776 5.31462 18.7672L14.8225 10.1026C14.9888 9.93714 15.0601 9.71776 15.049 9.5008C15.0593 9.28303 14.9881 9.06368 14.8217 8.89739Z"/></svg></button>'
    });
    window.onresize = function(event) {
        if (document.body.clientWidth <= 768) {
            $('.reviews__review-block').slick('slickSetOption', 'slidesToShow', 1);
            $('.reviews__review-block').slick('slickSetOption', 'slidesToScroll', 1);
        }
        else {
            $('.reviews__review-block').slick('slickSetOption', 'slidesToShow', 2);
            $('.reviews__review-block').slick('slickSetOption', 'slidesToScroll', 2); 
        }
    }
    if (document.body.clientWidth <= 768) {
        $('.reviews__review-block').slick('slickSetOption', 'slidesToShow', 1);
        $('.reviews__review-block').slick('slickSetOption', 'slidesToScroll', 1);
    }

});

//Маска для телефона
$(document).ready(function() {
    $("input[name=phone]").mask('+7 (999) 999 99-99');
});

//Прилипающая навигация
var options = {
    offset: 100
}
var header = new Headhesive('.navigation', options);

//Плавная прокрутка к блокам по id
$(function(){
    $('a[href^="#"]').click(function(){
    var target = $(this).attr('href');
    if(target == "#header") {
        var cont_top = window.pageYOffset ? window.pageYOffset : document.body.scrollTop;
        if (cont_top < 100) {
        }
        else {
            $('html, body').animate({scrollTop: $(target).offset().top}, 1000);
        }
    }
    else {
        $('html, body').animate({scrollTop: $(target).offset().top}, 1000);
    }
    return false;
    });
});

//AJAX
$(".submit").click(function (e) { 
    e.preventDefault();
    const parent = $(this).closest('.form');
    const inputblock = $(parent).children(".form-inputblock");
    const name = $(inputblock).children(".input-name");
    const nameerrorparent = $(name).closest(".form-inputblock");
    const nameerror = $(nameerrorparent).children(".form-error");
    const phone = $(inputblock).children(".input-phone");
    const phoneerrorparent = $(phone).closest(".form-inputblock");
    const phoneerror = $(phoneerrorparent).children(".form-error");
    if ($(this).hasClass('faq__submit')) {
        let question = 1
    }
    if (name.val() == "") {
        $(nameerror).css('display', 'block');
        setTimeout(() => $(nameerror).css('opacity', '1'), 50);
        setTimeout(() => $(nameerror).css('opacity', '0'), 5000);
        setTimeout(() => $(nameerror).css('display', 'none'), 5600);
        return false;
    }
    if (phone.val() == "") {
        $(phoneerror).css('display', 'block');
        setTimeout(() => $(phoneerror).css('opacity', '1'), 50);
        setTimeout(() => $(phoneerror).css('opacity', '0'), 5000);
        setTimeout(() => $(phoneerror).css('display', 'none'), 5600);
        return false;
    }
});
$('body').click(function () { 
    $('.form-error').css('opacity', '0');
    setTimeout(() => $('.form-error').css('display', 'none'), 600);
});