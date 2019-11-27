<?php
/**
 * Load and register widgets
 *
 * @package Amwal
 */

require_once get_template_directory() . '/inc/widgets/recent-posts.php';
require_once get_template_directory() . '/inc/widgets/social-media-links.php';
require_once get_template_directory() . '/inc/widgets/tweets.php';
require_once get_template_directory() . '/inc/widgets/portfolios.php';

/**
 * Register widgets
 *
 * @since  1.0
 *
 * @return void
 */
function amwal_register_widgets() {
	register_widget( 'Amwal_Recent_Posts_Widget' );
	register_widget( 'Amwal_Social_Links_Widget' );
	register_widget( 'Amwal_Tweets_Widget' );
	register_widget( 'Amwal_Portfolios_Widget' );
}
add_action( 'widgets_init', 'amwal_register_widgets' );