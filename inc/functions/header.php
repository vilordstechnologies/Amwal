<?php
/**
 * Custom functions for header.
 *
 * @package Amwal
 */


/**
 * Get header menu
 *
 * @since  1.0.0
 *
 *
 * @return string
 */
function amwal_header_menu() {
	if ( has_nav_menu( 'primary' ) ) {
		wp_nav_menu(
			array(
				'theme_location' => 'primary',
				'container'      => false
			)
		);
	}
}

/**
 * Get Icon Menu Mobile
 *
 * @since  1.0.0
 *
 *
 * @return string
 */
function amwal_icon_menu() {
	printf(
		'<a href="#" class="navbar-toggle">
			<span class="am-navbar-icon">
				<span class="navbars-line"></span>
			</span>
		</a>'
	);

}


/**
 * Get Menu extra search
 *
 * @since  1.0.0
 *
 *
 * @return string
 */
function amwal_extra_search() {

	$extras = amwal_get_option( 'menu_extra' );
	$items  = '';

	if ( empty( $extras ) || ! in_array( 'search', $extras ) ) {
		return $items;
	}

	$form = sprintf(
		'<form class="search-form" method="get" action="%s">
			<div class="search-content">
				<input type="text" placeholder="%s" name="s" class="search-field" id="search-field-auto">
			</div>
		</form>',
		esc_url( home_url( '/' ) ),
		esc_attr__( 'Search here', 'amwal' )
	);

	$items = sprintf(
		'<li class="extra-menu-item menu-item-search">
			<a id="toggle-search"  class="item-search" href="#"><i class="fa fa-search" aria-hidden="true"></i></a>
			%s
		</li>',
		$form

	);
	echo $items;

}

/**
 * Get Menu extra cart
 *
 * @since  1.0.0
 *
 *
 * @return string
 */
function amwal_extra_cart() {
	$extras = amwal_get_option( 'menu_extra' );
	$items  = '';

	if ( empty( $extras ) || ! in_array( 'cart', $extras ) ) {
		return $items;
	}

	if ( ! function_exists( 'woocommerce_mini_cart' ) ) {
		return $items;
	}
	global $woocommerce;
	$mini_content = '';

	ob_start();
	woocommerce_mini_cart();
	$mini_cart = ob_get_clean();

	$mini_content = sprintf( '	<div class="widget_shopping_cart_content">%s</div>', $mini_cart );

	$items .= sprintf(
		'<li class="extra-menu-item menu-item-cart mini-cart woocommerce">
			<a class="cart-contents" id="icon-cart-contents" href="%s">
				<i class="fa fa-shopping-cart" aria-hidden="true"></i>
				<span class="mini-cart-counter">
					%s
				</span>
			</a>
			%s
		</li>',
		esc_url( wc_get_cart_url() ),
		intval( $woocommerce->cart->cart_contents_count ),
		$mini_content
	);

	echo $items;
}


function amwal_extra_button() {
	$extras = amwal_get_option( 'button_extra' );
	$items  = '';

	if ( empty( $extras ) ) {
		return $items;
	}

	$btn_text = wp_kses( amwal_get_option( 'button_extra_text' ), wp_kses_allowed_html( 'post' ) );
	$btn_link = wp_kses( amwal_get_option( 'button_extra_link' ), wp_kses_allowed_html( 'post' ) );;

	if ( ! empty( $btn_text ) ) {

		$items = sprintf(
			'<div class="extra-button">' .
			'	<a  class="link" href="%s">%s</a>' .
			'</div>',
			esc_url( $btn_link ),
			esc_html( $btn_text )
		);

	}

	echo $items;
}

/**
 * Get socials
 *
 * @since  1.0.0
 *
 *
 * @return string
 */
