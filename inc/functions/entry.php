<?php
/**
 * Custom functions for entry.
 *
 * @package Amwal
 */

/**
 * Prints HTML with meta information for the current post-date/time and author.
 *
 * @since 1.0.0
 */
function amwal_posted_on() {
	$time_string   = '<time class="entry-date published updated" datetime="%1$s">%2$s</time>';
	$time_string   = sprintf(
		$time_string,
		esc_attr( get_the_date( 'c' ) ),
		esc_html( get_the_date() )
	);
	$archive_year  = get_the_time( 'Y' );
	$archive_month = get_the_time( 'M' );
	$archive_day   = get_the_time( 'd' );

	$posted_on = sprintf(
		'<a href="' . esc_url( get_day_link( $archive_year, $archive_month, $archive_day ) ) . '" class="entry-date entry-meta" rel="bookmark"><i class="icon icon-calendar" aria-hidden="true"></i>' . $time_string . '</a>'
	);
	$posted_on .= sprintf(
		'<a class="url entry-author entry-meta" href="' . esc_url( get_author_posts_url( get_the_author_meta( 'ID' ) ) ) . '"><i class="icon icon-user"></i>' . esc_html( get_the_author() ) . '</a>'
	);

	$comments = wp_count_comments( get_the_ID() );
	if ( $comments ) {
		$total_comments = $comments->total_comments;
		$comments       = intval( $total_comments );
	}
	$comment = sprintf(
		'<span class="entry-comment entry-meta"><i class="icon icon-bubbles2"></i>' . $comments . '</span>'
	);

	return '<div class="entry-metas">' . $posted_on . $comment . '</div>';
}

/**
 * Prints HTML with meta information for the categories, tags and comments.
 *
 * @since 1.0.0
 */
function amwal_entry_footer() {
	// Hide category and tag text for pages.
	if ( 'post' == get_post_type() ) {
		/* translators: used between list items, there is a space after the comma */
		$categories_list = get_the_category_list( ', ' );
		if ( $categories_list ) {
			printf( '<span class="cat-links">' . esc_html__( 'Posted in %1$s', 'amwal' ) . '</span>', $categories_list );
		}
		/* translators: used between list items, there is a space after the comma */
		$tags_list = get_the_tag_list( '', ', ' );
		if ( $tags_list ) {
			printf( '<span class="tags-links">' . esc_html__( 'Tagged %1$s', 'amwal' ) . '</span>', $tags_list );
		}
	}
	if ( ! is_single() && ! post_password_required() && ( comments_open() || get_comments_number() ) ) {
		echo '<span class="comments-link">';
		comments_popup_link( esc_html__( 'Leave a comment', 'amwal' ), esc_html__( '1 Comment', 'amwal' ), esc_html__( '% Comments', 'amwal' ) );
		echo '</span>';
	}
	edit_post_link( esc_html__( 'Edit', 'amwal' ), '<span class="edit-link">', '</span>' );
}

/**
 * Get or display limited words from given string.
 * Strips all tags and shortcodes from string.
 *
 * @since 1.0.0
 *
 * @param integer $num_words The maximum number of words
 * @param string  $more      More link.
 * @param bool    $echo      Echo or return output
 *
 * @return string|void Limited content.
 */
function amwal_content_limit( $content, $num_words, $more = "&hellip;", $echo = true ) {

	// Strip tags and shortcodes so the content truncation count is done correctly
	$content = strip_tags( strip_shortcodes( $content ), apply_filters( 'amwal_content_limit_allowed_tags', '<script>,<style>' ) );

	// Remove inline styles / scripts
	$content = trim( preg_replace( '#<(s(cript|tyle)).*?</\1>#si', '', $content ) );

	// Truncate $content to $max_char
	$content = wp_trim_words( $content, $num_words );

	if ( $more ) {
		$output = sprintf(
			'<p>%s <a href="%s" class="more-link" title="%s">%s</a></p>',
			$content,
			get_permalink(),
			sprintf( esc_html__( 'Continue reading &quot;%s&quot;', 'amwal' ), the_title_attribute( 'echo=0' ) ),
			esc_html( $more )
		);
	} else {
		$output = sprintf( '<p>%s</p>', $content );
	}

	if ( ! $echo ) {
		return $output;
	}

	echo $output;
}


/**
 * Show entry thumbnail base on its format
 *
 * @since  1.0
 */
