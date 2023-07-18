$(document).ready(function () {
    $('.slider').owlCarousel({
        items: 1,
        loop: true,//show the first item again after the last item
        margin: 1, //margin between to carousel items
        nav: false,
        autoplay:true,  //auto scroll
        autoplayTimeout:4000, // auto scroll time
        stagePadding:0, //portions of items from left and right
        dots:false,
        animateOut: 'fadeOut',
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    $('.products').owlCarousel({
        items: 7,
        loop: true,//show the first item again after the last item
        margin: 30, //margin between to carousel items
        nav: true,
        autoplay:true,  //auto scroll
        autoplayTimeout:2000, // auto scroll time
        stagePadding:80, //portions of items from left and right
        dots:true, 
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });
});

var swiper = new Swiper(".slide-content", {
    // slidesPerView: 5,
    spaceBetween: 25,
    loop: true,
    centerSlide:'true',
    fade:'true',
    grabCursor:'true',
    speed:1000,
    depth:200,
      modifier:4,
      rotate:100,
      scale:4,
      slideShadow:true,
      effect:'overflow',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets:'true',
      speed:1000,
      
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0:{
            slidesPerView:1,
        },
        520:{
            slidesPerView:2,
        },
        850:{
            slidesPerView:3,
        },
        1150:{
            slidesPerView:4,
        },
    },
    autoplay: {
        delay: 2000,
      },
    // effect: 'coverflow',
    // grabCursor: true,
    // centeredSlides: true,
    // slidesPerView: 'auto',
    // coverflowEffect: {
    //     rotate: 0,
    //     stretch: 80,
    //     depth: 200,
    //     modifier: 1,
    //     slideShadows: false,
    // },
      
  });

  

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    grabCursor: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 4000,
      },
  });
  