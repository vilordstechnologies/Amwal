<?php
/**
 * Template for displaying single services
 *
 * @package CW Service
 */

get_header(); ?>

	<div id="primary" class="content-area <?php amwal_content_columns(); ?>">
		<div id="main" class="site-main" >

			<?php while ( have_posts() ) : the_post(); ?>

				<?php get_template_part( 'parts/content-single', 'service' ); ?>

				<?php
				// If comments are open or we have at least one comment, load up the comment template
				if ( comments_open() || get_comments_number() ) :
					comments_template();
				endif;
				?>

			<?php endwhile; ?>

		</div>
		<!-- #content -->
	</div><!-- #primary -->
<?php get_sidebar(); ?>
<?php get_footer(); ?>