function amwal_entry_thumbnail( $size = 'amwal-blog-thumb' ) {
	$html      = '';
	$css_class = 'format-' . get_post_format();

	switch ( get_post_format() ) {
		case 'image':
			$image = amwal_get_image(
				array(
					'size'     => $size,
					'format'   => 'src',
					'meta_key' => 'image',
					'echo'     => false,
				)
			);

			if ( ! $image ) {
				break;
			}

			$html = sprintf(
				'<a class="entry-image" href="%1$s" title="%2$s"><img src="%3$s" alt="%2$s"></a>',
				esc_url( get_permalink() ),
				the_title_attribute( 'echo=0' ),
				esc_url( $image )
			);
			break;
		case 'gallery':
			$images = amwal_get_meta( 'images', "type=image&size=$size" );

			if ( empty( $images ) ) {
				break;
			}

			$gallery = array();
			foreach ( $images as $image ) {
				$gallery[] = '<li>' . '<img src="' . esc_url( $image['url'] ) . '" alt="' . the_title_attribute( 'echo=0' ) . '">' . '</li>';
			}
			$html .= '<div class="format-gallery-slider entry-image"><ul class="slides">' . implode( '', $gallery ) . '</ul></div>';
			break;
		case 'audio':

			$thumb = get_the_post_thumbnail( get_the_ID(), $size );
			if ( ! empty( $thumb ) ) {
				$html .= '<a class="entry-image" href="' . get_permalink() . '">' . $thumb . '</a>';
				$css_class .= ' has-thumb';
			} else {
				$css_class .= ' no-thumb';
			}

			$audio = amwal_get_meta( 'audio' );
			if ( ! $audio ) {
				break;
			}

			// If URL: show oEmbed HTML or jPlayer
			if ( filter_var( $audio, FILTER_VALIDATE_URL ) ) {
				// Try oEmbed first
				if ( $oembed = @wp_oembed_get( $audio ) ) {
					$html .= $oembed;
				} // Use audio shortcode
				else {
					$html .= '<div class="audio-player">' . wp_audio_shortcode( array( 'src' => $audio ) ) . '</div>';
				}
			} // If embed code: just display
			else {
				$html .= $audio;
			}
			break;

		case 'video':
			$video = amwal_get_meta( 'video' );
			if ( ! $video ) {
				break;
			}
			$thumb = get_the_post_thumbnail( get_the_ID(), $size );

			if ( ! empty( $thumb ) ) {
				$html .= '<a class="entry-image popup-youtube" href="' . $video . '">' . $thumb . '<i class="fa fa-play"></i></a>';
			} else {
				$css_class .= ' no-thumb';
			}

			break;

		case 'link':
			$thumb = get_the_post_thumbnail( get_the_ID(), $size );
			if ( ! empty( $thumb ) ) {
				$html .= '<a class="entry-image" href="' . get_permalink() . '">' . $thumb . '</a>';
				$css_class .= ' has-thumb';
			} else {
				$css_class .= ' no-thumb';
			}

			$link = amwal_get_meta( 'url' );
			$text = amwal_get_meta( 'url_text' );

			if ( ! $link ) {
				break;
			}

			$html .= sprintf( '<a href="%s" class="link-block">%s</a>', esc_url( $link ), $text ? $text : $link );

			break;
		case 'quote':

			$thumb = get_the_post_thumbnail( get_the_ID(), $size );
			if ( ! empty( $thumb ) ) {
				$html .= '<a class="entry-image" href="' . get_permalink() . '">' . $thumb . '</a>';
				$css_class .= ' has-thumb';
			} else {
				$css_class .= ' no-thumb';
			}

			$quote      = amwal_get_meta( 'quote' );
			$author     = amwal_get_meta( 'quote_author' );
			$author_url = amwal_get_meta( 'author_url' );

			if ( ! $quote ) {
				break;
			}

			$html .= sprintf(
				'<blockquote>%s<cite>%s</cite></blockquote>',
				esc_html( $quote ),
				empty( $author_url ) ? $author : '<a href="' . esc_url( $author_url ) . '"> - ' . $author . '</a>'
			);

			break;

		default:
			$thumb = amwal_get_image(
				array(
					'size'     => $size,
					'meta_key' => 'image',
					'echo'     => false,
				)
			);
			if ( empty( $thumb ) ) {
				break;
			}

			$html .= '<a class="entry-image" href="' . get_permalink() . '">' . $thumb . '</a>';
			break;
	}

	if ( $html = apply_filters( __FUNCTION__, $html, get_post_format() ) ) {
		$css_class = esc_attr( $css_class );

		return "<div class='entry-format $css_class'>$html</div>";
	}
}

/**
 * Change length of the excerpt
 *
 * @since  1.0
 *
 * @param string $length
 *
 * @return string
 */
function amwal_excerpt_length() {

	$excerpt_length = intval( amwal_get_option( 'excerpt_length' ) );
	$content = get_the_excerpt();
	if(empty($content)){
		$content = get_the_content();
	}
	amwal_content_limit( $content, $excerpt_length, '' );
}


function amwal_service_excerpt_length() {
	$excerpt_length = intval( amwal_get_option( 'service_excerpt_length' ) );
	amwal_content_limit( get_the_excerpt(), $excerpt_length, '' );

}


function amwal_team_excerpt_length() {
	$excerpt_length = intval( amwal_get_option( 'team_excerpt_length' ) );
	amwal_content_limit( get_the_excerpt(), $excerpt_length, '' );
}


function amwal_testi_excerpt_length() {
	$excerpt_length = intval( amwal_get_option( 'testimonial_excerpt_length' ) );
	amwal_content_limit( get_the_excerpt(), $excerpt_length, '' );
}

/**
 * Share link socials
 *
 * @since  1.0
 */
