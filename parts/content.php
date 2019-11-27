<?php
/**
 * @package Amwal
 */

$checkthumb = amwal_entry_thumbnail();

$views     = amwal_get_option( 'blog_view' );
$col_class = 'item-new-list';
$col_header = '';
if ( $views == 'list' ) {
	$col_class .= ' col-md-12 col-sm-12 col-xs-12';
	$col_header .= 'new-col-left col-md-7 col-sm-7 col-xs-12';
} else {
	$col_class .= ' col-md-6 col-sm-6 col-xs-12';
	$col_header .= ' col-md-12 col-sm-12 col-xs-12';
}

$css_class  = 'col-md-12 col-sm-12 col-xs-12 no-offset no-thumb';

$titleLength = intval( amwal_get_option( 'title_length' ) );
?>

<div id="post-<?php the_ID(); ?>" <?php post_class( $col_class ); ?>>
	<div class="row">
		<?php if ( ! empty( $checkthumb ) ) :
			if ( $views == 'list') {
				$css_class = 'new-col-right  col-md-6 col-sm-6 col-xs-12 entry-content-offset';
			} else {
				$css_class = 'col-md-12 col-sm-12 col-xs-12 no-offset';
			}
			?>
			<div class="<?php echo esc_attr( $col_header ); ?>">
				<header class="entry-header">
					<?php echo amwal_entry_thumbnail(); ?>
				</header>
				<!-- .entry-header -->
			</div>
		<?php endif; ?>
		<div class="<?php echo esc_attr( $css_class ); ?>">
			<div class="entry-content">
				<h2 class="entry-title"><a href="<?php the_permalink() ?>" class="post-title" rel="bookmark"><?php echo wp_trim_words( get_the_title(), $titleLength, '...' ); ?></a></h2>
				<?php
				echo amwal_posted_on();
				?>
				<div class="entry-desc">
					<?php
						amwal_excerpt_length();
					?>
				</div>

				<a class="btn-link" href="<?php the_permalink() ?>"><?php esc_html_e( 'Read more', 'amwal' ) ?></a>
			</div>


		</div>

	</div>

</div>