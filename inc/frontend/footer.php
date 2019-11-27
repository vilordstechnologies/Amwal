<?php
/**
 * Hooks for template footer
 *
 * @package Amwal
 */


/**
 * Display socials in footer
 *
 * @since 1.0.0
 */
function amwal_footer_socials() {

	if ( ! amwal_get_option( 'footer_extra' ) ) {
		return;
	}

	$footer_extra_layout = amwal_get_option( 'footer_extra_layout' );
	if ( $footer_extra_layout ) {
		$css_class = ' footer-extra-layout-' . esc_attr( $footer_extra_layout );
	}

	$footer_extra_skin = amwal_get_option( 'footer_extra_dark_skin' );
	if ( $footer_extra_skin ) {
		$css_class .= ' extra-dark-skin';
	}

	printf( '<div id="footer-extra" class="footer-extra footer-area %s"><div class="container footer-container">', $css_class );

	if ( $footer_extra_layout == '2' ) {
		$extra_logo = amwal_get_option( 'footer_extra_logo' );
		if ( ! $extra_logo ) {
			if ( amwal_get_option( 'footer_extra_dark_skin' ) ) {
				$extra_logo = get_template_directory_uri() . '/img/logo/logo.png';
			} else {
				$extra_logo = get_template_directory_uri() . '/img/logo/logo2.png';
			}
		}

		printf(
			'<a href="%s" class="footer-extra-logo">' .
			'   <img src="%s" alt="%s">' .
			'</a>',
			esc_url( home_url( '/' ) ),
			esc_url( $extra_logo ),
			esc_attr( get_bloginfo( 'name' ) )
		);
	}


	$footer_socials_content = apply_filters( 'footer_socials_content', amwal_get_option( 'footer_socials_content' ) );
	if ( ! empty( $footer_socials_content ) ) {
		printf( '<div class="footer-social-content">%s</div>', wp_kses( $footer_socials_content, wp_kses_allowed_html( 'post' ) ) );
	}

	$footer_social = amwal_get_option( 'footer_socials' );

	$socials = amwal_get_socials();

	if ( $footer_social ) {

		printf( '<div class="socials">' );

		foreach ( $footer_social as $social ) {
			foreach ( $socials as $name => $label ) {

				$link_url = $social['link_url'];

				if ( preg_match( '/' . $name . '/', $link_url ) ) {

					printf( '<a href="%s" target="_blank"><i class="fa fa-%s"></i></a>', esc_url( $link_url ), esc_attr( $name ) );

					break;
				}
			}
		}
		printf( '</div>' );
	}

	printf( '</div></div>' );
}

function amwal_footer_extra_top() {
	if ( amwal_get_option( 'footer_extra_position' ) != 'top' ) {
		return;
	}
	amwal_footer_socials();
}

add_action( 'amwal_before_footer', 'amwal_footer_extra_top', 20 );

function amwal_footer_extra_bottom() {
	if ( amwal_get_option( 'footer_extra_position' ) != 'bottom' ) {
		return;
	}
	amwal_footer_socials();
}

add_action( 'amwal_footer', 'amwal_footer_extra_bottom', 30 );


/**
 * Display widgets on site footer
 */
function amwal_footer_sidebars() {

	if ( ! amwal_get_option( 'footer_widget' ) ) {
		return;
	}
	?>
	<div id="footer-widgets" class="footer-widgets widgets-area footer-area">
		<div class="container footer-container">
			<div class="row">
				<?php
				$columns = max( 1, absint( amwal_get_option( 'footer_widget_columns' ) ) );

				for ( $i = 1; $i <= $columns; $i ++ ) :
					$col_class = 'col-xs-12 col-sm-6 col-md-' . floor( 12 / $columns );
					?>
					<div class="footer-sidebar footer-<?php echo esc_attr( $i ) ?> <?php echo esc_attr( $col_class ) ?>">
						<?php
						$sidebar = 'footer-sidebar-' . $i;
						if ( is_active_sidebar( $sidebar ) ) {
							dynamic_sidebar( $sidebar );
						} ?>
					</div>
				<?php endfor; ?>

			</div>
		</div>
	</div>
	<?php
}

add_action( 'amwal_footer', 'amwal_footer_sidebars', 25 );

/**
 * Display newsletter in footer
 *
 * @since 1.0.0
 */
function amwal_footer_newsletter() {
	if ( ! amwal_get_option( 'footer_newsletter' ) ) {
		return;
	}

	$newsletter = get_post_meta( get_the_ID(), 'hide_newsletter', true);

	if ( $newsletter ) {
		return;
	}

	?>

	<div class="footer-newsletter amwal-newletter">
		<div class="container">
			<div class="row">
				<div class="col-md-4 col-sm-4 col-xs-12 b-content">
					<div class="sub-title">
						<?php
						echo wp_kses( amwal_get_option( 'footer_newsletter_subtitle' ), wp_kses_allowed_html( 'post' ) );
						?>
					</div>
					<?php
					$output  = array();
					$n_title = wp_kses( amwal_get_option( 'footer_newsletter_title' ), wp_kses_allowed_html( 'post' ) );
					if ( $n_title ) {
						$title = explode( '|', $n_title );
						if ( sizeof( $title ) > 2 ) {
							$output[] = printf( '<div class="title" >%s <span>%s </span>%s</div>', $title[0], $title[1], $title[2] );
						} elseif ( sizeof( $title ) > 1 ) {
							$output[] = printf( '<div class="title">%s <span>%s </span></div>', array_shift( $title ), implode( ' ', $title ) );
						} else {
							$output[] = printf( '<div class="title">%s</div>', $n_title );
						}
					}
					?>
				</div>
				<div class="col-md-8 col-sm-8 col-xs-12 b-form">
					<div class="letter-field">
						<?php echo do_shortcode( wp_kses( amwal_get_option( 'footer_newsletter_form' ), wp_kses_allowed_html( 'post' ) ) ); ?>
					</div>
				</div>
			</div>
		</div>
	</div>
	<?php
}

