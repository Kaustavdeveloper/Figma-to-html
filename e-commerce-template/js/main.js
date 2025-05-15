(function($) {
	'use strict';
    /*==============================================================
     DROPDOWN JS
    ==============================================================*/
	if ($(".custome_select").length > 0){
		$(document).ready(function () {
			$(".custome_select").msDropdown();
		});
	}

	$(".categories_btn").on('click', function() {
		$('#navCatContent').removeClass('show');
	});

	var rclass = true;
	
	$("html").on('click', function () {
		if (rclass) {
			$('.categories_btn').addClass('collapsed');
			$('.categories_btn,.side_navbar_toggler').attr('aria-expanded', 'false');
			$('#navCatContent,#navbarSidetoggle').removeClass('show');
		}
		rclass = true;
	});
	
	$(".categories_btn,#navCatContent,#navbarSidetoggle .navbar-nav,.side_navbar_toggler").on('click', function() {
		rclass = false;
	});

	//Show Hide dropdown-menu Main navigation 
	$(document).ready(function () {
		$( '.dropdown-menu a.dropdown-toggler').on( 'click', function () {
			//var $el = $( this );
			//var $parent = $( this ).offsetParent( ".dropdown-menu" );
			if ( !$( this ).next().hasClass( 'show' ) ) {
				$( this ).parents( '.dropdown-menu' ).first().find( '.show' ).removeClass( "show" );
			}
			var $subMenu = $( this ).next( ".dropdown-menu" );
			$subMenu.toggleClass( 'show' );
			
			$( this ).parent( "li" ).toggleClass( 'show' );
	
			$( this ).parents( 'li.nav-item.dropdown.show' ).on( 'hidden.bs.dropdown', function () {
				$( '.dropdown-menu .show' ).removeClass( "show" );
			} );
			
			return false;
		});
	});

	// Banner Slider

	$(".shop_banner_slider").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 2000,
        center: false,
        dots: true,
        loop: true,
        margin: 0,
        nav : false
    });

	// Countdown Timer

	var countdownTimer = function() {
		function getTimeRemaining(endtime) {
		  const total = Date.parse(endtime) - Date.parse(new Date());
		  const seconds = Math.floor((total / 1000) % 60);
		  const minutes = Math.floor((total / 1000 / 60) % 60);
		  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
		  const days = Math.floor(total / (1000 * 60 * 60 * 24));
		  return {
			total,
			days,
			hours,
			minutes,
			seconds
		  };
		}
	
		function initializeClock(id, endtime) {
		  const clock = document.getElementById(id);
		  const daysSpan = clock.querySelector('.days');
		  const hoursSpan = clock.querySelector('.hours');
		  const minutesSpan = clock.querySelector('.minutes');
		  const secondsSpan = clock.querySelector('.seconds');
	
		  function updateClock() {
			const t = getTimeRemaining(endtime);
			daysSpan.innerHTML = t.days;
			hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
			minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
			secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
			if (t.total <= 0) {
			  clearInterval(timeinterval);
			}
		  }
		  updateClock();
		  const timeinterval = setInterval(updateClock, 1000);
		}
	
		$('#countdown-clock').each(function(){
		  const deadline = new Date(Date.parse(new Date()) + 28 * 24 * 60 * 60 * 1000);
		  initializeClock('countdown-clock', deadline);
		});

		$('#countdown-clock2').each(function(){
			const deadline = new Date(Date.parse(new Date()) + 7 * 23 * 59 * 35 * 1000);
			initializeClock('countdown-clock2', deadline);
		  });

	  }

	  countdownTimer();

	//   Product Slider


	// const mySwiper1 = new Swiper('.sale-swiper-slider', {
	// 	navigation: {
	// 		nextEl: '.slider-button-prev',
	// 		prevEl: '.slider-button-next',
	// 	  },

	// 	  breakpoints: {
	// 		0: {
	// 			slidesPerView: 1.2,
	// 			spaceBetween: 16,
	// 		},
	// 		576: {
	// 			slidesPerView: 2.2,
	// 			spaceBetween: 16,
	// 		},
	// 		992: {
	// 			slidesPerView: 3,
	// 			spaceBetween: 16,
	// 		},
	// 		1200: {
	// 			slidesPerView: 4,
	// 			spaceBetween: 16,
	// 		},
	// 	},
	// });



	$('.sale-product-slider').slick({
        infinite: true,
        speed: 300,
        autoplay: true,
		rows: 1,
      	slidesPerRow: 5,
        autoplaySpeed: 3000,
		responsive: [
			
			{
				breakpoint: 1200,
				settings: {
					rows: 1,
					slidesPerRow: 3
				}
			  },
			{
				breakpoint: 900,
				settings: {
					rows: 1,
					slidesPerRow: 2
				}
			  },

			{
				breakpoint: 550,
				settings: {
					rows: 1,
					slidesPerRow: 1
				}
			  }
			]
    });


	// Category Slider

	const mySwiper = new Swiper('.category-swiper-container', {
		navigation: {
			nextEl: '.slider-button-prev',
			prevEl: '.slider-button-next',
		  },

		breakpoints: {
			767: {
				slidesPerView: 1,
				spaceBetween: 0
			  },
			  // when window width is >= 480px
			  768: {
				slidesPerView: 3,
				spaceBetween: 30
			  },
			  // when window width is >= 640px
			  1180: {
				slidesPerView: 6,
				spaceBetween: 50
			  }

		  }
	});


	// Product Slider
	

	$('.product-slider').slick({
        infinite: true,
        speed: 300,
        autoplay: true,
		rows: 2,
      	slidesPerRow: 4,
        autoplaySpeed: 3000,
		responsive: [
			
			{
				breakpoint: 1200,
				settings: {
					rows: 3,
					slidesPerRow: 3
				}
			  },
			{
				breakpoint: 900,
				settings: {
					rows: 2,
					slidesPerRow: 2
				}
			  },

			{
				breakpoint: 550,
				settings: {
					rows: 1,
					slidesPerRow: 1
				}
			  }
			]
    });

	/*===================================*
	 PRODUCT COLOR JS
	*===================================*/
	function product_color_switch() {
		$('.product_color_switch span').each(function() {
			var get_color = $(this).attr('data-color');
			$(this).css("background-color", get_color);
		});
		
		$('.product_color_switch span,.product_size_switch span').on("click", function() {
			$(this).siblings(this).removeClass('active').end().addClass('active');
		});
	}
	$(document).ready(function () {
		product_color_switch();
	});

	 /*----------------------------------
      Quantity Plus Minus
     -----------------------------------*/
	 function qnt_incre() {
        $(".qtyBtn").on("click", function() {
            var qtyField = $(this).parent(".qtyField");
			console.log(qtyField);
			
                   var oldValue = $(qtyField).find(".qty").val();
                   var newVal = 1;

            if ($(this).is(".plus")) {
                newVal = parseInt(oldValue) + 1;
            } else if (oldValue > 1) {
                newVal = parseInt(oldValue) - 1;
            }
            $(qtyField).find(".qty").val(newVal);
        });
    }
    qnt_incre();

	// Team Carousel

	$(".team-carousel").owlCarousel({
        center: true,
        autoplay: true,
        smartSpeed: 2000,
		margin: 30,
        dots: true,
        loop: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


})(jQuery);