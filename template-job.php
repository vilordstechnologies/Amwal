<?php
/**
 * Template Name: Job
 *
 * The template file for displaying home page.
 *
 * @package Amwal
 */

get_header(); ?>

<div id="primary" class="content-area <?php amwal_content_columns(); ?>">
	<div id="main" class="site-main" >
		<?php
		if ( have_posts() ) :
			while ( have_posts() ) : the_post();
				the_content();
			endwhile;
		endif;
		?>
	</div>
	<!-- #content -->
</div><!-- #primary -->
<?php get_sidebar(); ?>
<?php get_footer(); ?>
