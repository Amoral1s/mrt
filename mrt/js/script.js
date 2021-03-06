jQuery(document).ready(function ($) {
	


	/* $(window).scroll(function() { 
		if ($(window).scrollTop() > 520) {
			$('.up-arr').fadeIn(100);
		} else {
			$('.up-arr').fadeOut(100);
		}
	 }); */
	


	$('.overlay').on('click', function() {
		$('.popup').fadeOut(300);
		$(this).fadeOut(300);
	});
	$('.close').on('click', function() {
		$('.popup').fadeOut(300);
		$('.overlay').fadeOut(300);
	});
	$('.call-sign').on('click', function() {
		$('.popup-singup').fadeIn(300);
	});
	$('.call-sign-single').on('click', function() {
		$('.popup-singup-price').fadeIn(300);
	});
	$('.call-callback').on('click', function() {
		$('.popup-callback').fadeIn(300);
	});
	$('.call-feed').on('click', function() {
		$('.popup-feedback').fadeIn(300);
	});
	$('.news-moar').on('click', function() {
		$('.news-wrap-item').fadeIn(200);
		$(this).fadeOut(200);
	});
	$('.ready-mrt').on('click', function() {
		$('.trigger-mrt').fadeIn(300);

	});
	$('.ready-no').on('click', function() {
		$('.trigger-no').fadeIn(300);
	});

	$(window).scroll(function() { 
		if ($(window).scrollTop() > 20) {
			$('.up-arr').fadeIn(100);
		} else {
			$('.up-arr').fadeOut(100);
		}
	 });


	 $('.photos-wrap').slick({
		dots: false,
		arrows: false,
		infinite: false,
		speed: 300,
		slidesToShow: 2,
		slidesToScroll: 1,
		adaptiveHeight: true,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 1
				}
			},
			{
				breakpoint: 578,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});
	 $('.device-wrap').slick({
		dots: false,
		arrows: false,
		infinite: false,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight: true,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 1
				}
			},
			{
				breakpoint: 578,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});
	 $('.rent-wrap').slick({
		dots: false,
		arrows: false,
		infinite: false,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 1,
		adaptiveHeight: true,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});
	 $('.feed-wrap').slick({
		dots: false,
		arrows: false,
		infinite: false,
		speed: 300,
		slidesToShow: 2,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1
				}
			}/* ,
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}  */
		]
	});

/* 	const photosWrapImg = document.querySelectorAll('.photos-wrap img');

	if (photosWrapImg.length > 0) {
		const newGall = document.createElement('div');
		newGall.classList.add('photos-gall');
		const jsGall = document.querySelector('.js-gall');
		
		
		photosWrapImg.forEach((e, i) => {
			let newA = document.createElement('a');
			newA.href = e.src;
			let newImg = document.createElement('img');
			newImg.src = e.src;
			newA.appendChild(newImg)
			newGall.appendChild(newA);
			jsGall.innerHTML = newGall.innerHTML;
			
			e.addEventListener('click', () => {
				let jsClick = document.querySelectorAll('.js-gall a');
				jsClick[i].click();
				console.log('click')
			});
		});
		
	} */
	$('.docs-wrap-item-right').magnificPopup({
		delegate: 'a',
		type: 'image',
		gallery: {
				enabled: false,
		}
	});

	const callFeed = document.querySelectorAll('.call-feed-popup');

	if (callFeed.length > 0) {
		const feedPopup = document.querySelector('.popup-feed-wrap');
		callFeed.forEach((e) => {
			e.addEventListener('click', () => {
				$('.popup-feed').fadeIn(300);
				$('.overlay').fadeIn(300);
				feedPopup.innerHTML = e.parentElement.innerHTML;
			});
		})
	}
	
	if (window.screen.width <= 992) {
		$('.header-close').on('click', function() {
			$('.header').slideUp(200);
		});
		$('.burger').on('click', function() {
			$('.header').slideDown(200);
		});
	}

	$('.q-wrap-left-item-title').on('click', function() {
		if ($(this).parent().hasClass('q-active')) {
			$('.q-wrap-left-item-title').parent().removeClass('q-active');
			$('.q-wrap-left-item-title').next().slideUp(200);
		} else {
			$('.q-wrap-left-item-title').parent().removeClass('q-active');
			$('.q-wrap-left-item-title').next().slideUp(200);
			$(this).parent().addClass('q-active');
			$(this).next().slideDown(200);
		}
		
	});

	$('.single-serv-wrap-table-title').on('click', function() {
		$(this).next().slideToggle(200);
		$(this).toggleClass('single-serv-wrap-table-title-active')
	})

}); //end