<?php
/**
 * The template for displaying comments.
 *
 * This is the template that displays the area of the page that contains both the current comments
 * and the comment form.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package Amwal
 */

/*
 * If the current post is protected by a password and
 * the visitor has not yet entered the password we will
 * return early without loading the comments.
 */
if ( post_password_required() ) {
	return;
}
?>

<div id="comments" class="comments-area">

	<?php // You can start editing here -- including this comment! ?>

	<?php if ( have_comments() ) : ?>
		<h2 class="comments-title">
			<?php
			esc_html_e( 'Comments', 'amwal');
			?>
		</h2>

		<ol class="comment-list">
			<?php
			wp_list_comments( array(
				'style'       => 'ol',
				'short_ping'  => true,
				'avatar_size' => 120,
				'callback'    => 'amwal_comment'
			) );
			?>
		</ol><!-- .comment-list -->

		<?php if ( get_comment_pages_count() > 1 && get_option( 'page_comments' ) ) : // Are there comments to navigate through? ?>
			<nav id="comment-nav-below" class="navigation comment-navigation">
				<h2 class="screen-reader-text"><?php esc_html_e( 'Comment navigation', 'amwal' ); ?></h2>
				<div class="nav-links">

					<div class="nav-previous"><?php previous_comments_link( esc_html__( 'Older Comments', 'amwal' ) ); ?></div>
					<div class="nav-next"><?php next_comments_link( esc_html__( 'Newer Comments', 'amwal' ) ); ?></div>

				</div><!-- .nav-links -->
			</nav><!-- #comment-nav-below -->
		<?php endif; // Check for comment navigation. ?>

	<?php endif; // Check for have_comments(). ?>

	<?php
	// If comments are closed and there are comments, let's leave a little note, shall we?
	if ( ! comments_open() && get_comments_number() && post_type_supports( get_post_type(), 'comments' ) ) :
		?>
		<p class="no-comments"><?php esc_html_e( 'Comments are closed.', 'amwal' ); ?></p>
	<?php endif; ?>


	<?php
	$fields = amwal_comment_form_fields();
	$comment_field = '<p class="comment-form-comment col-md-12 col-sm-12"><textarea id="comment" placeholder="' . esc_html__( 'Your Comment', 'amwal' ) . '" name="comment" cols="45" rows="7" aria-required="true"></textarea></p>';
	$title_reply_before = '<h3 id="reply-title" class="comment-reply-title">';
	?>
	<div class="clearfix"></div>
	<?php comment_form(
		array(
			'fields'        => $fields,
			'comment_field' => $comment_field,
			'title_reply_before' => $title_reply_before,
		)
	)?>

</div><!-- #comments -->