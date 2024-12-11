var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 30,
    autoplay: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        500: {
          slidesPerView: 2,
        },
        750: {
          slidesPerView: 3,
        },
        900: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 5,
        },
      },
  });


  var swiper = new Swiper(".mySwiper-1", {
    slidesPerView: 5,
    spaceBetween: 30,
    direction: "horizontal",
    freeMode: true,
    freeModeMomentum: false,
    freeModeMomentumBounce: false,
    autoplay: {
      disableOnInteraction: true,
      //waitForTransition: false,
      reverseDirection: true,
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      500: {
        slidesPerView: 2,
      },
      750: {
        slidesPerView: 3,
      },
      900: {
        slidesPerView: 4,
      },
      1200: {
        slidesPerView: 5,
      },
    },
  });
  

  var swiper = new Swiper(".mySwiper-2", {
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      500: {
        slidesPerView: 2,
      },
      750: {
        slidesPerView: 3,
      },
      900: {
        slidesPerView: 4,
      },
      1200: {
        slidesPerView: 5,
      },
    },




  });
