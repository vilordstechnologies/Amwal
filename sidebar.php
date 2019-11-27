<?php
/**
 * The Sidebar containing the main widget areas.
 *
 * @package Amwal
 */

if ( 'full-content' == amwal_get_layout() ) {
	return;
}

$col_class = '';

$sidebar = 'blog-sidebar';

if ( is_page() ) {
	$sidebar = 'page-sidebar';
	$col_class = 'page-sidebar';
} else {
	if( is_singular( 'service' ) || is_post_type_archive( 'service' )  || is_tax('service_category') ){
		$sidebar = 'service-sidebar';
		$col_class = 'service-sidebar';
	} elseif ( is_singular( 'portfolio_project' ) || is_post_type_archive( 'portfolio_project' )  || is_tax('portfolio_category') ){
		$sidebar = 'portfolio-sidebar';
		$col_class = 'portfolio-sidebar';
	} elseif ( is_singular( 'team_member' ) || is_post_type_archive( 'team_member' )  || is_tax('team_group') ){
		$sidebar = 'team-sidebar';
		$col_class = 'team-sidebar';
	} elseif ( is_singular( 'testimonial' ) || is_post_type_archive( 'testimonial' )  || is_tax('testimonial_category') ){
		$sidebar = 'testimonial-sidebar';
		$col_class = 'testimonial-sidebar';
	} elseif ( is_singular( 'job_listing' ) || is_post_type_archive( 'job_listing' )  || is_tax('job_listing_type') ) {
		return;
	} elseif ( function_exists( 'is_woocommerce' ) && is_woocommerce() ) {
		$sidebar = 'shop-sidebar';
		$col_class = 'shop-sidebar';
	}

}

?>
<div id="secondary" class="widget-area col-xs-12 col-sm-12 col-md-3 <?php echo esc_attr($col_class); ?> " >
	<?php
	if (is_active_sidebar($sidebar)) {
		dynamic_sidebar($sidebar);
	}?>
</div><!-- #secondary -->
