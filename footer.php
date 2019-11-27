<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after
 *
 * @package Amwal
 */
?>

<?php if( !is_404() && !is_page_template( 'template-coming-soon.php' ) ): ?>

	<?php do_action( 'amwal_before_site_content_close' ); ?>

</div><!-- #content -->

<?php do_action( 'amwal_before_footer' ); ?>

<?php
	$footer_class = '';

	if( ! amwal_get_option('footer_background') ){
		$footer_class .= ' footer-no-bg';
	}

	if( amwal_get_option( 'footer_background_overlay' ) ) {
		$footer_class .= ' footer-overlay';
	}
?>

<footer id="colophon" class="site-footer <?php echo esc_attr($footer_class); ?>">

	<?php do_action( 'amwal_footer' ); ?>

</footer><!-- #colophon -->

<?php do_action( 'amwal_after_footer' ); ?>

<?php endif; ?>

</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
