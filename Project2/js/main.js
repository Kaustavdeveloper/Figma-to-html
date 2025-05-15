(function() {
	"use strict";

	  /**
   * Animation on scroll function and init
   */
	  function aosInit() {
		AOS.init({
		  duration: 600,
		  easing: 'ease-in-out',
		  once: true,
		  mirror: false
		});
	  }
	  window.addEventListener('load', aosInit);

	/**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });


//   Countdown timer


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
  }

  countdownTimer();


   // Testimonials carousel
   $(".testimonial-carousel").owlCarousel({
	autoplay: true,
	smartSpeed: 1000,
	margin: 10,
	center: true,
	dots: false,
	loop: true,
	nav : false,
	responsive: {
		0:{
			items:1
		},
		768:{
			items:2
		}
	}
});


$(".post-carousel").owlCarousel({
	autoplay: true,
	smartSpeed: 1000,
	margin: 20,
	dots: false,
	loop: true,
	nav : true,
	navText : [
		'<i class="fa-solid fa-chevron-left"></i>',
		'<i class="fa-solid fa-chevron-right"></i>'
	],
	responsive: {
		0:{
			items:1
		},
		768:{
			items:2
		},
		992:{
			items:3
		},
		1200:{
			items:5
		}
	}
});


})();