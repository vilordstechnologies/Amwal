<?php
/**
 * Hooks for template header
 *
 * @package Amwal
 */

/**
 * Enqueue scripts and styles.
 *
 * @since 1.0
 */
function amwal_enqueue_scripts() {
	/**
	 * Register and enqueue styles
	 */
	wp_register_style( 'amwal-fonts', amwal_fonts_url(), array(), '20160921' );
	wp_register_style( 'font-awesome', get_template_directory_uri() . '/css/font-awesome.min.css', array(), '20160921' );
	wp_register_style( 'icomoon', get_template_directory_uri() . '/css/icomoon.min.css', array(), '20160921' );
	wp_register_style( 'linearicons', get_template_directory_uri() . '/css/linearicons.min.css', array(), '20160921' );
	wp_register_style( 'bootstrap', get_template_directory_uri() . '/css/bootstrap.min.css', array(), '3.3.6' );

	wp_enqueue_style( 'amwal', get_template_directory_uri() . '/style.css', array( 'amwal-fonts', 'font-awesome', 'icomoon', 'linearicons', 'bootstrap' ), '20160921' );

	wp_add_inline_style( 'amwal', amwal_header_styles() );

	/**
	 * Register and enqueue scripts
	 */
	$min = defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ? '' : '.min';

	wp_enqueue_script( 'html5shiv', get_template_directory_uri() . '/js/html5shiv.min.js', array(), '3.7.2' );
	wp_script_add_data( 'html5shiv', 'conditional', 'lt IE 9' );

	wp_enqueue_script( 'respond', get_template_directory_uri() . '/js/respond.min.js', array(), '1.4.2' );
	wp_script_add_data( 'respond', 'conditional', 'lt IE 9' );

	wp_enqueue_script( 'waypoints', get_template_directory_uri() . '/js/waypoints.min.js', array('jquery'), '2.0.2' );
	wp_register_script( 'amwal-plugins', get_template_directory_uri() . "/js/plugins$min.js", array( 'jquery' ), '20160921', true );
	wp_enqueue_script( 'amwal', get_template_directory_uri() . "/js/scripts$min.js", array( 'amwal-plugins' ), '20160921', true );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}

	wp_localize_script(
		'amwal', 'amwal', array(
			'amwal_back' => esc_html__( 'Back', 'amwal' ),
		)
	);
}

add_action( 'wp_enqueue_scripts', 'amwal_enqueue_scripts' );


/**
 * Custom scripts and styles on header
 *
 * @since  1.0.0
 */
