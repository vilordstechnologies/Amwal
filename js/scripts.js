var amwal = amwal || {},
	amwalShortCode = amwalShortCode || {};
(function ($) {
	'use strict';

	$(function () {

		var $body = $('body'),
			$header = $('#masthead'),
			$mobileNav = $('#primary-mobile-nav');

		/**
		 * Hide cart or nav when click to off canvas layer
		 */
		$('#off-canvas-layer').on('click', function (e) {
			e.preventDefault();

			$body.removeClass('display-mobile-menu');
		});

		/**
		 * Off canvas cart toggle
		 */
		$body.on('click', '.navbar-toggle .am-navbar-icon', function (e) {
			e.preventDefault();
			$(this).toggleClass('selected-mobile');
			$body.toggleClass('display-mobile-menu');
		});


		// Menu Mobile
		menuMobile();

		function menuMobile() {

			$mobileNav.find('.menu .menu-item-has-children').prepend('<span class="toggle-children "><i class="fa fa-angle-right" aria-hidden="true"></i></span>');
			$mobileNav.find('.menu .menu-item-has-children').each(function () {
				var title = $(this).children('a').html();
				$(this).children('ul').prepend('<li class="menu-parent-items">' + title + '</li>');
				$(this).children('ul').prepend('<li class="menu-back">' + amwal.amwal_back + '</li>');
			});
			$mobileNav.find('.menu .menu-item-has-children').on('click', '.toggle-children', function (e) {
				e.preventDefault();
				$(this).parent('li').addClass('over-menu');
				$(this).parents('.menu').addClass('over-submenu');
			});
			$mobileNav.find('.menu .menu-item-has-children').on('click', '.menu-back', function (e) {
				e.preventDefault();
				$(this).closest('ul').closest('li').removeClass('over-menu');
				if (!$mobileNav.find('.menu .menu-item-has-children').hasClass('over-menu')) {
					$mobileNav.find('.menu').removeClass('over-submenu');
				}
			});

			$mobileNav.on('click', '.close-canvas-mobile-panel', function (e) {
				e.preventDefault();
				$body.toggleClass('display-mobile-menu');
			});
		}


		amwalWoo();
		quickView();

		/**
		 * Woocommerce
		 */

		function amwalWoo() {
			// Product qty change
			$('body').on('click', '.quantity .increase, .quantity .decrease', function (e) {
				e.preventDefault();
				var $this = $(this),
					$qty = $this.siblings('.qty'),
					current = parseInt($qty.val(), 10),
					min = parseInt($qty.attr('min'), 10),
					max = parseInt($qty.attr('max'), 10);

				min = min ? min : 1;
				max = max ? max : current + 1;

				if ($this.hasClass('decrease') && current > min) {
					$qty.val(current - 1);
					$qty.trigger('change');
				}
				if ($this.hasClass('increase') && current < max) {
					$qty.val(current + 1);
					$qty.trigger('change');
				}
			});
		}

		$('.job-body').on('click', '.job-info', function () {
			var $faq = $(this).closest('.job-body');

			$faq.find('.job-desc').slideToggle(500, function () {
				$faq.toggleClass('active');
			});
		});

		// Show quick view of product

		function quickView() {
			/**
			 * Product quick view popup
			 */
			var $modal = $('#modal'),
				$modalBody = $modal.find('.modal-body');

			// Open product single modal
			$('.woocommerce').on('click', '.product-quick-view', function (e) {
				e.preventDefault();

				$modal.fadeIn().addClass('in');
				$modalBody.html('<div class="ajax-loading"><i class="fa fa-spin fa-spinner"></i></div>');
				$('body').addClass('modal-open');
				$.get($(this).attr('data-href'), function (response) {
					if (!response) {
						return;
					}

					var $content = $(response).find('.product-details');

					$modalBody.html($content);

					var modalHeight = $modal.find('.modal-content').height(),
						winHeight = $(window).height(),
						topModal = ( winHeight - modalHeight) / 2;

					if (topModal < 0) {
						topModal = 0;
					}

					$modal.find('.modal-content').css({'margin-top': topModal});

				});
			});

			// Close portfolio modal
			$modal.on('click', 'button.close', function (e) {
				e.preventDefault();

				$modal.fadeOut(500, function () {
					$('body').removeClass('modal-open');
					$modal.removeClass('in');

					// Trigger resize event on $window to make isotope mansory works correctly
					$(window).trigger('resize');
				});
			});
		}

		// Scroll top
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('#scroll-top').fadeIn();
			} else {
				$('#scroll-top').fadeOut();
			}
		});

		$('#scroll-top').on('click', function (e) {
			e.preventDefault();

			$('body,html').animate({
				scrollTop: 0
			}, 800);
		});

		// Flex slider for gallery
		$('.format-gallery-slider .slides').owlCarousel({
			singleItem     : true,
			slideSpeed     : 800,
			navigation     : true,
			pagination     : true,
			autoPlay       : true,
			paginationSpeed: 1000,
			navigationText : ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>']
		});

		$('.popup-youtube').magnificPopup({
			disableOn   : 0,
			type        : 'iframe',
			mainClass   : 'mfp-fade',
			removalDelay: 160,
			preloader   : false,

			fixedContentPos: false
		});

		/**
		 * Search toggle
		 */
		$('.menu-extra .menu-item-search').on('click', '#toggle-search', function (e) {
			e.preventDefault();

			$(this).closest('.menu-item-search').toggleClass('show-search-form');
		});

		$('.tweets-widget').each(function () {
			var auto = $(this).find('.latest-tweets').data('auto'),
				pag = $(this).find('.latest-tweets').data('pag');

			if (auto === 0) {
				auto = false;
			}

			if (pag === 1) {
				pag = true;
			} else {
				pag = false;
			}

			$(this).find('.latest-tweets').owlCarousel({
				singleItem     : true,
				navigation     : false,
				autoPlay       : auto,
				pagination     : pag,
				slideSpeed     : 800,
				paginationSpeed: 1000,
				itemsTablet    : [768, 3],
				itemsMobile    : [320, 1]
			});

		});


		videoPopup();

		function videoPopup() {
			$('.format-video').find('.video-play').magnificPopup({
				disableOn      : 0,
				type           : 'iframe',
				mainClass      : 'mfp-fade',
				removalDelay   : 160,
				preloader      : false,
				fixedContentPos: false
			});
		}


		/*Portfolio Isotope*/
		$(window).load(function () {
			$('.amwal-portfolio-masonry .portfolio-list').isotope({
				itemSelector: '.portfolio-item',
				masonry     : {
					columnWidth: '.portfolio-sizer'
				}
			});
		});

		$(window).load(function () {
			$('.amwal-portfolio-grid .portfolio-list').isotope({
				transitionDuration: '0.8s',
				itemSelector      : '.portfolio-item',
				layoutMode        : 'fitRows'
			});
		});

		$('.filters-dropdown').on('click', 'a', function (e) {
			e.preventDefault();

			var selector = $(this).attr('data-option-value');
			$(this).closest('.portfolio-showcase').find('.portfolio-list').isotope({filter: selector});

			$(this).parents('ul').find('a').removeClass('selected');
			$(this).addClass('selected');
		});


		$('.portfolio-nav-ajax').find('.post-pagination').on('click', '.page-numbers.next', function (e) {
			e.preventDefault();

			if ($(this).data('requestRunning')) {
				return;
			}

			$(this).data('requestRunning', true);

			$(this).addClass('loading');

			var $portfolio = $(this).parents('.portfolio-showcase').find('.portfolio-list'),
				$pagination = $(this).parents('.post-pagination');

			$.get(
				$(this).attr('href'),
				function (response) {
					var content = $(response).find('.portfolio-showcase .portfolio-list .portfolio-wapper'),
						$pagination_html = $(response).find('.post-pagination').html();

					$pagination.html($pagination_html);

					content.imagesLoaded(function () {
						$portfolio.append(content).isotope('insert', content);

						$pagination.find('.page-numbers.next').removeClass('loading');
						$pagination.find('.page-numbers.next').data('requestRunning', false);
					});
				}
			);
		});

		// Show background full width
		$(window).resize(function () {
			var wWidth = $(window).width();

			$('.vc_column_container').each(function () {
				if ($(this).hasClass('col-bg-full')) {
					var wRow = $(this).parents('.vc_row').width();
					if (wWidth >= 768) {
						wRow = wRow / 2;
					}

					$(this).find('.bg-column').width(wRow);
				}

			});

			$('.amwal-video-banner').each(function () {

				if ($(this).hasClass('video-poster-full')) {
					var videoWidth = $(this).closest('.vc_row').width(),
						videoHeight = $(this).closest('.vc_row').height();

					if (wWidth >= 768) {
						videoWidth = videoWidth / 2;
					} else {
						//videoWidth = '100%';
						videoHeight = 'auto';
					}

					$('.video-poster-full').css({
						'width' : videoWidth,
						'height' : videoHeight
					});

				}
			});

		}).trigger('resize');

		/*Fancy Select Contact Form 7*/
		$('.wpcf7-form').find('select').fancySelect();

		$('[data-toggle="tooltip"]').tooltip();

		$(window).resize(function () {

			$mobileNav.find('.sub-menu').css({
				height: $(window).height() - 32
			});

			var hHeader = $header.outerHeight(true),
				hTopbar = $('.topbar').outerHeight(true),
				scrollActive = hHeader + hTopbar,
				maxsCroll = $(document).height() - $(window).height(),
				minimizing = scrollActive + 100;

			if (maxsCroll > 400) {

				$(window).scroll(function () {
					var scrollTop = $(window).scrollTop();

					if (scrollTop >= scrollActive && scrollTop <= minimizing) {
						$header.addClass('opa-0');
					} else{
						$header.removeClass('opa-0');
					}

					if (scrollTop >= scrollActive ) {
						$header.addClass('minimized');
					} else{
						$header.removeClass('minimized');
					}

					if (scrollTop > minimizing ) {
						if( ! $header.hasClass( 'minimizing' ) ) {
							$header.addClass('minimizing');
						}
					} else{
						$header.removeClass('minimizing');
					}
				});
			}
		}).trigger('resize');


	});
})
(jQuery);