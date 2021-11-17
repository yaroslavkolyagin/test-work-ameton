$('.carousel-list').slick({
	infinite: false,
	speed: 300,
	slidesToShow: 4,
	slidesToScroll: 1,
	prevArrow: '<div class="slick-arrow-base slick-arrow-base__prev"><svg><use href="img/sprite.svg#arrow"></use></svg></div>',
	nextArrow: '<div class="slick-arrow-base slick-arrow-base__next"><svg><use href="img/sprite.svg#arrow"></use></svg></div>',
	responsive: [
		{
			breakpoint: 1400,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				dots: true,
				prevArrow: false,
				nextArrow: false,
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				dots: true,
				prevArrow: false,
				nextArrow: false,
			}
		}
	]
});

$(function() {

	//BEGIN
	$(".accordion__title").on("click", function(e) {

		e.preventDefault();
		var $this = $(this);

		if (!$this.hasClass("accordion-active")) {
			$(".accordion__content").slideUp(400);
			$(".accordion__title").removeClass("accordion-active");
			$('.accordion__arrow').removeClass('accordion__rotate');
		}

		$this.toggleClass("accordion-active");
		$this.next().slideToggle();
		$('.accordion__arrow',this).toggleClass('accordion__rotate');
	});
	//END

});
