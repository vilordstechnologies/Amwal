<?php
/**
 * Custom functions for layout.
 *
 * @package Foster
 */

/**
 * Get layout base on current page
 *
 * @return string
 */
function amwal_get_layout() {
	$layout = amwal_get_option( 'default_layout' );
	if ( is_page() ) {
		if ( amwal_get_meta( 'custom_layout' ) ) {
			$layout = amwal_get_meta( 'layout' );
		} elseif ( amwal_get_option( 'page_layout' ) ) {
			$layout = amwal_get_option( 'page_layout' );
		}
	} elseif ( is_singular() && get_post_meta( get_the_ID(), 'custom_layout', true ) ) {
		$layout = get_post_meta( get_the_ID(), 'layout', true );
	} elseif ( is_singular( 'service' ) || is_post_type_archive( 'service' ) || is_tax( 'service_category' ) ) {
		$layout = amwal_get_option( 'service_layout' );
	} elseif ( is_singular( 'portfolio_project' ) || is_post_type_archive( 'portfolio_project' ) || is_tax( 'portfolio_category' ) ) {
		$layout = amwal_get_option( 'portfolio_layout' );
	} elseif ( is_singular( 'team_member' ) || is_post_type_archive( 'team_member' ) || is_tax( 'team_group' ) ) {
		$layout = amwal_get_option( 'team_layout' );
	} elseif ( is_singular( 'testimonial' ) || is_post_type_archive( 'testimonial' ) || is_tax( 'testimonial_category' ) ) {
		$layout = amwal_get_option( 'testimonial_layout' );
	} elseif ( is_404() ) {
		$layout = 'full-content';
	} elseif ( function_exists( 'is_shop' ) && ( is_shop() || is_product_category() || is_product_tag() ) ) {
		$layout = amwal_get_option( 'shop_layout' );
	} elseif ( function_exists( 'is_product' ) && is_product() ) {
		$layout = 'full-content';
	} elseif ( is_singular( 'job_listing' ) ) {
		$layout = 'full-content';
	}

	return $layout;
}

/**
 * Get Bootstrap column classes for content area
 *
 * @since  1.0
 *
 * @return array Array of classes
 */
function amwal_get_content_columns( $layout = null ) {
	$layout = $layout ? $layout : amwal_get_layout();
	if ( 'full-content' == $layout ) {
		return array( 'col-md-12' );
	}
	if ( is_singular( 'job_listing' ) || is_post_type_archive( 'job_listing' ) || is_tax( 'job_listing_type' ) ) {
		return array( 'col-md-12' );
	}

	return array( 'col-md-9', 'col-sm-12', 'col-xs-12' );
}

/**
 * Echos Bootstrap column classes for content area
 *
 * @since 1.0
 */
function amwal_content_columns( $layout = null ) {
	echo implode( ' ', amwal_get_content_columns( $layout ) );
}


/**
 * Get classes for content area
 *
 * @since  1.0
 *
 * @return string of classes
 */
function amwal_class_full_width() {

	if ( is_singular( 'portfolio_project' ) ) {
		if ( get_post_meta( get_the_ID(), 'portfolio_template', true ) == 'full-width' ) {
			return 'container-fluid';
		}
	}

	return 'container';
}
