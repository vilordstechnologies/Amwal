<?php
/**
 * Register required, recommended plugins for theme
 *
 * @package Amwal
 */

/**
 * Register required plugins
 *
 * @since  1.0
 */
function amwal_register_required_plugins() {
	$plugins = array(
		array(
			'name'               => esc_html__( 'Meta Box', 'amwal' ),
			'slug'               => 'meta-box',
			'required'           => true,
			'force_activation'   => false,
			'force_deactivation' => false,
		),
		array(
			'name'               => esc_html__( 'Kirki', 'amwal' ),
			'slug'               => 'kirki',
			'required'           => true,
			'force_activation'   => false,
			'force_deactivation' => false,
		),
		array(
			'name'               => esc_html__( 'WooCommerce', 'amwal' ),
			'slug'               => 'woocommerce',
			'required'           => true,
			'force_activation'   => false,
			'force_deactivation' => false,
		),
		array(
			'name'               => esc_html__( 'WPBakery Visual Composer', 'amwal' ),
			'slug'               => 'js_composer',
			'source'             => get_template_directory() . '/plugins/js_composer.zip',
			'required'           => true,
			'force_activation'   => false,
			'force_deactivation' => false,
		),
		array(
			'name'               => esc_html__( 'Revolution Slider', 'amwal' ),
			'slug'               => 'revslider',
			'source'             => get_template_directory() . '/plugins/revslider.zip',
			'required'           => false,
			'force_activation'   => false,
			'force_deactivation' => false,
		),
		array(
			'name'               => esc_html__( 'Amwal Visual Composer Addons', 'amwal' ),
			'slug'               => 'vc-addons-amwal',
			'source'             => get_template_directory() . '/plugins/vc-addons-amwal.zip',
			'required'           => true,
			'force_activation'   => false,
			'force_deactivation' => false,
			'version'            => '1.0.1',
		),
		array(
			'name'               => esc_html__( 'Contact Form 7', 'amwal' ),
			'slug'               => 'contact-form-7',
			'required'           => false,
			'force_activation'   => false,
			'force_deactivation' => false,
		),
		array(
			'name'               => esc_html__( 'MailChimp for WordPress', 'amwal' ),
			'slug'               => 'mailchimp-for-wp',
			'required'           => false,
			'force_activation'   => false,
			'force_deactivation' => false,
		),
		array(
			'name'               => esc_html__( 'WP Job Manager', 'amwal' ),
			'slug'               => 'wp-job-manager',
			'required'           => false,
			'force_activation'   => false,
			'force_deactivation' => false,
		),
		array(
			'name'               => esc_html__( 'CW Team', 'amwal' ),
			'slug'               => 'cw-team',
			'source'             => get_template_directory() . '/plugins/cw-team.zip',
			'required'           => false,
			'force_activation'   => false,
			'force_deactivation' => false,
			'version'            => '1.0.1',
		),
		array(
			'name'               => esc_html__( 'CW Testimonial', 'amwal' ),
			'slug'               => 'cw-testimonial',
			'source'             => get_template_directory() . '/plugins/cw-testimonial.zip',
			'required'           => false,
			'force_activation'   => false,
			'force_deactivation' => false,
			'version'            => '1.0.1',
		),
		array(
			'name'               => esc_html__( 'CW Portfolio', 'amwal' ),
			'slug'               => 'cw-portfolio',
			'source'             => get_template_directory() . '/plugins/cw-portfolio.zip',
			'required'           => false,
			'force_activation'   => false,
			'force_deactivation' => false,
			'version'            => '1.0.1',
		),
		array(
			'name'               => esc_html__( 'CW Service', 'amwal' ),
			'slug'               => 'cw-service',
			'source'             => get_template_directory() . '/plugins/cw-service.zip',
			'required'           => false,
			'force_activation'   => false,
			'force_deactivation' => false,
			'version'            => '1.0.1',
		),

	);
	$config = array(
		'domain'       		=> 'amwal',
		'default_path' 		=> '',
		'menu'         		=> 'install-required-plugins',
		'has_notices'      	=> true,
		'is_automatic'    	=> false,
		'message' 			=> '',
		'strings'      		=> array(
			'page_title'                      => esc_html__( 'Install Required Plugins', 'amwal' ),
			'menu_title'                      => esc_html__( 'Install Plugins', 'amwal' ),
			'installing'                      => esc_html__( 'Installing Plugin: %s', 'amwal' ),
			'oops'                            => esc_html__( 'Something went wrong with the plugin API.', 'amwal' ),
			'notice_can_install_required'     => _n_noop( 'This theme requires the following plugin: %1$s.', 'This theme requires the following plugins: %1$s.', 'amwal' ),
			'notice_can_install_recommended'  => _n_noop( 'This theme recommends the following plugin: %1$s.', 'This theme recommends the following plugins: %1$s.', 'amwal' ),
			'notice_cannot_install'           => _n_noop( 'Sorry, but you do not have the correct permissions to install the %s plugin. Contact the administrator of this site for help on getting the plugin installed.', 'Sorry, but you do not have the correct permissions to install the %s plugins. Contact the administrator of this site for help on getting the plugins installed.', 'amwal' ),
			'notice_can_activate_required'    => _n_noop( 'The following required plugin is currently inactive: %1$s.', 'The following required plugins are currently inactive: %1$s.', 'amwal' ),
			'notice_can_activate_recommended' => _n_noop( 'The following recommended plugin is currently inactive: %1$s.', 'The following recommended plugins are currently inactive: %1$s.', 'amwal' ),
			'notice_cannot_activate'          => _n_noop( 'Sorry, but you do not have the correct permissions to activate the %s plugin. Contact the administrator of this site for help on getting the plugin activated.', 'Sorry, but you do not have the correct permissions to activate the %s plugins. Contact the administrator of this site for help on getting the plugins activated.', 'amwal' ),
			'notice_ask_to_update'            => _n_noop( 'The following plugin needs to be updated to its latest version to ensure maximum compatibility with this theme: %1$s.', 'The following plugins need to be updated to their latest version to ensure maximum compatibility with this theme: %1$s.', 'amwal' ),
			'notice_cannot_update'            => _n_noop( 'Sorry, but you do not have the correct permissions to update the %s plugin. Contact the administrator of this site for help on getting the plugin updated.', 'Sorry, but you do not have the correct permissions to update the %s plugins. Contact the administrator of this site for help on getting the plugins updated.', 'amwal' ),
			'install_link'                    => _n_noop( 'Begin installing plugin', 'Begin installing plugins', 'amwal' ),
			'activate_link'                   => _n_noop( 'Activate installed plugin', 'Activate installed plugins', 'amwal' ),
			'return'                          => esc_html__( 'Return to Required Plugins Installer', 'amwal' ),
			'plugin_activated'                => esc_html__( 'Plugin activated successfully.', 'amwal' ),
			'complete'                        => esc_html__( 'All plugins installed and activated successfully. %s', 'amwal' ),
			'nag_type'                        => 'updated'
		)
	);

	tgmpa( $plugins, $config );
}
add_action( 'tgmpa_register', 'amwal_register_required_plugins' );
