<?php
/**
 * The template part for displaying the main logo on header
 *
 * @package Amwal
 */

$logo = amwal_get_option( 'logo' );
$logo_sticky = amwal_get_option( 'logo_sticky' );
$layout = amwal_get_option( 'header_layout' );
$header_transparent = amwal_get_option( 'header_transparent' );

if( is_page_template( 'template-homepage.php' ) ) {
	if( in_array( $layout, array( '1', '2' ) ) && intval($header_transparent) ) {
		$logo = amwal_get_option( 'logo_transparent' );

		if( ! $logo ) {
			$logo = get_template_directory_uri() . '/img/logo/logo.png';
		}
	}
}

if ( $layout == '3' ){
	if( ! $logo ) {
		$logo = get_template_directory_uri() . '/img/logo/logo-v3.png';
	}
}

if( ! $logo ) {
	$logo = get_template_directory_uri() . '/img/logo/logo2.png';
}
if ( ! $logo_sticky ) {
	$logo_sticky = get_template_directory_uri() . '/img/logo/logo2.png';
}

?>
<a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="logo">
	<img class="logo-default img-responsive" alt="<?php echo esc_attr( get_bloginfo( 'name' ) ); ?>" src="<?php echo esc_url( $logo ); ?>" />
	<img class="logo-sticky img-responsive" alt="<?php echo esc_attr( get_bloginfo( 'name' ) ); ?>" src="<?php echo esc_url( $logo_sticky ); ?>" />
</a>

<?php
printf(
	'<%1$s class="site-title"><a href="%2$s" rel="home">%3$s</a></%1$s>',
	is_home() || is_front_page() ? 'h1' : 'p',
	esc_url( home_url( '/' ) ),
	get_bloginfo( 'name' )
);
?>
<h2 class="site-description"><?php bloginfo( 'description' ); ?></h2>
