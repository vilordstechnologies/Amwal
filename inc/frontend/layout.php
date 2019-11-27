<?php
/**
 * Hooks for frontend display
 *
 * @package Amwal
 */


/**
 * Adds custom classes to the array of body classes.
 *
 * @since 1.0
 *
 * @param array $classes Classes for the body element.
 *
 * @return array
 */
function amwal_body_classes( $classes ) {
	// Adds a class of group-blog to blogs with more than 1 published author.
	if ( is_multi_author() ) {
		$classes[] = 'group-blog';
	}

	// Add a class of layout
	$classes[] = amwal_get_layout();

	if ( amwal_is_blog() ) {
		$classes[] = 'blog-view-' . esc_attr( amwal_get_option( 'blog_view' ) );
	}

	$header_layout = amwal_get_option( 'header_layout' );
	if ( $header_layout ) {
		$classes[] = 'header-top-style-' . esc_attr( $header_layout );

		if ( in_array( $header_layout, array( '1' ) ) ) {
			// Add a class of topbar
			if ( intval( amwal_get_option( 'topbar' ) ) ) {
				$classes[] = 'has-topbar';
			}
		}

		if ( amwal_is_homepage() && in_array( $header_layout, array( '1', '2' ) ) ) {
			if ( amwal_get_option( 'header_transparent' ) ) {
				$classes[] = 'header-transparent';
			}
		}
	}

	if ( amwal_get_option( 'header_sticky' ) ) {
		$classes[] = 'header-sticky';
	}

	$portfolio_nav = amwal_get_option( 'portfolio_nav_type' );
	if ( is_post_type_archive( 'portfolio_project' ) || is_tax( 'portfolio_category' ) ) {
		if ( $portfolio_nav ) {
			$classes[] = 'portfolio-nav-' . esc_attr( $portfolio_nav );
		}
	}

	$testimonial_type = amwal_get_option( 'testimonial_type' );
	if ( is_post_type_archive( 'testimonial' ) || is_tax( 'testimonial_category' ) ) {
		if ( $testimonial_type ) {
			$classes[] = 'testimonial-view-' . esc_attr( $testimonial_type );
		}
	}

	$tobar_position = amwal_get_option( 'top_bar_position' );
	if ( $tobar_position ) {
		$classes[] = 'top-bar-position-' . esc_attr( $tobar_position );
	}

	$footer_extra_position = amwal_get_option( 'footer_extra_position' );
	if ( $footer_extra_position ) {
		$classes[] = 'footer-extra-' . esc_attr( $footer_extra_position );
	}

	$footer_copyright_position = amwal_get_option( 'footer_copyright_position' );
	if ( $footer_copyright_position ) {
		$classes[] = 'footer-copyright-' . esc_attr( $footer_copyright_position );
	}

	return $classes;
}

add_filter( 'body_class', 'amwal_body_classes' );


/**
 * Print the open tags of site content container
 */
function amwal_open_site_content_container() {

	if ( is_page_template( 'template-homepage.php' ) || is_page_template( 'template-full-width.php' ) ) {
		return;
	}

	printf( '<div class="%s"><div class="row">', esc_attr( apply_filters( 'amwal_site_content_container_class', amwal_class_full_width() ) ) );
}

add_action( 'amwal_after_site_content_open', 'amwal_open_site_content_container' );

/**
 * Print the close tags of site content container
 */
function amwal_close_site_content_container() {

	if ( is_page_template( 'template-homepage.php' ) || is_page_template( 'template-full-width.php' ) ) {
		return;
	}

	echo '</div></div><!-- .container -->';
}

add_action( 'amwal_before_site_content_close', 'amwal_close_site_content_container' );