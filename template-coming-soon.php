<?php
/**
 * Template Name: Comming Soon
 *
 * The template file for display comming soon page
 *
 * @package Amwal
 */

get_header(); ?>

<?php
if ( have_posts() ) :
	while ( have_posts() ) : the_post();
		the_content();
	endwhile;
endif;
?>

<?php get_footer(); ?>
