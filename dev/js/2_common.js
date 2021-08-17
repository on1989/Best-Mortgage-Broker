jQuery(document).ready(function($){
	$('.burger').click(function(){
		$(this).toggleClass('close');
		$('body').toggleClass('modal-open');
	});
	var prevScrollpos = window.pageYOffset;
	window.onscroll = function () {
		var currentScrollPos = window.pageYOffset;
		if (prevScrollpos > currentScrollPos) {
			$("header").css('top', "0px");
			if($('.navigation').length){
				if($(window).width() < 992){
					$('.navigation').css('top', "110px");
				}else{
					$('.navigation').css('top', "130px");
				}
			}
		} else {
			$("header").css('top', "-32px");
			if($('.navigation').length){
				if($(window).width() < 992){
					$('.navigation').css('top', "75px");
				}else{
					$('.navigation').css('top', "90px");
				}

			}
		}
		prevScrollpos = currentScrollPos;
	}
	if($('.nav').length){
		$('.nav ul').each(function(){
			if($(this).children().length == 4){
				$(this).addClass('four-el')
			}
		});
	}
	if($('.brokers-slider').length){
		$('.brokers-slider').slick({
			dots: true,
			infinite: true,
			autoplay: true,
			slidesToShow: 3,
			slidesToScroll: 1,
		});
	}
	if($('.services .items').length){
		$('.services .items').slick({
			dots: true,
			infinite: true,
			autoplay: true,
			autoplaySpeed: 2000,
			slidesToShow: 3,
			slidesToScroll: 1,
			prevArrow:'<i class="icon-left">',
			nextArrow:'<i class="icon-right">',
			responsive: [{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
				}
			},{
				breakpoint: 480,
				settings: {
					arrows:false,
					slidesToShow: 1,
					centerMode: true,
					variableWidth: true
				}
			}]
		});
	}
	if($('.lenders').length){
		$('.lenders .items:not(.mini-logo)').slick({
			dots: true,
			infinite: true,
			autoplay: true,
			autoplaySpeed: 2000,
			slidesToShow: 5,
			slidesToScroll: 1,
			arrows:false,
			responsive: [{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
				}
			},{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
				}
			},{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					centerMode: true,
					variableWidth: true
				}
			}]
		});
		$('.lenders .items.mini-logo').slick({
			dots: true,
			infinite: true,
			autoplay: true,
			autoplaySpeed: 2000,
			slidesToShow: 6,
			slidesToScroll: 1,
			responsive: [{
				breakpoint: 1024,
				settings: {
					slidesToShow: 5,
				}
			},{
				breakpoint: 768,
				settings: {
					slidesToShow: 4,
				}
			},{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
					centerMode: true,
					variableWidth: true
				}
			}]
		});
	}
	if($('.content .lenders').length){
		$('.lenders .items.mini-logo').slick('unslick')
		$('.lenders .items.mini-logo').slick({
			dots: true,
			infinite: true,
			autoplay: true,
			autoplaySpeed: 2000,
			slidesToShow: 4,
			slidesToScroll: 1,
			responsive: [{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
				}
			},{
				breakpoint: 768,
				settings: {
					slidesToShow: 4,
				}
			},{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
				}
			}]
		});
	}
	$('.accordion h3').click(function () {
		var allMenu = $('.accordion ul'),
			currMenu = $(this).next();
		if ($(this).hasClass('open')) {
			currMenu.slideUp(300);
			$('.accordion h3').removeClass('open');
		} else {
			$('.accordion h3').removeClass('open');
			$(this).addClass('open');
			allMenu.slideUp(300);
			currMenu.slideDown(300);
		}
	});
	if($(window).width() < 768){
		if($('.sidebar .hide').length){
			$('.sidebar .hide').each(function(){
				$(this).append($(this).parent().children('.checkbox'));
				$(this).prev().click(function(){
					if($(this).next().hasClass('open')){
						$(this).next().removeClass('open').slideUp();
					}else{
						$(this).next().addClass('open').slideDown();
					}
				});
			});
		}
	}else{
		$('.sidebar a.more').click(function(e){
			e.preventDefault();
			if($(this).parent().find('.hide').hasClass('open')){
				$(this).parent().find('.hide').removeClass('open').slideUp()
			}else{
				$(this).parent().find('.hide').addClass('open').slideDown()

			}
		});
	}
	if($('#count').length){
		var waypoint = new Waypoint({
			element: document.getElementById('count'),
			handler: function () {
				// custom formatting example
				$('.count-number').data('countToOptions', {
					formatter: function (value, options) {
						return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
					}
				});

				// start all the timers
				$('.count-number').each(count);

				function count(options) {
					var $this = $(this);
					options = $.extend({}, options || {}, $this.data('countToOptions') || {});
					$this.countTo(options);
				}
			},
			offset: '75%',
		});
	}
	if($('.comment').length){
		$('.comment .rating li').click(function(){
			var ratingValue = $(this).data('value');
			$(this).parent().attr('data-rating', ratingValue);
		});
		$('.comment .rating').mouseleave(function(){
			$(this).children().removeClass('hover');
		});
		$('.comment .rating li').mousemove(function(){
			var ratingValue = $(this).data('value');
			$(this).parent().children().removeClass('hover');
			$(this).parent().children('li:nth-of-type(-n+'+ratingValue+')').addClass('hover');
		});
	}
	$('.reviews .item').click(function(){
		$(this).find('.hide').slideToggle();
	});
	if($('div.more,  p.more').length){
		var ellipsestext = "...",
			moretext = "More",
			lesstext = "Show less";
		$('.more').each(function() {
			var showChar = $(this).data('hide');
			var content = $(this).children().html();
			if(content.length > +showChar) {
				var c = content.substr(0, showChar);
				var h = content.substr(showChar, content.length - showChar);
				var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';
				$(this).children().html(html);
			}
		});

	}
	$(".morelink").click(function(){
		if($(this).hasClass("less")) {
			$(this).removeClass("less");
			$(this).html(moretext);
		} else {
			$(this).addClass("less");
			$(this).html(lesstext);
		}
		$(this).parent().prev().toggle();
		$(this).prev().toggle();
		return false;
	});
	if($('.news .col-lg-12 > .post').length){
		var firstPosts = $('.news .col-lg-12 > .post')
		for (var i = 0; i < firstPosts.length; i += 2) {
			if (i < 1) {
				firstPosts.slice(i, i + 1).wrapAll('<div class="left-block"></div>');
			}else if(i < 4){
				firstPosts.slice(1, i + 1).wrapAll('<div class="right-block"></div>');
			}
		}
		var contentsPosts = $('.content .post')
		for (var i = 0; i < firstPosts.length; i += 2) {
			if (i < 1) {
				contentsPosts.slice(i, i + 1).wrapAll('<div class="left-block"></div>');
			}else if(i < 4){
				contentsPosts.slice(1, i + 3).wrapAll('<div class="right-block"></div>');
			}
		}

	}
	$('body').on('click', '.accardion li', function() {
		var allMenu = $('.accardion .hide'),
			currMenu = $(this).find('.hide');

		if ( $(this).hasClass('open') ) {
			currMenu.slideUp(300);
			currMenu.prev().removeClass('icon-minus').addClass('icon-plus')
			$('.accardion li').removeClass('open');
		} else {
			$('.accardion li').removeClass('open');
			$('.accardion li h4').removeClass('icon-minus').addClass('icon-plus');
			$(this).addClass('open');
			allMenu.slideUp(300);
			currMenu.slideDown(300);
			currMenu.prev().removeClass('icon-plus').addClass('icon-minus')

		}
	});
	if($('.navigation:not(.pagination)').length){
		var section = $('.section'),
			nav = $('.navigation:not(.pagination)'),
			navHeight = nav.outerHeight(),
			headerHeight = $('header').height();

		window.addEventListener('orientationchange', function () {
			navHeight = nav.outerHeight();
		}, false);

		var navigation = $('.navigation:not(.pagination)').offset().top;
		$(window).on('scroll', function () {
			if($('.navigation:not(.pagination)').length){
				if($(window).scrollTop() > navigation - headerHeight){
					$('.navigation:not(.pagination)').addClass('fixed');
				}else{
					$('.navigation:not(.pagination)').removeClass('fixed');
				}
			}
			var position = $(this).scrollTop();

			section.each(function () {
				var top = $(this).offset().top - navHeight - headerHeight,
					bottom = top + $(this).outerHeight();

				if (position >= top && position <= bottom) {
					nav.find('a').parent().removeClass('active');
					section.removeClass('active');

					$(this).addClass('active');
					nav.find('a[href="#' + $(this).attr('id') + '"]').parent().addClass('active');
				}
			});
		});

		nav.find('a').on('click', function () {
			var id = $(this).attr('href');

			$('html, body').animate({
				scrollTop: $(id).offset().top - navHeight - headerHeight
			}, 500);

			return false;
		});
	}
	if($('.four-el').length){
		$('.four-el').slick({
			arrows:false,
			autoplay: true,
			autoplaySpeed: 2000,
			focusOnSelect: true,
			dots:true,
			responsive: [{
				breakpoint: 10000,
				settings: "unslick",

			},{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					dots: true,
					infinite: true,
				}
			},{
				breakpoint: 580,
				settings: {
					slidesToShow: 2,
				}
			},{
				breakpoint: 480,
				settings: {
					centerMode: true,
					variableWidth: true
				}
			}]
		});
	}
	if($('.news').length){
		$('.news .items').slick({
			arrows:false,
			autoplay: true,
			autoplaySpeed: 2000,
			focusOnSelect: true,
			dots:true,
			responsive: [{
				breakpoint: 10000,
				settings: "unslick",
			},{
				breakpoint: 580,
				settings: {
					centerMode: true,
					variableWidth: true
				}
			}]
		});
	}
	if($('.sidebar.left, .profile').length === 0){

		if($('.broker').length){
			if ($(window).width() < 768) {
				if($('.brokers-list').length === 0){
					$('.broker').wrapAll('<div class="brokers-list"></div>');
				}
			}else{
				$('.brokers .brokers-list').unwrap();
			}
			if($(window).width() < 580){
				$('.brokers .table .tr:first').remove();
				$('.brokers .table').slick({
					arrows:false,
					autoplay: true,
					autoplaySpeed: 2000,
					focusOnSelect: true,
					dots:true,
					responsive: [{
						breakpoint: 10000,
						settings: "unslick",
					},{
						breakpoint: 580,
						settings: {
							dots: true,
							infinite: true,
						}
					}]
				});
			}
			$('.brokers-list').slick({
				arrows:false,
				autoplay: false,
				autoplaySpeed: 2000,
				focusOnSelect: true,
				dots:true,
				responsive: [{
					breakpoint: 10000,
					settings: "unslick",
				},{
					breakpoint: 768,
					settings: {
						dots: true,
						infinite: true,
					}
				},{
					breakpoint: 480,
					settings: {
						centerMode: true,
						variableWidth: true
					}
				}]
			});
		}
	}
	if($('.tabs').length){
		if($(window).width() < 580){
			$('.tabs').slick({
				prevArrow:'<i class="icon-left">',
				nextArrow:'<i class="icon-right">',
				infinite: false,
				centerMode:true,
				responsive: [{
					breakpoint: 10000,
					settings: "unslick",
				},{
					breakpoint: 580,
					settings: {

						slidesToShow: 3,
						slidesToScroll: 1,

					}
				},{
					breakpoint: 480,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
						infinite: false,
					}
				},{
					breakpoint: 380,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						infinite: false,
					}
				}]
			});
			$('.tabs').on('afterChange', function(event, slick, currentSlide, nextSlide){
				$(this).find('.slick-slide').removeClass('active');
				$(this).find('.slick-center').addClass('active');
				var activeTabs = $(this).find('.slick-center').children().attr('href');
				$('.tab-pane').removeClass('active');
				$(activeTabs).addClass('active');
			});
		}
	}
	$(window).on('resize', function () {
		if ($(window).width() < 768) {
			if($('.sidebar.left').length === 0){
				if($('.broker').length){
					if($('.brokers-list').length === 0){
						$('.broker').wrapAll('<div class="brokers-list"></div>');
					}
				}
			}
		}else{
			if($('.broker').length){
				$('.brokers .brokers-list').unwrap();
			}
		}
	});
	if($('ul.grid').length){
		$('ul.grid li').each(function(){
			if($(this).hasClass('active')){
				var thisDataGrid = $(this).data('grid');
				$('.items').addClass(thisDataGrid +'-el')
			}
		});
		$('ul.grid li a').click(function(e){
			e.preventDefault();
			if($(this).parent().hasClass('active') == 0){
				$('ul.grid li').removeClass('active');
				$(this).parent().addClass('active');
				var thisDataGrid = $(this).parent().data('grid');
				$(this).parents('.brokers').find('.items').attr('class', 'items ' +thisDataGrid +'-el')

			}
		});
	}
	if($(window).width() < 768){
		var select = $('.cities .nav .active').text(),
			selectData = $('.cities .nav').data('title');
		$('.cities .nav').wrap('<div class="select" data-title="'+selectData+'"></div>');
		$('.select').prepend('<p class="select-text">'+select+ '</p>');
		$('.select .select-text').click(function(){
			$(this).next().slideToggle();
		});
		$('.nav-tabs a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
			var select = $(this).text();
			console.log(select)
			$(this).parents('.select').find('.select-text').html(select);
			$(this).parents('.nav-tabs').slideToggle();
		});
	}
});
