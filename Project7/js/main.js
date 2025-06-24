(function() {
	"use strict";

	var product_swiper = new Swiper(".product_carousel", {
      slidesPerView: 3,
      spaceBetween: 30,
      speed: 500,
      navigation: {
        nextEl: ".product_carousel_next",
        prevEl: ".product_carousel_prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        991: {
          slidesPerView: 3,
        }
      }
    });


	 var testimonialSwiper = new Swiper(".testimonial_swiper", {
      effect: "fade",
      navigation: {
        nextEl: ".testimonial_slider_button_next",
        prevEl: ".testimonial_slider_button_prev",
      },
    });


})();