function amwal_header_styles() {
	/**
	 * All Custom CSS rules
	 */
	$inline_css = '';


	// Logo
	$logo_size_width = amwal_get_option( 'logo_width' );
	$logo_css        = $logo_size_width ? 'width:' . intval( $logo_size_width ) . 'px; ' : '';

	$logo_size_height = amwal_get_option( 'logo_height' );
	$logo_css .= $logo_size_height ? 'height:' . intval( $logo_size_height ) . 'px; ' : '';

	$logo_margin = amwal_get_option( 'logo_margins' );
	$logo_css .= $logo_margin['top'] ? 'margin-top:' . intval( $logo_margin['top'] ) . 'px; ' : '';
	$logo_css .= $logo_margin['right'] ? 'margin-right:' . intval( $logo_margin['right'] ) . 'px; ' : '';
	$logo_css .= $logo_margin['bottom'] ? 'margin-bottom:' . intval( $logo_margin['bottom'] ) . 'px; ' : '';
	$logo_css .= $logo_margin['left'] ? 'margin-left:' . intval( $logo_margin['left'] ) . 'px; ' : '';

	if ( ! empty( $logo_css ) ) {
		$inline_css .= '.site-header .logo img ' . ' {' . $logo_css . '}';
	}

	$bg_page_header = '';
	if ( is_page_template( 'template-coming-soon.php' ) ) {

		$page_css  = '';
		$bg_coming = amwal_get_meta( 'bg_comingsoon' );
		if ( $bg_coming ) {
			$bg_coming = wp_get_attachment_image_src( $bg_coming, 'full' );
			$page_css  = $bg_coming ? " .page-template-template-coming-soon { background-image: url(" . esc_url( $bg_coming[0] ) . "); }" : '';
		}
		$inline_css .= $page_css;

	} elseif ( function_exists( 'is_shop' ) && ( is_shop() || is_product_category() || is_product_tag() ) ) {

		$image          = amwal_get_option( 'page_header_bg_shop' );
		$bg_page_header = $image ? $image : '';

	} elseif ( is_page() ) {

		if ( amwal_get_meta( 'page_header_bg' ) ) {
			$banner = amwal_get_meta( 'page_header_bg' );
			if ( $banner ) {
				$banner         = wp_get_attachment_image_src( $banner, 'full' );
				$bg_page_header = $banner ? $banner[0] : '';
			}
		} else {
			$title_area = amwal_get_option( 'page_header_pages' );
			if ( $title_area ) {
				$banner         = amwal_get_option( 'page_header_bg_pages' );
				$bg_page_header = $banner ? $banner : '';
			}
		}

	} elseif ( is_post_type_archive( 'portfolio_project' ) || is_tax( 'portfolio_category' ) || is_singular( 'portfolio_project' ) ) {

		if ( get_post_meta( get_the_ID(), 'page_header_bg', true ) ) {
			$banner = get_post_meta( get_the_ID(), 'page_header_bg', true );
			if ( $banner ) {
				$banner         = wp_get_attachment_image_src( $banner, 'full' );
				$bg_page_header = $banner ? $banner[0] : '';
			}
		} else {
			$title_area = amwal_get_option( 'page_header_portfolio' );
			if ( $title_area ) {
				$banner         = amwal_get_option( 'page_header_bg_portfolio' );
				$bg_page_header = $banner ? $banner : '';
			}
		}

	} elseif ( is_post_type_archive( 'service' ) || is_tax( 'service_category' ) || is_singular( 'service' ) ) {
		if ( get_post_meta( get_the_ID(), 'page_header_bg', true ) ) {
			$banner = get_post_meta( get_the_ID(), 'page_header_bg', true );
			if ( $banner ) {
				$banner         = wp_get_attachment_image_src( $banner, 'full' );
				$bg_page_header = $banner ? $banner[0] : '';
			}
		} else {
			$title_area = amwal_get_option( 'page_header_service' );
			if ( $title_area ) {
				$banner         = amwal_get_option( 'page_header_bg_service' );
				$bg_page_header = $banner ? $banner : '';
			}
		}

	} elseif ( is_404() ) {
		$bg_404 = amwal_get_option( 'bg_404' );
		if ( $bg_404 ) {
			$inline_css .= " .error404 .site { background-image: url(" . esc_url( $bg_404 ) . "); } ";

		}
	} else {

		$post_id = get_the_ID();
		if ( ( is_home() && ! is_front_page() ) ) {
			$post_id = get_queried_object_id();
		}

		if ( get_post_meta( $post_id, 'page_header_bg', true ) ) {
			$banner = get_post_meta( $post_id, 'page_header_bg', true );
			if ( $banner ) {
				$banner         = wp_get_attachment_image_src( $banner, 'full' );
				$bg_page_header = $banner ? $banner[0] : '';
			}
		}

	}

	if ( empty($bg_page_header)) {
		$title_area = amwal_get_option( 'page_header' );
		if ( $title_area ) {
			$banner         = amwal_get_option( 'page_header_bg' );
			$bg_page_header = $banner ? $banner : '';
		}
	}

	if ( $bg_page_header ) {
		$inline_css .= ".site-banner { background-image: url(" . esc_url( $bg_page_header ) . "); }";
	}

	if ( function_exists( 'is_account_page' ) && is_account_page() ) {
		$bg_myacc = amwal_get_option( 'bg_myaccount' );
		if ( $bg_myacc ) {
			$inline_css .= " .woocommerce-account .site-content { background-image: url(" . esc_url( $bg_myacc ) . "); } ";
		}
	}


	/*Footer Extra*/

	$extra_color = amwal_get_option( 'footer_extra_bg_color' );
	$extra_bg    = amwal_get_option( 'footer_extra_bg' );

	$extra_css = ! empty( $extra_color ) ? "background-color: " . esc_attr( $extra_color ) . ";" : '';

	if ( ! empty( $extra_bg ) ) {
		$extra_css = "background-image: url({$extra_bg});";

		$extra_repeats = amwal_get_option( 'footer_extra_bg_repeats' );
		$extra_css .= "background-repeat: {$extra_repeats};";

		$extra_vertical   = amwal_get_option( 'footer_extra_bg_vertical' );
		$extra_horizontal = amwal_get_option( 'footer_extra_bg_horizontal' );
		$extra_css .= "background-position: {$extra_horizontal} {$extra_vertical};";

		$extra_attachments = amwal_get_option( 'footer_extra_bg_attachments' );
		$extra_css .= "background-attachment: {$extra_attachments};";

		$extra_size = amwal_get_option( 'footer_extra_bg_size' );
		$extra_css .= "background-size: {$extra_size};";
	}

	if ( ! empty( $extra_css ) ) {
		$inline_css .= '.footer-extra {' . $extra_css . '}';
	}

	$news_bg = amwal_get_option( 'footer_newsletter_bg' );
	if ( ! empty( $news_bg ) ) {
		$news_css = "background-image: url({$news_bg});";

		$news_repeats = amwal_get_option( 'footer_newsletter_bg_repeats' );
		$news_css .= "background-repeat: {$news_repeats};";

		$news_vertical   = amwal_get_option( 'footer_newsletter_bg_vertical' );
		$news_horizontal = amwal_get_option( 'footer_newsletter_bg_horizontal' );
		$news_css .= "background-position: {$news_horizontal} {$news_vertical};";

		$news_attachments = amwal_get_option( 'footer_newsletter_bg_attachments' );
		$news_css .= "background-attachment: {$news_attachments};";

		$news_size = amwal_get_option( 'footer_newsletter_bg_size' );
		$news_css .= "background-size: {$news_size};";
	}

	if ( ! empty( $news_css ) ) {
		$inline_css .= '.footer-newsletter {' . $news_css . '}';
	}


	$footer_bg = amwal_get_option( 'footer_background' );
	if ( ! empty( $footer_bg ) ) {

		$bg_css = "background-image: url({$footer_bg});";

		$bg_repeats = amwal_get_option( 'footer_background_repeats' );
		$bg_css .= "background-repeat: {$bg_repeats};";

		$bg_vertical   = amwal_get_option( 'footer_background_vertical' );
		$bg_horizontal = amwal_get_option( 'footer_background_horizontal' );
		$bg_css .= "background-position: {$bg_horizontal} {$bg_vertical};";

		$bg_attachments = amwal_get_option( 'footer_background_attachments' );
		$bg_css .= "background-attachment: {$bg_attachments};";

		$bg_size = amwal_get_option( 'footer_background_size' );
		$bg_css .= "background-size: {$bg_size};";
	}

	if ( ! empty( $bg_css ) ) {
		$inline_css .= '.site-footer {' . $bg_css . '}';
	}

	$color_scheme_option = amwal_get_option( 'color_scheme' );
	if ( $color_scheme_option ) {
		$color = explode( '|', $color_scheme_option );

		$main_color = isset( $color[0] ) ? $color[0] : '0';
		$sub_color  = isset( $color[1] ) ? $color[1] : '0';

		if ( intval( amwal_get_option( 'custom_color_scheme' ) ) ) {
			$main_color = amwal_get_option( 'custom_color_1' );
			$sub_color  = amwal_get_option( 'custom_color_2' );
		}

		if ( $main_color != '0' && $sub_color != '0' ) {
			$inline_css .= amwal_get_color_scheme_css( $main_color, $sub_color );
		}
	}

	$inline_css .= amwal_typography_css();

	$inline_css .= amwal_get_heading_typography_css();

	return $inline_css;

}

