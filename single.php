<?php
/**
 * The Template for displaying all single posts.
 *
 * @package Amwal
 */

get_header(); ?>

	<div id="primary" class="content-area <?php amwal_content_columns(); ?>">
		<main id="main" class="site-main" >

		<?php while ( have_posts() ) : the_post(); ?>

			<?php get_template_part( 'parts/content', 'single' ); ?>

			<?php
				// If comments are open or we have at least one comment, load up the comment template
				if ( comments_open() || get_comments_number() ) :
					comments_template();
				endif;
			?>

		<?php endwhile; // end of the loop. ?>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php get_sidebar(); ?>
<?php get_footer(); ?>