add_action( 'amwal_footer', 'amwal_footer_newsletter', 20 );
/**
 * Display footer content
 */
function amwal_footer_copyright() {
	$check_footer_menu = false;
	$col_footer_class  = ' col-xs-12 col-sm-12 col-md-12 text-center';
	if ( has_nav_menu( 'footer' ) ) {
		$check_footer_menu = true;
		$col_footer_class  = ' col-xs-12 col-sm-12 col-md-6';
	}

	$copyright  = amwal_get_option( 'footer_copyright_transparent' );
	$copy_class = '';
	if ( intval( $copyright ) ) {
		$copy_class .= ' copyright-transparent';

		if ( intval( amwal_get_option( 'footer_copyright_border_top' ) ) ) {
			$copy_class .= ' cr-border-top';
		}
	}
	?>


	<div class="site-info <?php echo esc_attr( $copy_class ); ?>">
		<div class="container">
			<div class="row">
				<?php if ( $check_footer_menu ) : ?>
					<div class="col-menu <?php echo esc_attr( $col_footer_class ); ?>">
						<?php
						wp_nav_menu(
							array(
								'theme_location'  => 'footer',
								'container'       => 'nav',
								'container_id'    => 'footer-menu',
								'container_class' => 'footer-menu',
							)
						);
						?>
					</div>
				<?php endif; ?>
				<div class="col-copyright <?php echo esc_attr( $col_footer_class ); ?>">
					<div class="copyright"><?php echo do_shortcode( wp_kses( amwal_get_option( 'footer_copyright' ), wp_kses_allowed_html( 'post' ) ) ) ?></div>
				</div>

			</div>
		</div>
	</div>
	<?php
}

function amwal_footer_copyright_top() {
	if ( amwal_get_option( 'footer_copyright_position' ) != 'top' ) {
		return;
	}

	amwal_footer_copyright();
}

add_action( 'amwal_before_footer', 'amwal_footer_copyright_top', 25 );

function amwal_footer_copyright_bottom() {
	if ( amwal_get_option( 'footer_copyright_position' ) != 'bottom' ) {
		return;
	}

	amwal_footer_copyright();
}

add_action( 'amwal_footer', 'amwal_footer_copyright_bottom', 50 );

/**
 * Display go to top button
 *
 * @since 1.0
 */
function amwal_go_top_button() {
	?>
	<a id="scroll-top" class="backtotop" href="#page-top">
		<i class="fa fa-chevron-up" aria-hidden="true"></i>
	</a>
	<?php
}

add_action( 'amwal_after_footer', 'amwal_go_top_button' );

/**
 * Add off mobile menu to footer
 *
 * @since 1.0.0
 */
function amwal_off_canvas_mobile_menu() {
	?>
	<div class="primary-mobile-nav" id="primary-mobile-nav">
		<a href="#" class="close-canvas-mobile-panel">
			<span class="am-navbar-icon">
				<span class="navbars-line"></span>
			</span>
		</a>
		<?php

		$location = '';
		if ( has_nav_menu( 'mobile' ) ) {
			$location = 'mobile';
		} elseif ( has_nav_menu( 'primary' ) ) {
			$location = 'primary';
		}

		if ( $location ) {
			wp_nav_menu(
				array(
					'theme_location' => $location,
					'container'      => false
				)
			);
		}

		printf(
			'<div class="extra-menu-item menu-item-search">
				<i class="t-icon fa fa-search" aria-hidden="true"></i>
				<form class="search-form" method="get" action="%s">
					<input type="text" placeholder="%s" name="s" class="search-field">
					<input type="hidden" name="post_type" value="product">
					<input type="submit" class="btn-submit">
				</form>
			</div>',
			esc_url( home_url( '/' ) ),
			esc_attr__( 'Type here', 'amwal' )
		);

		?>

	</div>
	<?php
}

add_action( 'wp_footer', 'amwal_off_canvas_mobile_menu' );


/**
 * Display a layer to close canvas panel everywhere inside page
 *
 * @since 1.0.0
 */
function amwal_site_canvas_layer() {
	?>
	<div id="off-canvas-layer" class="off-canvas-layer"></div>
	<?php
}

add_action( 'wp_footer', 'amwal_site_canvas_layer' );

/**
 * Add a modal on the footer, for displaying footer modal
 *
 * @since 1.0.0
 */
function amwal_footer_modal() {
	?>
	<div id="modal" class="modal fade" tabindex="-1" aria-hidden="true">
		<div class="item-detail">
			<div class="modal-dialog woocommerce">
				<div class="modal-content product">
					<div class="modal-header">
						<button type="button" class="close fp-close-modal" data-dismiss="modal">&#215;<span class="sr-only"></span>
						</button>
					</div>
					<div class="modal-body"></div>
				</div>
			</div>
		</div>
	</div>
	<?php
}

add_action( 'wp_footer', 'amwal_footer_modal' );
