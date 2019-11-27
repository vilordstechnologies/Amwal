<?php
/**
 * Custom functions for displaying comments
 *
 * @package Amwal
 */
/**
 * Comment callback function
 *
 * @param object $comment
 * @param array  $args
 * @param int    $depth
 */
function amwal_comment( $comment, $args, $depth ) {
	$GLOBALS['comment'] = $comment;
	extract( $args, EXTR_SKIP );

	if ( 'div' == $args['style'] ) {
		$tag = 'div';
		$add_below = 'comment';
	} else {
		$tag = 'li';
		$add_below = 'div-comment';
	}
	?>
	<<?php echo $tag ?> id="comment-<?php comment_ID() ?>" <?php comment_class( empty($args['has_children']) ? '' : 'parent' ) ?>>
	<?php if ( 'div' != $args['style'] ) : ?>
		<article id="div-comment-<?php comment_ID() ?>" class="comment-body">
	<?php endif; ?>

	<div class="comment-author vcard">
		<?php if( $args['avatar_size'] != 0 ) echo get_avatar( $comment, $args['avatar_size'] ); ?>
		<div class="reply">
			<?php edit_comment_link( esc_html__( 'Edit', 'amwal' ), '  ', '' ); ?>
			<?php comment_reply_link( array_merge( $args, array('add_below' => $add_below, 'reply_text' => '<i class="fa fa-reply"></i>', 'depth' => $depth, 'max_depth' => $args['max_depth']) ) ); ?>
		</div>
	</div>


	<div class="comment-content">

		<div class="comment-metadata">
			<?php printf( '<cite class="fn">%s</cite>', get_comment_author_link() ); ?>
			<span>
				<i class="fa fa-calendar"></i>
				<a href="<?php echo htmlspecialchars( get_comment_link( $comment->comment_ID ) ); ?>" class="date">
					<?php
					printf( esc_html__( 'Posted on %s','amwal' ), get_comment_date( 'd M, Y' ) ); ?>
				</a>
			</span>
		</div>
		<?php if ( $comment->comment_approved == '0' ) : ?>
			<em class="comment-awaiting-moderation"><?php esc_html_e( 'Your comment is awaiting moderation.', 'amwal' ); ?></em>
			<br/>
		<?php else: ?>
			<?php comment_text(); ?>
		<?php endif; ?>


	</div>


	<?php if ( 'div' != $args['style'] ) : ?>
		</article>
	<?php endif; ?>
	<?php
}