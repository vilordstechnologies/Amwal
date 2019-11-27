<?php
/**
 * The template for displaying 404 pages (Not Found).
 *
 * @package Amwal
 */

get_header(); ?>

<div id="primary" class="content-area">
	<main id="main" class="site-main">

		<section class="error-404 text-center">
			<div class="not-found container">
				<div class="page-content col-sm-8 col-sm-offset-2 col-md-8 col-md-offset-2">
					<?php
						$logo = amwal_get_option( 'logo_404' );
						if( ! $logo ) {
							$logo = get_template_directory_uri() . '/img/logo/logo.png';
						}
					?>
					<a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="logo-404">
						<img  alt="<?php echo esc_attr( get_bloginfo( 'name' ) ); ?>" src="<?php echo esc_url( $logo ); ?>" />
					</a>
					<p>
						<?php
							esc_html_e('We are really sorry, but the page you requested is missing...Perhaps searching again can help. Or back to', 'amwal');
						?>
						<a href="<?php echo esc_url( home_url( '/' ) ); ?>" ><?php esc_html_e( 'home page', 'amwal' ); ?></a>
					</p>
					<h2><?php esc_html_e('Error', 'amwal'); ?></h2>
					<h1 class="page-title"><?php esc_html_e('404', 'amwal'); ?></h1>
					<h3><?php esc_html_e( 'This page not found', 'amwal' ); ?></h3>

					<?php get_search_form(); ?>

					<div class="copyright"><?php echo do_shortcode( wp_kses( amwal_get_option( 'footer_copyright' ), wp_kses_allowed_html( 'post' ) ) ) ?></div>

				</div><!-- .page-content -->

			</div>
		</section><!-- .error-404 -->

	</main><!-- #main -->
</div><!-- #primary -->

<?php get_footer(); ?>
