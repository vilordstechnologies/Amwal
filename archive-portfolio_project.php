<?php
/**
 * The template for displaying Archive pages.
 *
 * Learn more: http://codex.wordpress.org/Template_Hierarchy
 *
 * @package Amwal
 */

get_header();

?>
<div id="primary" class="content-area <?php amwal_content_columns() ?>">
	<main id="main" class="site-main portfolio-showcase amwal-portfolio-grid">

		<?php if ( have_posts() ) : ?>
			<div class="row">
				<?php echo amwal_taxs_filter(); ?>
				<div class="portfolio-list">

					<?php /* Start the Loop */ ?>
					<?php while ( have_posts() ) : the_post(); ?>

						<?php
						get_template_part( 'parts/content', 'portfolio' );
						?>
					<?php endwhile; ?>
				</div>
			</div>
			<div class="post-pagination">
				<?php amwal_numeric_pagination(); ?>
			</div>
		<?php else : ?>

			<?php get_template_part( 'parts/content', 'none' ); ?>

		<?php endif; ?>

	</main>
	<!-- #main -->
</div><!-- #primary -->

<?php get_sidebar(); ?>
<?php get_footer(); ?>