function amwal_get_socials() {
	$socials = array(
		'facebook'   => esc_html__( 'Facebook', 'amwal' ),
		'twitter'    => esc_html__( 'Twitter', 'amwal' ),
		'google'     => esc_html__( 'Google', 'amwal' ),
		'tumblr'     => esc_html__( 'Tumblr', 'amwal' ),
		'flickr'     => esc_html__( 'Flickr', 'amwal' ),
		'vimeo'      => esc_html__( 'Vimeo', 'amwal' ),
		'youtube'    => esc_html__( 'Youtube', 'amwal' ),
		'linkedin'   => esc_html__( 'LinkedIn', 'amwal' ),
		'pinterest'  => esc_html__( 'Pinterest', 'amwal' ),
		'dribbble'   => esc_html__( 'Dribbble', 'amwal' ),
		'spotify'    => esc_html__( 'Spotify', 'amwal' ),
		'instagram'  => esc_html__( 'Instagram', 'amwal' ),
		'tumbleupon' => esc_html__( 'Tumbleupon', 'amwal' ),
		'wordpress'  => esc_html__( 'WordPress', 'amwal' ),
		'rss'        => esc_html__( 'Rss', 'amwal' ),
		'deviantart' => esc_html__( 'Deviantart', 'amwal' ),
		'share'      => esc_html__( 'Share', 'amwal' ),
		'skype'      => esc_html__( 'Skype', 'amwal' ),
		'behance'    => esc_html__( 'Behance', 'amwal' ),
		'apple'      => esc_html__( 'Apple', 'amwal' ),
		'yelp'       => esc_html__( 'Yelp', 'amwal' ),
);

	return apply_filters( 'amwal_header_socials', $socials );
}

/**
 * Get language
 *
 * @since 1.0.0
 */
function amwal_header_language() {
	$language = amwal_language_switcher( true );
	$language = apply_filters( 'amwal_header_language', $language );
	if ( $language ) {
		?>
		<div class="amwal-language-switcher">
			<?php echo $language; ?>
		</div>
		<?php
	}
}

/**
 * Display socials in header
 *
 * @since 1.0.0
 */
function amwal_header_socials() {
	$header_social = amwal_get_option( 'header_socials' );

	$socials = amwal_get_socials();
	if ( $header_social ) {

		printf( '<div class="header-socials">' );

		foreach ( $header_social as $social ) {
			foreach ( $socials as $name => $label ) {

				$link_url = $social['link_url'];

				if ( preg_match( '/' . $name . '/', $link_url ) ) {

					$social_class = sprintf( 'fa fa-%s', esc_attr( $name ) );
					$social_class = apply_filters( 'amwal_header_social_class', $social_class, $name );

					printf( '<a href="%s" target="_blank"><i class="%s"></i></a>', esc_url( $link_url ), esc_attr( $social_class ) );

					break;
				}
			}
		}
		printf( '</div>' );
	}
}

/**
 * Display contact info in header
 *
 * @since 1.0.0
 */
function amwal_header_info() {

	$header_info = apply_filters( 'amwal_header_info', amwal_get_option( 'header_info' ) );

	if ( $header_info ) {
		printf( '<div class="header-info">%s</div>', wp_kses( $header_info, wp_kses_allowed_html( 'post' ) ) );
	}

}


/**
 * Print HTML of language switcher
 * It requires plugin WPML installed
 */
function amwal_language_switcher( $show_name = false ) {
	$language_dd = '';
	if ( function_exists( 'icl_get_languages' ) ) {
		$languages = icl_get_languages();
		if ( $languages ) {
			$lang_list = array();
			$current   = '';

			foreach ( (array) $languages as $code => $language ) {

				if ( ! $language['active'] ) {
					$lang_list[] = sprintf(
						'<li class="%s"><a href="%s"><img src="%s" alt="%s">%s</a></li>',
						esc_attr( $code ),
						esc_url( $language['url'] ),
						esc_url( $language['country_flag_url'] ),
						esc_attr( $language['tag'] ),
						$show_name ? esc_html( $language['translated_name'] ) : esc_html( $code )
					);
				} else {
					$current = $language;
				}
			}

			$language_dd = sprintf(
				'<ul>' .
				'<li>' .
				'<a href="%s" class="lang_sel_sel"><img class="iclflag" src="%s" alt="%s">%s</a>' .
				'<ul>%s</ul>' .
				'</li>' .
				'</ul>',
				esc_url( $current['url'] ),
				esc_url( $current['country_flag_url'] ),
				esc_attr( $current['tag'] ),
				$show_name ? esc_html( $current['translated_name'] ) : esc_html( $current['language_code'] ),
				implode( "\n\t", $lang_list )
			);
		}
	}

	return $language_dd;
	?>

	<?php
}