function amwal_share_link_socials( $title, $link, $media ) {
	?>
	<div class="social-links">
		<a target="_blank" title="<?php echo esc_attr( $title ); ?>" class="share-facebook amwal-facebook"
		   href="http://www.facebook.com/sharer.php?u=<?php echo urlencode( $link ); ?>&t=<?php echo urlencode( $title ); ?>"><i
				class="fa fa-facebook"></i></a>
		<a class="share-twitter amwal-twitter"
		   href="http://twitter.com/share?text=<?php echo esc_attr( $title ); ?>&url=<?php echo urlencode( $link ); ?>"
		   title="<?php echo urlencode( $title ); ?>" target="_blank"><i class="fa fa-twitter"></i></a>
		<a target="_blank" title="<?php echo esc_attr( $title ); ?>" class="share-google-plus amwal-google-plus"
		   href="https://plus.google.com/share?url=<?php echo urlencode( $link ); ?>&text=<?php echo urlencode( $title ); ?>"><i
				class="fa fa-google-plus"></i></a>
		<a target="_blank" title="<?php echo esc_attr( $title ); ?>" class="share-linkedin amwal-linkedin"
		   href="http://www.linkedin.com/shareArticle?url=<?php echo urlencode( $link ); ?>&title=<?php echo urlencode( $title ); ?> "><i
				class="fa fa-linkedin"></i></a>
		<a target="_blank" title="<?php echo esc_attr( $title ); ?>" class="share-pinterest amwal-pinterest"
		   href="http://pinterest.com/pin/create/button?media=<?php echo urlencode( $media ); ?>&url=<?php echo urlencode( $link ); ?>&description=<?php echo urlencode( $title ); ?> "><i
				class="fa fa-pinterest"></i></a>
	</div>
	<?php
}

/**
 * Check is homepage
 *
 * @return bool
 */
function amwal_is_homepage() {

	if ( is_page_template( 'template-homepage.php' ) ) {
		return true;
	}

	return false;
}

/**
 * Check is blog
 *
 * @since  1.0
 */

if ( ! function_exists( 'amwal_is_blog' ) ) :
	function amwal_is_blog() {
		if ( ( is_archive() || is_author() || is_category() || is_home() || is_tag() ) && 'post' == get_post_type() ) {
			return true;
		}

		return false;
	}

endif;

/**
 * show taxonomy filter
 *
 * @return string
 */
function amwal_taxs_filter() {

	$portfolio_nav = amwal_get_option( 'portfolio_nav_type' );

	$filters = '';
	$term_id = 0;
	$output  = array();

	if ( $portfolio_nav == 'links' ) {
		$cats = array();
		global $wp_query;

		while ( $wp_query->have_posts() ) {
			$wp_query->the_post();
			$post_categories = wp_get_post_terms( get_the_ID(), 'portfolio_category' );

			foreach ( $post_categories as $cat ) {
				if ( empty( $cats[$cat->term_id] ) ) {
					$cats[$cat->term_id] = array( 'name' => $cat->name, 'slug' => $cat->slug, );
				}
			}
		}

		foreach ( $cats as $category ) {
			$filters .= sprintf( '<li><a href="#filter" data-option-value=".portfolio_category-%s">%s</a></li>', esc_attr( $category['slug'] ), esc_html( $category['name'] ) );
		}

	} elseif ( $portfolio_nav == 'ajax' ) {
		if ( is_tax( 'portfolio_category' ) ) {

			$queried_object = get_queried_object();
			if ( $queried_object ) {
				$term_id = $queried_object->term_id;

			}
		}

		$args       = array(
			'parent'  => $term_id,
			'number'  => apply_filters( 'amwal_portfolio_cats_number', 4 ),
			'orderby' => 'count',
			'order'   => 'desc'
		);
		$categories = get_terms( 'portfolio_category', $args );


		if ( $categories ) {
			foreach ( $categories as $cat ) {
				$filters .= sprintf( '<li><a href="#filter" data-option-value=".portfolio_category-%s">%s</a></li>', esc_attr( $cat->slug ), esc_html( $cat->name ) );
			}
		}

	}

	if ( $filters ) {
		$output[] = sprintf(
			'<ul class="option-set" data-option-key="filter">
				<li><a href="#filter" class="selected" data-option-value="*">%s</a></li>
				 %s
			</ul>',
			esc_html__( 'All', 'amwal' ),
			$filters
		);
	}


	$output = '<div id="portfolio-category-filters" class="filters-dropdown">' . implode( '', $output ) . '</div>';


	return $output;


}

function amwal_team_contact_form() {

	if ( ! amwal_get_option( 'team_contact_form' ) ) {
		return;
	}
	?>

	<div class="team-contact-form">

		<?php printf( '<span class="contact-form-title">%s</span>', esc_html__( 'Contact Advisor', 'amwal' ) ) ?>

		<div class="contact-form-field">
			<?php echo do_shortcode( wp_kses( amwal_get_option( 'team_contact_form' ), wp_kses_allowed_html( 'post' ) ) ); ?>
		</div>
	</div>

	<?php
}

?>