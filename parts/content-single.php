<?php
/**
 * @package Amwal
 */
?>
<article id="post-<?php the_ID(); ?>" <?php post_class( 'item-new-list blog-single' ); ?>>

	<header class="entry-header">
		<?php echo amwal_entry_thumbnail( 'amwal-blog-large-thumb' ); ?>
		<!-- .entry-header -->
	</header>
	<!-- .entry-header -->

	<div class="entry-content">

		<?php echo amwal_posted_on(); ?>
		<div class="entry-desc">
			<?php the_content(); ?>
		</div>
		<?php
		wp_link_pages(
			array(
				'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'amwal' ),
				'after'  => '</div>',
			)
		);
		?>
	</div>
	<!-- .entry-content -->

	<footer class="entry-footer footer-single ">
		<div class="row">
			<div class="col-md-7 col-sm-7 col-xs-12 text-left">
				<i class="fa fa-tags"></i>
				<?php if( has_category() ) : ?>
					<span class="category-links"><?php the_category( ', ' ) ?></span>
				<?php endif; ?>
			</div>
			<div class="col-md-5 col-sm-5 col-xs-12">
				<?php
				if( amwal_get_option( 'single_sharing' ) ) {
					$image = amwal_get_image( array(
						'size'     => 'full',
						'format'   => 'src',
						'meta_key' => 'image',
						'echo'     => false,
					) );
					amwal_share_link_socials( get_the_title(), esc_url(get_permalink()), $image );
				}
				?>
			</div>
		</div>
	</footer>
	<!-- .entry-footer -->
</article><!-- #post-## -->