/**
 * Display the site header
 *
 * @since 1.0.0
 */
function amwal_show_header() {

	$header_layout = amwal_get_option( 'header_layout' );

	get_template_part( 'parts/headers/top', $header_layout );

}

add_action( 'amwal_header', 'amwal_show_header' );

/**
 * Display the top bar
 *
 * @since 1.0.0
 */
function amwal_show_topbar() {

	if ( ! in_array( amwal_get_option( 'header_layout' ), array( '1', '4', '7', '8' ) ) ) {
		return;
	}

	get_template_part( 'parts/headers/topbar' );
}

function amwal_top_bar_before_header() {
	if ( ! intval( amwal_get_option( 'topbar' ) ) ) {
		return;
	}

	if ( amwal_get_option( 'top_bar_position' ) != 'top' ) {
		return;
	}
	amwal_show_topbar();
}

add_action( 'amwal_before_header', 'amwal_top_bar_before_header', 15 );

function amwal_top_bar_after_header() {

	if ( ! intval( amwal_get_option( 'topbar' ) ) ) {
		return;
	}

	if ( amwal_get_option( 'top_bar_position' ) != 'bottom' ) {
		return;
	}
	amwal_show_topbar();
}

add_action( 'amwal_after_header', 'amwal_top_bar_after_header', 15 );

/**
 * Show a title area
 *
 * @since 1.0.0
 */
function amwal_show_page_header() {

	$show_breadcrumb = true;
	$css_class       = '';

	if ( is_page_template( 'template-homepage.php' ) ) {
		return;
	}

	if ( is_post_type_archive( 'portfolio_project' ) || is_tax( 'portfolio_category' ) || is_singular( 'portfolio_project' ) ) {
		if ( ! intval( amwal_get_option( 'page_header_portfolio' ) ) ) {
			return;
		}
		if ( is_singular( 'portfolio_project' ) ) {
			if ( get_post_meta( get_the_ID(), 'hide_page_header', true ) ) {
				return;
			}
		}

		if ( amwal_get_meta( 'hide_breadcrumb' ) || ! amwal_get_option( 'breadcrumb_portfolio' ) ) {
			$show_breadcrumb = false;
			$css_class       = 'hide-breadcrumb';
		}

	} elseif ( is_post_type_archive( 'service' ) || is_tax( 'service_category' ) || is_singular( 'service' ) ) {
		if ( ! intval( amwal_get_option( 'page_header_service' ) ) ) {
			return;
		}
		if ( is_singular( 'service' ) ) {
			if ( get_post_meta( get_the_ID(), 'hide_page_header', true ) ) {
				return;
			}
		}

		if ( amwal_get_meta( 'hide_breadcrumb' ) || ! amwal_get_option( 'breadcrumb_service' ) ) {
			$show_breadcrumb = false;
			$css_class       = 'hide-breadcrumb';
		}

	} elseif ( function_exists( 'is_shop' ) && ( is_shop() || is_product_category() || is_product_tag() ) ) {
		if ( ! intval( amwal_get_option( 'page_header_shop' ) ) ) {
			return;
		}

		if ( ! amwal_get_option( 'breadcrumb_shop' ) ) {
			$show_breadcrumb = false;
			$css_class       = 'hide-breadcrumb';
		}

	} elseif ( is_page() ) {
		if ( ! amwal_get_option( 'page_header_pages' ) ) {
			return;
		} elseif ( amwal_get_meta( 'hide_page_header' ) ) {
			return;
		}

		if ( amwal_get_meta( 'hide_breadcrumb' ) || ! amwal_get_option( 'breadcrumb_pages' ) ) {
			$show_breadcrumb = false;
			$css_class       = 'hide-breadcrumb';
		}

	} else {
		if ( ! amwal_get_option( 'page_header' ) ) {
			return;
		} elseif ( amwal_get_meta( 'hide_page_header' ) ) {
			return;
		}

		if ( amwal_get_meta( 'hide_breadcrumb' ) || ! amwal_get_option( 'breadcrumb' ) ) {
			$show_breadcrumb = false;
			$css_class       = 'hide-breadcrumb';
		}
	}

	?>
	<div class="site-banner page-header text-center <?php echo esc_attr($css_class); ?>">
		<div class="container page-header-content">
			<?php echo the_archive_title( '<h1>', '</h1>' ); ?>
			<?php
			if ( $show_breadcrumb == true ) {
				echo amwal_get_breadcrumbs();
			}
			?>
		</div>
	</div>
	<?php
}

add_action( 'amwal_after_header', 'amwal_show_page_header', 20 );

/**
 * Get breadcrumbs
 *
 * @since  1.0.0
 *
 * @return string
 */
function amwal_get_breadcrumbs() {

	ob_start();
	?>
	<nav class="breadcrumbs">
		<?php
		amwal_breadcrumbs(
			array(
				'before' => '',
			)
		);
		?>
	</nav>
	<?php
	return ob_get_clean();
}

/**
 * Returns CSS for the color schemes.
 *
 *
 * @param array $colors Color scheme colors.
 *
 * @return string Color scheme CSS.
 */
