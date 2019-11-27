<?php
/**
 * @package Amwal
 */

$col_class = 'item-new-list';

?>

<article id="post-<?php the_ID(); ?>" <?php post_class( $col_class ); ?>>
	<div class="entry-content">
		<?php
		the_title( sprintf( '<h2 class="entry-title"><a href="%s" class="post-title" rel="bookmark">', esc_url( get_permalink() ) ), '</a></h2>' );
		?>
		<?php
		echo amwal_posted_on();
		?>
		<div class="entry-desc">
			<?php
			the_excerpt();
			?>
		</div>

		<a class="btn-link" href="<?php the_permalink() ?>"><?php esc_html_e( 'Read more', 'amwal' ) ?></a>
	</div>
</article>