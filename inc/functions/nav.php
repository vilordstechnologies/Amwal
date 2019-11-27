<?php
/**
 * Custom functions for nav menu
 *
 * @package Amwal
 */


/**
 * Display numeric pagination
 *
 * @since 1.0
 * @return void
 */
function amwal_numeric_pagination() {
	global $wp_query;

	if( $wp_query->max_num_pages < 2 ) {
        return;
	}

	$next_text = esc_html__( 'Next', 'amwal' );
	if( is_post_type_archive( 'portfolio_project') || is_tax( 'portfolio_category' ) ){
		if( amwal_get_option( 'portfolio_nav_type' ) == 'ajax' ){
			$next_text = sprintf('
			<span class="load-more">%s</span><span class="text-loading">%s</span>',
				esc_html__( 'Load More', 'amwal' ),
				esc_html__( 'Loading', 'amwal' )
			);
		}
	}

	?>
	<nav class="navigation paging-navigation numeric-navigation" role="navigation">
		<?php
		$big = 999999999;
		$args = array(
			'base'      => str_replace( $big, '%#%', esc_url( get_pagenum_link( $big ) ) ),
			'total'     => $wp_query->max_num_pages,
			'current'   => max( 1, get_query_var( 'paged' ) ),
			'prev_text' => esc_html__( 'Previous', 'amwal' ),
			'next_text' => $next_text,
			'type'      => 'plain',
		);

		echo paginate_links( $args );
		?>
	</nav>
<?php
}

/**
 * Display navigation to next/previous set of posts when applicable.
 *
 * @since 1.0
 * @return void
 */
function amwal_paging_nav() {
	// Don't print empty markup if there's only one page.
	if ( $GLOBALS['wp_query']->max_num_pages < 2 ) {
		return;
	}
	?>
	<nav class="navigation paging-navigation" role="navigation">
		<div class="nav-links">

			<?php if ( get_next_posts_link() ) : ?>
				<div class="nav-previous"><?php next_posts_link( wp_kses_post( esc_html__( '<span class="meta-nav">&larr;</span> Older posts', 'amwal' ) ) ); ?></div>
			<?php endif; ?>

			<?php if ( get_previous_posts_link() ) : ?>
				<div class="nav-next"><?php previous_posts_link( wp_kses_post( esc_html__( 'Newer posts <span class="meta-nav">&rarr;</span>', 'amwal' ) ) ); ?></div>
			<?php endif; ?>

		</div><!-- .nav-links -->
	</nav><!-- .navigation -->
<?php
}


/**
 * Display navigation to next/previous post when applicable.
 *
 * @since 1.0
 * @return void
 */
function amwal_post_nav() {
	// Don't print empty markup if there's nowhere to navigate.
	$previous = ( is_attachment() ) ? get_post( get_post()->post_parent ) : get_adjacent_post( false, '', true );
	$next     = get_adjacent_post( false, '', false );

	if ( ! $next && ! $previous ) {
		return;
	}
	?>
	<nav class="navigation post-navigation" role="navigation">
		<div class="nav-links">
			<?php
			previous_post_link( '<div class="nav-previous">%link</div>', _x( '<span class="meta-nav">&larr;</span> %title', 'Previous post link', 'amwal' ) );
			next_post_link(     '<div class="nav-next">%link</div>',     _x( '%title <span class="meta-nav">&rarr;</span>', 'Next post link',     'amwal' ) );
			?>
		</div><!-- .nav-links -->
	</nav><!-- .navigation -->
<?php
}