function amwal_get_color_scheme_css( $main_color, $sub_color ) {
	return <<<CSS
	/* Color Scheme */

	/*Background Color*/

	.btn-primary:hover,.btn-primary:active,.btn-primary:focus,
	.btn-default,
	.btn-default:hover,.btn-default:active,.btn-default:focus,
	.woo-btn,
	.woo-btn-2:hover,.woo-btn-2:focus,
	.amwal-language-switcher ul ul li,.amwal-lang_sel ul ul li, #lang_sel ul ul li,
	.site-header .primary-nav ul ul,
	.header-top-style-3 .site-header,
	.header-top-style-4 .header-primary-menu .primary-nav .menu > li.current-menu-parent:after,
	.header-top-style-5 .header-primary-menu .primary-nav .menu > li.current-menu-parent:after,
	.header-top-style-6 .header-primary-menu .primary-nav .menu > li.current-menu-parent:after,
	.header-top-style-7 .header-primary-menu .primary-nav .menu > li.current-menu-parent:after,
	.header-top-style-4 .header-primary-menu .primary-nav .menu > li.current-menu-item:after,
	.header-top-style-5 .header-primary-menu .primary-nav .menu > li.current-menu-item:after,
	.header-top-style-6 .header-primary-menu .primary-nav .menu > li.current-menu-item:after,
	.header-top-style-7 .header-primary-menu .primary-nav .menu > li.current-menu-item:after,
	.header-top-style-4 .header-primary-menu .primary-nav .menu > li.current-menu-ancestor:after,
	.header-top-style-5 .header-primary-menu .primary-nav .menu > li.current-menu-ancestor:after,
	.header-top-style-6 .header-primary-menu .primary-nav .menu > li.current-menu-ancestor:after,
	.header-top-style-7 .header-primary-menu .primary-nav .menu > li.current-menu-ancestor:after,
	.header-top-style-4 .header-primary-menu .primary-nav .menu > li:after,
	.header-top-style-5 .header-primary-menu .primary-nav .menu > li:after,
	.header-top-style-6 .header-primary-menu .primary-nav .menu > li:after,
	.header-top-style-7 .header-primary-menu .primary-nav .menu > li:after,
	.header-top-style-6 .site-header .extra-button .link:hover,
	.header-top-style-6 .site-header .extra-button .link:active,
	.header-top-style-6 .site-header .extra-button .link:focus,
	.header-top-style-7 .topbar,
	.header-top-style-7 .site-header .extra-button .link:hover,.header-top-style-7 .site-header .extra-button .link:active,.header-top-style-7 .site-header .extra-button .link:focus,
	.header-top-style-8 .site-header .extra-button .link:hover,.header-top-style-8 .site-header .extra-button .link:active,.header-top-style-8 .site-header .extra-button .link:focus,
	.numeric-navigation .page-numbers,
	.item-new-list .entry-header .entry-format.format-link .link-block:hover,
	.item-new-list .entry-content .btn-link:hover,.item-new-list .entry-content .btn-link:active,.item-new-list .entry-content .btn-link:focus,
	.blog-single .entry-footer .social-links a:hover,
	.amwal-service-item .entry-content .entry-title,
	.amwal-service-item .entry-content .service-content .view-more:hover,.amwal-service-item .entry-content .service-content .view-more:active,.amwal-service-item .entry-content .service-content .view-more:focus,
	.post-type-archive-portfolio_project .filters-dropdown ul.option-set li a:hover,.tax-portfolio_category .filters-dropdown ul.option-set li a:hover,.post-type-archive-portfolio_project .filters-dropdown ul.option-set li a:active,.tax-portfolio_category .filters-dropdown ul.option-set li a:active,.post-type-archive-portfolio_project .filters-dropdown ul.option-set li a:focus,.tax-portfolio_category .filters-dropdown ul.option-set li a:focus,
	.post-type-archive-portfolio_project .filters-dropdown ul.option-set li a:hover,.tax-portfolio_category .filters-dropdown ul.option-set li a:hover,
	.testimonial-view-list .amwal-testimonial-item:before,
	.comment .comment-author .reply .comment-reply-link:hover,
	.comment-respond .comment-form .form-submit .submit:hover,.comment-respond .comment-form .form-submit .submit:active,.comment-respond .comment-form .form-submit .submit:focus,
	.service-sidebar .widget .widget-title,.page-sidebar .widget .widget-title,.team-sidebar .widget .widget-title,.testimonial-sidebar .widget .widget-title,
	.service-sidebar .widget_text .button a,.page-sidebar .widget_text .button a,.team-sidebar .widget_text .button a,.testimonial-sidebar .widget_text .button a,
	.tabs-widget .tabs-nav li a,
	.widget_mc4wp_form_widget .mc4wp-form input[type='submit']:hover,
	.site-footer .footer-widgets .widget.widget_mc4wp_form_widget .mc4wp-form input[type='submit']:hover,
	.backtotop:hover,
	.woocommerce .added_to_cart:hover,.woocommerce button.button:hover,.woocommerce a.button:hover,.woocommerce input.button:hover,.woocommerce #respond input#submit:hover,.woocommerce .added_to_cart:focus,.woocommerce button.button:focus,.woocommerce a.button:focus,.woocommerce input.button:focus,.woocommerce #respond input#submit:focus,
	.woocommerce .added_to_cart:hover,.woocommerce button.button:hover,.woocommerce a.button:hover,.woocommerce input.button:hover,.woocommerce #respond input#submit:hover,.woocommerce .added_to_cart:focus,.woocommerce button.button:focus,.woocommerce a.button:focus,.woocommerce input.button:focus,.woocommerce #respond input#submit:focus,
	.woocommerce .added_to_cart.alt:hover,.woocommerce button.button.alt:hover,.woocommerce a.button.alt:hover,.woocommerce input.button.alt:hover,.woocommerce #respond input#submit.alt:hover,.woocommerce .added_to_cart.alt:focus,.woocommerce button.button.alt:focus,.woocommerce a.button.alt:focus,.woocommerce input.button.alt:focus,.woocommerce #respond input#submit.alt:focus,
	.woocommerce .added_to_cart.alt:hover,.woocommerce button.button.alt:hover,.woocommerce a.button.alt:hover,.woocommerce input.button.alt:hover,.woocommerce #respond input#submit.alt:hover,.woocommerce .added_to_cart.alt:focus,.woocommerce button.button.alt:focus,.woocommerce a.button.alt:focus,.woocommerce input.button.alt:focus,.woocommerce #respond input#submit.alt:focus,
	.woocommerce input.button:disabled:hover,.woocommerce input.button:disabled[disabled]:hover,.woocommerce input.button:disabled:focus,.woocommerce input.button:disabled[disabled]:focus,
	.woocommerce input.button:disabled:hover,.woocommerce input.button:disabled[disabled]:hover,.woocommerce input.button:disabled:focus,.woocommerce input.button:disabled[disabled]:focus,
	.woocommerce div.product div.summary button.single_add_to_cart_button,
	.woocommerce div.product .woocommerce-tabs ul.tabs li,
	.woocommerce form.checkout table.shop_table tfoot .order-total,
	.woocommerce form.checkout #payment div.place-order .button,
	.woocommerce table.shop_table thead,
	.woocommerce .shop-sidebar .widget-title,
	.woocommerce .widget_price_filter .price_slider_amount .button,
	.woocommerce nav.woocommerce-pagination ul li .page-numbers,
	.woocommerce .customer-login .tabs-nav li,
	.woocommerce-account form.login .button,.woocommerce-account form.register .button,
	.woocommerce-account .woocommerce-MyAccount-content form.edit-account .button,
	.woocommerce-cart table.cart td.actions .checkout-button,
	.woocommerce-cart table.cart td.actions .coupon .button,
	.woocommerce-cart .shipping-calculator-form .button,
	.main-bg-color,
	.amwal-btn-2
	{
		background-color: $main_color
	}
	/*Border Color*/

	.item-new-list .entry-header .entry-format.format-gallery .format-gallery-slider .owl-controls .owl-pagination .owl-page,
	.post-type-archive-portfolio_project .filters-dropdown ul.option-set li a:hover,.tax-portfolio_category .filters-dropdown ul.option-set li a:hover
	{
		border-color: $main_color
	}

	/*Border Left*/

	.blog-single .entry-content blockquote
	{
		border-left-color: $main_color
	}
	/*Color*/

	a,
	.site-header .nav a:hover,
	.header-top-style-4 .header-primary-menu .menu-extra .extra-menu-item.menu-item-search .item-search:hover,.header-top-style-5 .header-primary-menu .menu-extra .extra-menu-item.menu-item-search .item-search:hover,.header-top-style-6 .header-primary-menu .menu-extra .extra-menu-item.menu-item-search .item-search:hover,.header-top-style-7 .header-primary-menu .menu-extra .extra-menu-item.menu-item-search .item-search:hover,
	.header-top-style-4 .header-primary-menu .menu-extra .extra-menu-item.menu-item-cart .cart-contents:hover,.header-top-style-5 .header-primary-menu .menu-extra .extra-menu-item.menu-item-cart .cart-contents:hover,.header-top-style-6 .header-primary-menu .menu-extra .extra-menu-item.menu-item-cart .cart-contents:hover,.header-top-style-7 .header-primary-menu .menu-extra .extra-menu-item.menu-item-cart .cart-contents:hover,
	.blog-single .entry-footer .text-left i,
	.blog-single .entry-footer .text-left .category-links a:hover,
	.amwal-team-featured li,
	.comment-content .comment-metadata span i,
	.widget select option,
	.widget_categories li a,.widget_recent_comments li a,.widget_rss li a,.widget_pages li a,.widget_archive li a,.widget_nav_menu li a,.widget_recent_entries li a,.widget_meta li a,.widget-recent-comments li a,
	.widget_tag_cloud .tagcloud a,
	.widget-recent-comments li,
	.widget_search .search-form .search-field,
	.recent-posts-widget .recent-post .post-text .post-title,
	.tweets-widget .latest-tweets .tweet-item a,
	.social-links-widget a,
	.woocommerce div.product form.cart .variations .label,
	.woocommerce .quantity .increase i,.woocommerce .quantity .decrease i,
	.main-color
	{
		color: $main_color
	}

	/* -------------- Secondary Color -------------- */
	/*Background Color*/

	.owl-controls .owl-buttons div,
	.owl-controls .owl-buttons div:hover,
	.btn-primary,
	.btn-default,
	.woo-btn:hover,.woo-btn:focus,
	.woo-btn-2,
	.amwal-language-switcher ul ul li:hover,.amwal-lang_sel ul ul li:hover, #lang_sel ul ul li:hover,
	.site-header .primary-nav .menu > li.current-menu-parent:after,.site-header .primary-nav .menu > li.current-menu-item:after,.site-header .primary-nav .menu > li.current-menu-ancestor:after,
	.site-header .primary-nav .menu > li:after,
	.site-header .primary-nav li li:hover,
	.header-top-style-3 .site-header .header-col-left .menu-logo,
	.header-top-style-4 .header-primary-menu,
	.header-top-style-5 .header-primary-menu .primary-nav .menu > li.current-menu-parent:after,.header-top-style-6 .header-primary-menu .primary-nav .menu > li.current-menu-parent:after,.header-top-style-5 .header-primary-menu .primary-nav .menu > li.current-menu-item:after,.header-top-style-6 .header-primary-menu .primary-nav .menu > li.current-menu-item:after,.header-top-style-5 .header-primary-menu .primary-nav .menu > li.current-menu-ancestor:after,.header-top-style-6 .header-primary-menu .primary-nav .menu > li.current-menu-ancestor:after,
	.header-top-style-5 .header-primary-menu .primary-nav .menu > li:after,.header-top-style-6 .header-primary-menu .primary-nav .menu > li:after,
	.header-top-style-6 .site-header .extra-button .link,
	.header-top-style-7 .site-header .extra-button .link,
	.header-top-style-7 .header-primary-menu .primary-nav .menu > li.current-menu-parent:after,.header-top-style-7 .header-primary-menu .primary-nav .menu > li.current-menu-item:after,.header-top-style-7 .header-primary-menu .primary-nav .menu > li.current-menu-ancestor:after,
	.header-top-style-7 .header-primary-menu .primary-nav .menu > li:after,
	.header-top-style-8 .site-header .extra-button .link,
	.header-transparent.header-top-style-2 .site-header .primary-nav .menu > li.current-menu-parent:after,.header-transparent.header-top-style-2 .site-header .primary-nav .menu > li.current-menu-item:after,.header-transparent.header-top-style-2 .site-header .primary-nav .menu > li.current-menu-ancestor:after,
	.numeric-navigation a:hover,.numeric-navigation span.current,
	.item-new-list .entry-header .entry-format.format-gallery .format-gallery-slider .owl-controls .owl-pagination .owl-page.active,.item-new-list .entry-header .entry-format.format-gallery .format-gallery-slider .owl-controls .owl-pagination .owl-page:hover,
	.item-new-list .entry-content .btn-link,
	.amwal-service-item .entry-content .service-content .view-more,
	.post-type-archive-portfolio_project .portfolio-item .portfolio-image .content .title:after,.tax-portfolio_category .portfolio-item .portfolio-image .content .title:after,
	.post-type-archive-portfolio_project .filters-dropdown ul.option-set li a.selected,.tax-portfolio_category .filters-dropdown ul.option-set li a.selected,.post-type-archive-portfolio_project .filters-dropdown ul.option-set li a:hover,.tax-portfolio_category .filters-dropdown ul.option-set li a:hover,
	.single-team_member .team-single .entry-content .team-contact-form .contact-form-title:before,
	.testimonial-view-list .amwal-testimonial-item .entry-content .testimonial-byline:before,
	.testimonial-view-grid .amwal-testimonial-item .entry-content .testimonial-byline:before,
	.comments-title:after,
	.comment .comment-author .reply .comment-reply-link,
	.comment-respond .comment-reply-title:after,
	.comment-respond .comment-form .form-submit .submit,
	.service-sidebar .widget .widget-title:before,.page-sidebar .widget .widget-title:before,.team-sidebar .widget .widget-title:before,.testimonial-sidebar .widget .widget-title:before,
	.service-sidebar .widget_categories li:hover,.page-sidebar .widget_categories li:hover,.team-sidebar .widget_categories li:hover,.testimonial-sidebar .widget_categories li:hover,.service-sidebar .widget_recent_comments li:hover,.page-sidebar .widget_recent_comments li:hover,.team-sidebar .widget_recent_comments li:hover,.testimonial-sidebar .widget_recent_comments li:hover,.service-sidebar .widget_rss li:hover,.page-sidebar .widget_rss li:hover,.team-sidebar .widget_rss li:hover,.testimonial-sidebar .widget_rss li:hover,.service-sidebar .widget_pages li:hover,.page-sidebar .widget_pages li:hover,.team-sidebar .widget_pages li:hover,.testimonial-sidebar .widget_pages li:hover,.service-sidebar .widget_archive li:hover,.page-sidebar .widget_archive li:hover,.team-sidebar .widget_archive li:hover,.testimonial-sidebar .widget_archive li:hover,.service-sidebar .widget_nav_menu li:hover,.page-sidebar .widget_nav_menu li:hover,.team-sidebar .widget_nav_menu li:hover,.testimonial-sidebar .widget_nav_menu li:hover,.service-sidebar .widget_recent_entries li:hover,.page-sidebar .widget_recent_entries li:hover,.team-sidebar .widget_recent_entries li:hover,.testimonial-sidebar .widget_recent_entries li:hover,.service-sidebar .widget_meta li:hover,.page-sidebar .widget_meta li:hover,.team-sidebar .widget_meta li:hover,.testimonial-sidebar .widget_meta li:hover,.service-sidebar .widget-recent-comments li:hover,.page-sidebar .widget-recent-comments li:hover,.team-sidebar .widget-recent-comments li:hover,.testimonial-sidebar .widget-recent-comments li:hover,
	.service-sidebar .widget_text .button a:hover,.page-sidebar .widget_text .button a:hover,.team-sidebar .widget_text .button a:hover,.testimonial-sidebar .widget_text .button a:hover,
	.widget_tag_cloud .tagcloud a:hover,
	.tabs-widget .tabs-nav li a.active,
	.tweets-widget .latest-tweets .owl-controls .owl-page.active span,.tweets-widget .latest-tweets .owl-controls .owl-page:hover span,
	.widget_mc4wp_form_widget .mc4wp-form input[type='submit'],
	.site-footer .footer-widgets .widget .widget-title:before,
	.site-footer .footer-widgets .widget ul.widget-footer-social li a:hover,
	.site-footer .footer-widgets .widget.widget_mc4wp_form_widget .mc4wp-form input[type='submit'],
	.site-footer .footer-widgets .widget.tweets-widget .latest-tweets .owl-controls .owl-page.active span,.site-footer .footer-widgets .widget.tweets-widget .latest-tweets .owl-controls .owl-page:hover span,
	.site-footer .footer-widgets .widget.widget_tag_cloud .tagcloud a:hover,
	.header-top-style-8 .topbar .topbar-right .widget:first-child,
	.woocommerce .added_to_cart,.woocommerce button.button,.woocommerce a.button,.woocommerce input.button,.woocommerce #respond input#submit,
	.woocommerce .added_to_cart.alt,.woocommerce button.button.alt,.woocommerce a.button.alt,.woocommerce input.button.alt,.woocommerce #respond input#submit.alt,
	.woocommerce input.button:disabled,.woocommerce input.button:disabled[disabled],
	.woocommerce .shop-toolbar h2:after,.woocommerce .woocommerce-billing-fields h3:after,.woocommerce h3 label:after,.woocommerce h3.payment_heading:after,.woocommerce #order_review_heading:after,.woocommerce .cart_totals h2:after,.woocommerce .cross-sells h2:after,.woocommerce .col2-set h2:after,
	.woocommerce div.product .woocommerce-tabs ul.tabs li.active,.woocommerce div.product .woocommerce-tabs ul.tabs li:hover,
	.woocommerce #reviews #review_form .comment-form .form-submit input.submit,
	.woocommerce .related.products h2:after,.woocommerce .up-sells h2:after,
	.woocommerce form.checkout h3#ship-to-different-address label:after,
	.woocommerce form.checkout #payment div.place-order .button:hover,.woocommerce form.checkout #payment div.place-order .button:focus,
	.woocommerce form.checkout #payment div.place-order .button:hover,.woocommerce form.checkout #payment div.place-order .button:focus,
	.woocommerce .shop-sidebar .widget-title:before,
	.woocommerce .widget_product_categories li:hover,
	.woocommerce .widget_product_categories li:hover li,
	.woocommerce .widget_price_filter .price_slider .ui-slider-range,
	.woocommerce .widget_price_filter .price_slider .ui-slider-handle,
	.woocommerce .widget_price_filter .price_slider_amount .button:hover,
	.woocommerce nav.woocommerce-pagination ul li .page-numbers:hover,.woocommerce nav.woocommerce-pagination ul li .page-numbers:focus,.woocommerce nav.woocommerce-pagination ul li .page-numbers.current,
	.woocommerce .customer-login .tabs-nav li.active,
	.woocommerce-account form.login .button:hover,.woocommerce-account form.register .button:hover,.woocommerce-account form.login .button:focus,.woocommerce-account form.register .button:focus,
	.woocommerce-account form.login .button:hover,.woocommerce-account form.register .button:hover,.woocommerce-account form.login .button:focus,.woocommerce-account form.register .button:focus,
	.woocommerce-account .woocommerce-MyAccount-content form.edit-account .button:hover,.woocommerce-account .woocommerce-MyAccount-content form.edit-account .button:focus,
	.woocommerce-account .woocommerce-MyAccount-content form.edit-account .button:hover,.woocommerce-account .woocommerce-MyAccount-content form.edit-account .button:focus,
	.woocommerce-cart table.cart td.actions .checkout-button:hover,.woocommerce-cart table.cart td.actions .checkout-button:focus,
	.woocommerce-cart table.cart td.actions .checkout-button:hover,.woocommerce-cart table.cart td.actions .checkout-button:focus,
	.woocommerce-cart table.cart td.actions .coupon .button:hover,.woocommerce-cart table.cart td.actions .coupon .button:focus,
	.woocommerce-cart table.cart td.actions .coupon .button:hover,.woocommerce-cart table.cart td.actions .coupon .button:focus,
	.woocommerce-cart .shipping-calculator-form .button:hover,.woocommerce-cart .shipping-calculator-form .button:focus,
	.woocommerce-cart .shipping-calculator-form .button:hover,.woocommerce-cart .shipping-calculator-form .button:focus,
	.woocommerce-cart .cart_totals table.shop_table tr th,
	.woocommerce-cart .wc-proceed-to-checkout a.button,
	.sub-bg-color
	{
		background-color: $sub_color
	}
	/*Border Color*/

	.header-top-style-4 .header-info ul.contacts-info li i,.header-top-style-5 .header-info ul.contacts-info li i,.header-top-style-6 .header-info ul.contacts-info li i,.header-top-style-7 .header-info ul.contacts-info li i,
	.item-new-list .entry-header .entry-format.format-gallery .format-gallery-slider .owl-controls .owl-pagination .owl-page.active,.item-new-list .entry-header .entry-format.format-gallery .format-gallery-slider .owl-controls .owl-pagination .owl-page:hover,
	.post-type-archive-portfolio_project .filters-dropdown ul.option-set li a.selected,.tax-portfolio_category .filters-dropdown ul.option-set li a.selected,.post-type-archive-portfolio_project .filters-dropdown ul.option-set li a:hover,.tax-portfolio_category .filters-dropdown ul.option-set li a:hover,
	.tweets-widget .latest-tweets .owl-controls .owl-page.active span,.tweets-widget .latest-tweets .owl-controls .owl-page:hover span,
	.site-footer .footer-widgets .widget.tweets-widget .latest-tweets .owl-controls .owl-page.active span,.site-footer .footer-widgets .widget.tweets-widget .latest-tweets .owl-controls .owl-page:hover span,
	.site-footer .footer-widgets .widget.widget_tag_cloud .tagcloud a:hover,
	.woocommerce div.product .woocommerce-tabs ul.tabs li.active,.woocommerce div.product .woocommerce-tabs ul.tabs li:hover
	{
		border-color: $sub_color
	}
	/*Color*/

	.topbar .fa,
	.site-header .menu-extra .extra-menu-item.menu-item-search .item-search:hover,
	.site-header .menu-extra .extra-menu-item.menu-item-cart .cart-contents:hover,
	.header-top-style-2 .site-header .header-col-right .header-info i,
	.header-top-style-2 .site-header .header-col-right .header-socials a:hover,
	.header-top-style-3 .site-header .header-col-right .header-info i,
	.header-top-style-3 .site-header .header-col-right .header-socials a:hover,
	.header-top-style-4 .header-info ul.contacts-info li i,.header-top-style-5 .header-info ul.contacts-info li i,.header-top-style-6 .header-info ul.contacts-info li i,.header-top-style-7 .header-info ul.contacts-info li i,
	.header-top-style-5 .header-primary-menu .menu-extra .extra-menu-item.menu-item-search .item-search:hover,.header-top-style-6 .header-primary-menu .menu-extra .extra-menu-item.menu-item-search .item-search:hover,
	.header-top-style-5 .header-primary-menu .menu-extra .extra-menu-item.menu-item-cart .cart-contents:hover,.header-top-style-6 .header-primary-menu .menu-extra .extra-menu-item.menu-item-cart .cart-contents:hover,
	.header-top-style-5 .header-primary-menu .header-socials a:hover,.header-top-style-6 .header-primary-menu .header-socials a:hover,
	.header-transparent.header-top-style-2 .site-header .header-col-right .header-socials a:hover,
	.item-new-list .entry-header .entry-format.format-quote blockquote cite a,
	.item-new-list .entry-content .entry-title a:hover,
	.item-new-list .entry-content .entry-meta:hover,
	.item-new-list .entry-content .entry-meta i,
	.amwal-service-item .entry-content .entry-title .service-title:hover,
	.post-type-archive-portfolio_project .portfolio-item .portfolio-image .content .title,.tax-portfolio_category .portfolio-item .portfolio-image .content .title,
	.amwal-team-item .entry-content .team-item-social .socials-icon li a:hover,
	.single-team_member .team-single .entry-header .team-info .team-contact .team-socials .socials-icon li a:hover,
	.amwal-team-featured li:before,
	.testimonial-view-list .amwal-testimonial-item .entry-content .testimonial-byline,
	.testimonial-view-grid .amwal-testimonial-item .entry-content .testimonial-byline,
	.error404 .not-found .page-content p a,
	.error404 .not-found .page-content .page-title,
	.error404 .not-found .page-content .search-form:before,
	.error404 .not-found .page-content .copyright a:hover,
	.page-template-template-job ul i,
	.widget_categories li:hover:before,.widget_recent_comments li:hover:before,.widget_rss li:hover:before,.widget_pages li:hover:before,.widget_archive li:hover:before,.widget_nav_menu li:hover:before,.widget_recent_entries li:hover:before,.widget_meta li:hover:before,.widget-recent-comments li:hover:before,
	.widget_categories li a:hover,.widget_recent_comments li a:hover,.widget_rss li a:hover,.widget_pages li a:hover,.widget_archive li a:hover,.widget_nav_menu li a:hover,.widget_recent_entries li a:hover,.widget_meta li a:hover,.widget-recent-comments li a:hover,
	.recent-post .post-text .post-title:hover,.popular-post .post-text .post-title:hover,
	.recent-posts-widget .recent-post .post-text .post-title:hover,
	.tweets-widget .latest-tweets .tweet-item a:hover,
	.social-links-widget a:hover,
	.site-footer .footer-widgets .widget ul.footer-address li a:hover,
	.site-footer .footer-widgets .widget.widget_nav_menu li a:hover,
	.site-footer .footer-widgets .widget.recent-posts-widget .recent-post .post-text .post-title:hover,
	.site-footer .footer-widgets .widget.tweets-widget .latest-tweets .tweet-item a:hover,
	.site-footer .footer-newsletter.amwal-newletter .b-content .title span,
	.site-info .copyright a:hover,
	.footer-extra.footer-extra-layout-1 .footer-social-content .primary-color,
	.woocommerce .star-rating span:before,
	.woocommerce div.product div.summary p.price del,
	.woocommerce #reviews #review_form .comment-form .comment-form-rating .stars a,
	.woocommerce #reviews #comments ol.commentlist li .comment-text p.meta,
	.woocommerce .quantity .increase i:hover,.woocommerce .quantity .decrease i:hover,
	.woocommerce ul.products li.product .price del,
	.woocommerce-account .woocommerce-MyAccount-navigation ul li:hover a,.woocommerce-account .woocommerce-MyAccount-navigation ul li.is-active a,
	.woocommerce-cart a.remove,
	.woocommerce-cart a.remove:hover,
	.site-banner .breadcrumbs a.home i,
	.sub-color
	{
		color: $sub_color
	}

	.header-top-style-8 .topbar {
		background: linear-gradient(to right, $main_color 0%, $main_color 75%, $sub_color 75%, $sub_color 100%);
	}


CSS;
}

