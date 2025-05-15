(function() {
	"use strict";

	/**
   * Initiate glightbox
   */
	const glightbox = GLightbox({
		selector: '.glightbox'
	  });


	//   Insta Post Carousel


	$('.post-slider1').on('initialized.owl.carousel changed.owl.carousel', function(e) {
		if (!e.namespace)  {
		  return;
		}
		var carousel = e.relatedTarget;
		$('#count1').text(carousel.relative(carousel.current()) + 1 + '/' + carousel.items().length);
	  }).owlCarousel({
		items: 1,
		loop:true,
		margin:0,
		nav:false,
		dots: true
	  });

	  
	 $('.post-slider2').on('initialized.owl.carousel changed.owl.carousel', function(e) {
		if (!e.namespace)  {
		  return;
		}
		var carousel = e.relatedTarget;
		$('#count2').text(carousel.relative(carousel.current()) + 1 + '/' + carousel.items().length);
	  }).owlCarousel({
		items: 1,
		loop:true,
		margin:0,
		nav:false,
		dots: true
	  });

	  $('.post-slider3').on('initialized.owl.carousel changed.owl.carousel', function(e) {
		if (!e.namespace)  {
		  return;
		}
		var carousel = e.relatedTarget;
		$('#count3').text(carousel.relative(carousel.current()) + 1 + '/' + carousel.items().length);
	  }).owlCarousel({
		items: 1,
		loop:true,
		margin:0,
		nav:false,
		dots: true
	  });

	  $('.post-slider4').on('initialized.owl.carousel changed.owl.carousel', function(e) {
		if (!e.namespace)  {
		  return;
		}
		var carousel = e.relatedTarget;
		$('#count4').text(carousel.relative(carousel.current()) + 1 + '/' + carousel.items().length);
	  }).owlCarousel({
		items: 1,
		loop:true,
		margin:0,
		nav:false,
		dots: true
	  });
	

})();