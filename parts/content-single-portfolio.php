<?php
/**
 * @package Amwal
 */
?>
<div id="post-<?php the_ID(); ?>" <?php post_class( 'portfolio-item portfolio-single' ); ?>>

	<div class="entry-content">

		<div class="entry-desc">
			<?php the_content(); ?>
		</div>

	</div>
	<!-- .entry-content -->
</div><!-- #post-## -->