if ( ! function_exists( 'amwal_typography_css' ) ) :
	/**
	 * Get typography CSS base on settings
	 *
	 * @since 1.1.6
	 */
	function amwal_typography_css() {
		$css        = '';
		$properties = array(
			'font-family'    => 'font-family',
			'font-size'      => 'font-size',
			'variant'        => 'font-weight',
			'line-height'    => 'line-height',
			'letter-spacing' => 'letter-spacing',
			'color'          => 'color',
			'text-transform' => 'text-transform',
			'text-align'     => 'text-align',
		);

		$settings = array(
			'body_typo'              => 'body',
			'heading1_typo'          => 'h1',
			'heading2_typo'          => 'h2',
			'heading3_typo'          => 'h3',
			'heading4_typo'          => 'h4',
			'heading5_typo'          => 'h5',
			'heading6_typo'          => 'h6',
			'menu_typo'              => '.site-header .nav a',
			'footer_text_typo'       => '.site-footer',
		);

		foreach ( $settings as $setting => $selector ) {
			$typography = amwal_get_option( $setting );
			$default    = (array) amwal_get_option_default( $setting );
			$style      = '';

			foreach ( $properties as $key => $property ) {
				if ( isset( $typography[$key] ) && ! empty( $typography[$key] ) ) {
					if ( isset( $default[$key] ) && strtoupper( $default[$key] ) == strtoupper( $typography[$key] ) ) {
						continue;
					}

					$value = 'font-family' == $key ? '"' . rtrim( trim( $typography[ $key ] ), ',' ) . '"' : $typography[$key];
					$value = 'variant' == $key ? str_replace( 'regular', '400', $value ) : $value;

					if ( $value ) {
						$style .= $property . ': ' . $value . ';';
					}
				}
			}

			if ( ! empty( $style ) ) {
				$css .= $selector . '{' . $style . '}';
			}
		}

		return $css;
	}
