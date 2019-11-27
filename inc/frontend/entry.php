<?php
/**
 * Hooks for template archive
 *
 * @package Amwal
 */


/**
 * Sets the authordata global when viewing an author archive.
 *
 * This provides backwards compatibility with
 * http://core.trac.wordpress.org/changeset/25574
 *
 * It removes the need to call the_post() and rewind_posts() in an author
 * template to print information about the author.
 *
 * @since 1.0
 * @global WP_Query $wp_query WordPress Query object.
 * @return void
 */
function amwal_setup_author() {
	global $wp_query;

	if ( $wp_query->is_author() && isset( $wp_query->post ) ) {
		$GLOBALS['authordata'] = get_userdata( $wp_query->post->post_author );
	}
}
add_action( 'wp', 'amwal_setup_author' );


/**
 * Change more string at the end of the excerpt
 *
 * @since  1.0
 *
 * @param string $more
 *
 * @return string
 */
function amwal_excerpt_more( $more ) {
	$more = '&hellip;';

	return $more;
}

add_filter( 'excerpt_more', 'amwal_excerpt_more' );


/**
 * The archive title
 *
 * @since  1.0
 *
 * @param  array $title
 *
 * @return mixed
 */
function amwal_the_archive_title( $title ) {
	if ( is_search() ) {
		$title = sprintf( esc_html__( 'Search Results', 'amwal' ) );
	} elseif ( is_404() ) {
		$title = sprintf( esc_html__( 'Page Not Found', 'amwal' ) );
	} elseif ( is_page() ) {
		$title = get_the_title();
	} elseif ( is_home() && is_front_page() ) {
		$title = esc_html__( 'The Latest Posts', 'amwal' );
	} elseif ( is_home() && ! is_front_page() ) {
		$title = get_the_title( get_option( 'page_for_posts' ) );
	} elseif ( function_exists( 'is_shop' ) && is_shop() ) {
		$title = get_the_title( get_option( 'woocommerce_shop_page_id' ) );
	} elseif ( function_exists( 'is_product' ) && is_product() ) {
		$title = get_the_title();
	} elseif( is_single() ) {
		$title = get_the_title();
	} elseif ( is_post_type_archive( 'portfolio_project' ) ) {

		$customize_title = amwal_get_option('portfolio_archive_title');
		$portfolio_page_id = get_option( 'cw_portfolio_page_id' );

		if ( $portfolio_page_id && get_post( $portfolio_page_id ) ) {
			$title = get_the_title( $portfolio_page_id );
		} elseif( !empty( $customize_title) ){
			$title = wp_kses( $customize_title, wp_kses_allowed_html( 'post' )  ) ;
		} else {
			$title = _x( 'Portfolio', 'Portfolio post type title', 'amwal' );
		}

	} elseif ( is_post_type_archive( 'service' ) ) {

		$customize_title = amwal_get_option('service_archive_title');
		$service_page_id = get_option( 'cw_service_page_id' );

		if ( $service_page_id && get_post( $service_page_id ) ) {
			$title = get_the_title( $service_page_id );
		} elseif( !empty( $customize_title) ){
			$title = wp_kses( $customize_title, wp_kses_allowed_html( 'post' )  ) ;
		} else {
			$title = _x( 'Service', 'Service post type title', 'amwal' );
		}

	} elseif ( is_post_type_archive( 'team_member' ) ) {

		$customize_title = amwal_get_option('team_archive_title');
		$team_page_id = get_option( 'cw_team_page_id' );

		if ( $team_page_id && get_post( $team_page_id ) ) {
			$title = get_the_title( $team_page_id );
		} elseif( !empty( $customize_title) ){
			$title = wp_kses( $customize_title, wp_kses_allowed_html( 'post' )  ) ;
		} else {
			$title = _x( 'Team', 'Team post type title', 'amwal' );
		}

	} elseif ( is_post_type_archive( 'testimonial' ) ) {

		$customize_title = amwal_get_option('testimonial_archive_title');
		$testimonial_page_id = get_option( 'cw_testimonial_page_id' );

		if ( $testimonial_page_id && get_post( $testimonial_page_id ) ) {
			$title = get_the_title( $testimonial_page_id );
		} elseif( !empty( $customize_title) ){
			$title = wp_kses( $customize_title, wp_kses_allowed_html( 'post' )  ) ;
		} else {
			$title = _x( 'Testimonial', 'Testimonial post type title', 'amwal' );
		}


	} elseif ( is_tax() ) {
		$title = single_term_title( '', false ) ;
	}

	if ( is_front_page() && ( get_option( 'woocommerce_shop_page_id' ) == get_option( 'page_on_front' ) ) ) {
		$title = get_the_title( get_option( 'woocommerce_shop_page_id' ) );
	}

	return $title;
}

