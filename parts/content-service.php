<?php
/**
 * @package Amwal
 */

$checkthumb = amwal_entry_thumbnail('amwal-portfolio-wide');

$css_class  = 'col-sm-12 col-md-12 no-offset no-thumb';

$col_class = 'amwal-service-item  col-md-12 col-sm-12 col-xs-12';

$col_header = 'service-col-left col-md-6 col-sm-6';
?>

<div id="post-<?php the_ID(); ?>" <?php post_class( esc_attr($col_class) ); ?> >
	<div class="row">
		<?php if ( ! empty( $checkthumb ) ) :
			$css_class = 'service-col-right col-sm-8 col-md-8 entry-content-offset';
			?>
			<div class="<?php echo esc_attr( $col_header ); ?>">
				<header class="entry-header">
					<?php echo $checkthumb;?>
				</header>
				<!-- .entry-header -->
			</div>
		<?php endif; ?>
		<div class="<?php echo esc_attr( $css_class ); ?>">
			<div class="entry-content">
				<?php
					the_title( sprintf( '<h2 class="entry-title"><a href="%s" class="service-title" rel="bookmark">', esc_url( get_permalink() ) ), '</a></h2>' );
				?>
				<div class="service-content">
					<div class="entry-desc">
						<?php
							 amwal_service_excerpt_length();
						?>
					</div>
					<a class="link view-more" href="<?php the_permalink() ?>"><?php esc_html_e( 'Read more', 'amwal' ) ?></a>
				</div>

			</div>
		</div>

	</div>

</div><!-- #post-## -->