endif;

/**
 * Returns CSS for the typography.
 *
 * @return string typography CSS.
 */
function amwal_get_heading_typography_css() {

	$headings   = array(
		'h1' => 'heading1_typo',
		'h2' => 'heading2_typo',
		'h3' => 'heading3_typo',
		'h4' => 'heading4_typo',
		'h5' => 'heading5_typo',
		'h6' => 'heading6_typo'
	);
	$inline_css = '';
	foreach ( $headings as $heading ) {
		$keys = array_keys( $headings, $heading );
		if ( $keys ) {
			$inline_css .= amwal_get_heading_font( $keys[0], $heading );
		}
	}


	return $inline_css;

}

/**
 * Returns CSS for the typography.
 *
 *
 * @param array $body_typo Color scheme body typography.
 *
 * @return string typography CSS.
 */
function amwal_get_heading_font( $key, $heading ) {

	$inline_css   = '';
	$heading_typo = amwal_get_option( $heading );

	if ( $heading_typo ) {
		if ( isset( $heading_typo['font-family'] ) && strtolower( $heading_typo['font-family'] ) !== 'poppins' ) {
			$inline_css .= $key . '{font-family:' . rtrim( trim( $heading_typo['font-family'] ), ',' ) . ', Arial, sans-serif}';
		}
	}

	if ( empty( $inline_css ) ) {
		return;
	}

	return <<<CSS
	{$inline_css}
CSS;
}