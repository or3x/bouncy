
$(document).ready(function(){

	var $portfolio = $('.ba-portfolio__works');

	var $active = $('.ba-portfolio__nav');

	// $portfolio.masonry({
	//   // options
	//   itemSelector: '.ba-grid-item',
	//   columnWidth: '.ba-grid-sizer',
	//   percentPosition: true
	// });

	var $porIso = $portfolio.isotope({
  // options
  itemSelector: '.ba-grid-item',
  percentPosition: true,
  filter: '*',

  masonry: {
    // use element for option
    columnWidth: '.ba-grid-sizer'
  }
});
	// filter items on button click
$active.on( 'click', 'a', function(event) {

event.preventDefault();

 var filterValue = $(this).attr('data-filter');
 $porIso.isotope({ filter: filterValue });

 $('a').siblings().removeClass('ba-portfolio__active');
		$(this).addClass('ba-portfolio__active');
});

$('.ba-slider').slick({
  	'autoplay': true,
  	'autoplaySpeed': 2000,
  	'speed': 1000,
  	'arrows': false,
    'dots': true

  });

});