add_filter( 'get_the_archive_title', 'amwal_the_archive_title' );



/**
 * Custom fields comment form
 *
 * @since  1.0
 *
 * @return  array  $fields
 */
function amwal_comment_form_fields() {
	global $commenter, $aria_req;

	$fields =  array(
		'author'=>	'<p class="comment-form-author col-md-4 col-sm-12">' .
			'<input id ="author" placeholder="' . esc_html__( 'Full name', 'amwal' ) . ' " name="author" type="text" value="' . esc_attr( $commenter['comment_author'] ) .
			'" size    ="30"' . $aria_req . ' /></p>',

		'email' =>	'<p class="comment-form-email col-md-4 col-sm-12">' .
			'<input id ="email" placeholder="' . esc_html__( 'Email', 'amwal' ) . '" name="email" type="text" value="' . esc_attr(  $commenter['comment_author_email'] ) .
			'" size    ="30"' . $aria_req . ' /></p>',

		'url'   =>	'<p class="comment-form-url col-md-4 col-sm-12">' .
			'<input id ="url" placeholder="' . esc_html__( 'Subject', 'amwal' ) . '" name="url" type="text" value="' . esc_attr( $commenter['comment_author_url'] ) .
			'" size    ="30" /></p>'
	);
	return $fields;
}
add_filter( 'comment_form_default_fields', 'amwal_comment_form_fields' );

/**
 * Set order by get posts
 *
 * @since  1.0
 *
 * @param object $query
 *
 * @return string
 */
function amwal_pre_get_posts( $query ) {
	if ( is_admin() ) {
		return;
	}

	if ( ! $query->is_main_query() ) {
		return;
	}

	if ( $query->get( 'page_id' ) ) {
		if ( ( $query->get( 'page_id' ) == get_option( 'page_on_front' ) || is_front_page() )
			&& ( get_option( 'woocommerce_shop_page_id' ) != get_option( 'page_on_front' ) )
		) {
			return;
		}
	}


	$number  = intval( get_option('posts_per_page') );

	if ( $query->is_archive() ) {
		if ( is_post_type_archive( 'portfolio_project' ) || is_tax( 'portfolio_category' ) ) {

			$default = intval( amwal_get_option( 'portfolio_per_page' ) );

			if( $default ){
				$number = $default;
			}

			$query->set( 'posts_per_page', $number );

		} elseif ( is_post_type_archive( 'service' ) || is_tax( 'service_category' ) ) {

			$default = intval( amwal_get_option( 'service_per_page' ) );

			if( $default ){
				$number = $default;
			}
			$query->set( 'posts_per_page', $number );

		} elseif ( is_post_type_archive( 'team_member' ) || is_tax( 'team_group' ) ) {

			$default = intval( amwal_get_option( 'team_per_page' ) );

			if( $default ){
				$number = $default;
			}
			$query->set( 'posts_per_page', $number );

		}  elseif ( is_post_type_archive( 'testimonial' ) || is_tax( 'testimonial' ) ) {

			$default = intval( amwal_get_option( 'testimonial_per_page' ) );

			if( $default ){
				$number = $default;
			}
			$query->set( 'posts_per_page', $number );
		}
	}
}

add_action( 'pre_get_posts', 'amwal_pre_get_posts' );
