
// Fix-Navigation-------------


var stickyOffset = $('.navigation').offset().top;

$(window).scroll(function(){
  var sticky = $('.navigation'),
      scroll = $(window).scrollTop();

  if (scroll >= stickyOffset) sticky.addClass('nav_fix');
  else sticky.removeClass('nav_fix');
});


const icon = document.querySelector('.search_btn');
const searchBox = document.querySelector('.search_box');



icon.addEventListener('click', (e) => {
    e.preventDefault();
    searchBox.classList.toggle('active');
    const btn = document.getElementById('btn')
    btn.style.color = '#000'
})



var slider = document.getElementById('glide');
var memberSlider = document.getElementById('glide_2');

if (slider) {
    new Glide(slider, {
        type: 'carousel',
        startAt: '0',
        autoplay: '3000',
        hoverpause: 'true',
        perView: '1',
        animationDuration: '800',
        AnimationTimingFunc: 'Linear'

    }).mount();
};


if (memberSlider) {
    new Glide(memberSlider, {
        type: 'carousel',
        startAt: '0',
        hoverpause: 'true',
        perView: '7',
        gap: 20,
        animationDuration: '800',
        AnimationTimingFunc: 'cubic-bezier(.165. .840, .44, .1)',
        breakpoints: {
            1200: {
                perView: 6,
            },
            768: {
                perView: 5,
            },
            540: {
                perView: 3,
            },
        }

    }).mount();
};