<?php
/**
 * @package Amwal
 */

$css_class = 'portfolio-item portfolio-wapper col-md-4 col-sm-6 col-xs-12';

$image_size = 'amwal-portfolio-grid';

$categories = wp_get_post_terms( get_the_ID(), 'portfolio_category' );

$cat_name = '';
if ( $categories ) {
	$cat_name = sprintf(
		'<a class="portfolio-cat" href="%s">%s</a>',
		esc_url( get_term_link( $categories[0]->term_id ) ),
		esc_attr( $categories[0]->name )
	);
}

?>

<div id="post-<?php the_ID(); ?>" <?php post_class( esc_attr($css_class) ); ?>>
	<div class="entry-content">
		<div class="portfolio-image">
			<?php
				echo amwal_entry_thumbnail( $image_size );
			?>
			<div class="overlay-project"></div>
			<div class="content">
			<?php
				the_title( sprintf( '<h2><a href="%s" class="title" rel="bookmark">', esc_url( get_permalink() ) ), '</a></h2>' );
				echo $cat_name;
			?>
			</div>
		</div>
	</div>
	<!-- .entry-content -->
</div><!-- #post-## -->
