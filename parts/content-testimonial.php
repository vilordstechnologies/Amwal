<?php
/**
 * @package Amwal
 */

$col_class =  ' testimonial-wrapper col-md-12 col-sm-12 col-xs-12';

if( amwal_get_option('testimonial_type') == 'grid' ){
	$col_class = ' testimonial-wrapper col-md-4 col-sm-4 col-xs-12';
}

?>

<div id="post-<?php the_ID(); ?>" <?php post_class( esc_attr( $col_class ) ); ?> >
	<div class="amwal-testimonial-item">
		<div class="entry-thumb">
			<?php
			$avatar = has_post_thumbnail( get_the_ID() ) ? get_the_post_thumbnail( get_the_ID(), 'thumbnail' ) : get_avatar( $email, 100 );
			if ( $avatar ) {
				printf( '<div class="avatar">%s</div>', $avatar );
			}
			?>
		</div>
		<!-- .entry-thumb -->
		<div class="entry-content">
			<div class="entry-desc">
				<?php
				amwal_testi_excerpt_length();
				?>
			</div>

			<?php
			$byline = get_post_meta( get_the_ID(), 'byline', true );
			if ( $byline ) {
				printf( '<div class="testimonial-byline">%s</div>', $byline );
			}
			?>
		</div>
	</div>

</div>
