(function() {
	"use strict";


  /**
   * Mobile nav toggle
   */

  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    mobileNavToggleBtn.classList.toggle('fa-bars');
    mobileNavToggleBtn.classList.toggle('fa-xmark');
  }
  mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

   /**
   * Initiate Pure Counter
   */
  new PureCounter();

  // Skiilbar js 

   var manageSkillBars = function(){
			if(jQuery('.skillbar').length > 0)
			{
				$('.skillbar').appear();
				$('.skillbar').skillBars({
					from: 0,
					speed: 4000,
					interval: 100,
					decimals: 0
				});
				jQuery(document.body).on('appear', '.skillbar', function () {
					if (!$(this).hasClass('appear')) {
						$(this).addClass('appear');
						$(this).find('.skillbar-bar').css("width", "0%");
						$(this).skillBars({
							from: 0,
							speed: 4000,
							interval: 100,
							decimals: 0
						});
					}
				});
			}
			
		}
		
        manageSkillBars();


		 // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
		items:2,
        margin: 25,
        loop: true,
        dots: true,
        nav: true,
        navText : [
            '<i class="fa-solid fa-chevron-left"></i>',
            '<i class="fa-solid fa-chevron-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:1
            },
            992:{
                items:2
            },
        }
    });


})();