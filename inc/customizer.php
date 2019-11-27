<?php
/**
 * Amwal theme customizer
 *
 * @package Amwal
 */

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Amwal_Customize {
	/**
	 * Customize settings
	 *
	 * @var array
	 */
	protected $config = array();

	/**
	 * The class constructor
	 *
	 * @param array $config
	 */
	public function __construct( $config ) {
		$this->config = $config;

		if ( ! class_exists( 'Kirki' ) ) {
			return;
		}

		$this->register();
	}

	/**
	 * Register settings
	 */
	public function register() {
		/**
		 * Add the theme configuration
		 */
		if ( ! empty( $this->config['theme'] ) ) {
			Kirki::add_config(
				$this->config['theme'], array(
					'capability'  => 'edit_theme_options',
					'option_type' => 'theme_mod',
				)
			);
		}

		/**
		 * Add panels
		 */
		if ( ! empty( $this->config['panels'] ) ) {
			foreach ( $this->config['panels'] as $panel => $settings ) {
				Kirki::add_panel( $panel, $settings );
			}
		}

		/**
		 * Add sections
		 */
		if ( ! empty( $this->config['sections'] ) ) {
			foreach ( $this->config['sections'] as $section => $settings ) {
				Kirki::add_section( $section, $settings );
			}
		}

		/**
		 * Add fields
		 */
		if ( ! empty( $this->config['theme'] ) && ! empty( $this->config['fields'] ) ) {
			foreach ( $this->config['fields'] as $name => $settings ) {
				if ( ! isset( $settings['settings'] ) ) {
					$settings['settings'] = $name;
				}

				Kirki::add_field( $this->config['theme'], $settings );
			}
		}
	}

	/**
	 * Get config ID
	 *
	 * @return string
	 */
	public function get_theme() {
		return $this->config['theme'];
	}

	/**
	 * Get customize setting value
	 *
	 * @param string $name
	 *
	 * @return bool|string
	 */
	public function get_option( $name ) {

		$default = $this->get_option_default( $name );

		return get_theme_mod( $name, $default );
	}

	/**
	 * Get default option values
	 *
	 * @param $name
	 *
	 * @return mixed
	 */
	public function get_option_default( $name ) {
		if ( ! isset( $this->config['fields'][$name] ) ) {
			return false;
		}

		return isset( $this->config['fields'][$name]['default'] ) ? $this->config['fields'][$name]['default'] : false;
	}
}

/**
 * This is a short hand function for getting setting value from customizer
 *
 * @param string $name
 *
 * @return bool|string
 */
function amwal_get_option( $name ) {
	global $amwal_customize;

	if ( empty( $amwal_customize ) ) {
		return false;
	}

	if ( class_exists( 'Kirki' ) ) {
		$value = Kirki::get_option( $amwal_customize->get_theme(), $name );
	} else {
		$value = $amwal_customize->get_option( $name );
	}

	return apply_filters( 'amwal_get_option', $value, $name );
}

/**
 * Get default option values
 *
 * @param $name
 *
 * @return mixed
 */
function amwal_get_option_default( $name ) {
	global $amwal_customize;

	if ( empty( $amwal_customize ) ) {
		return false;
	}

	return $amwal_customize->get_option_default( $name );
}

/**
 * Move some default sections to `general` panel that registered by theme
 *
 * @param object $wp_customize
 */
function amwal_customize_modify( $wp_customize ) {
	$wp_customize->get_section( 'title_tagline' )->panel     = 'general';
	$wp_customize->get_section( 'static_front_page' )->panel = 'general';
}

add_action( 'customize_register', 'amwal_customize_modify' );

/**
 * Customizer configuration
 */
$amwal_customize = new Amwal_Customize(
	array(
		'theme'    => 'amwal',

		'panels'   => array(
			'general'     => array(
				'priority' => 10,
				'title'    => esc_html__( 'General', 'amwal' ),
			),
			'typography' => array(
				'priority' => 10,
				'title'    => esc_html__( 'Typography', 'amwal' ),
			),
			'styling'     => array(
				'priority' => 20,
				'title'    => esc_html__( 'Styling', 'amwal' ),
			),
			// Panel Header
			'header'      => array(
				'priority' => 20,
				'title'    => esc_html__( 'Header', 'amwal' ),
			),
			// Panel Page Header
			'page_header' => array(
				'priority' => 25,
				'title'    => esc_html__( 'Page Header', 'amwal' ),
			),
			// Panel Shop
			'woocommerce'        => array(
				'title'       => esc_html__( 'Woocommerce', 'amwal' ),
				'description' => '',
				'priority'    => 40,
				'capability'  => 'edit_theme_options',
			),

			// Panel Content
			'content'     => array(
				'title'       => esc_html__( 'Content', 'amwal' ),
				'description' => '',
				'priority'    => 50,
				'capability'  => 'edit_theme_options',
			),
			// Panel Footer
			'footer'      => array(
				'title'    => esc_html__( 'Footer', 'amwal' ),
				'priority' => 100,
			),
		),

		'sections' => array(
			'body_typo'                    => array(
				'title'       => esc_html__( 'Body', 'amwal' ),
				'description' => '',
				'priority'    => 210,
				'capability'  => 'edit_theme_options',
				'panel'       => 'typography',
			),
			'heading_typo'                 => array(
				'title'       => esc_html__( 'Heading', 'amwal' ),
				'description' => '',
				'priority'    => 210,
				'capability'  => 'edit_theme_options',
				'panel'       => 'typography',
			),
			'header_typo'                  => array(
				'title'       => esc_html__( 'Header', 'amwal' ),
				'description' => '',
				'priority'    => 210,
				'capability'  => 'edit_theme_options',
				'panel'       => 'typography',
			),
			'footer_typo'                  => array(
				'title'       => esc_html__( 'Footer', 'amwal' ),
				'description' => '',
				'priority'    => 210,
				'capability'  => 'edit_theme_options',
				'panel'       => 'typography',
			),
			'404'                   => array(
				'title'       => esc_html__( '404 Page', 'amwal' ),
				'description' => '',
				'priority'    => 200,
				'capability'  => 'edit_theme_options',
				'panel'       => 'general',
			),

			'color_scheme'          => array(
				'title'       => esc_html__( 'Color Scheme', 'amwal' ),
				'description' => '',
				'priority'    => 210,
				'capability'  => 'edit_theme_options',
				'panel'       => 'styling',
			),

			// Panel Header
			'header'                => array(
				'title'       => esc_html__( 'Header', 'amwal' ),
				'description' => '',
				'priority'    => 10,
				'capability'  => 'edit_theme_options',
				'panel'       => 'header',
			),
			'logo'                  => array(
				'title'       => esc_html__( 'Logo', 'amwal' ),
				'description' => '',
				'priority'    => 15,
				'capability'  => 'edit_theme_options',
				'panel'       => 'header',
			),

			// Panel Page Header
			'page_header_site'      => array(
				'title'       => esc_html__( 'On Whole Site', 'amwal' ),
				'description' => '',
				'priority'    => 20,
				'capability'  => 'edit_theme_options',
				'panel'       => 'page_header',
			),
			'page_header_pages'     => array(
				'title'       => esc_html__( 'On Pages', 'amwal' ),
				'description' => '',
				'priority'    => 20,
				'capability'  => 'edit_theme_options',
				'panel'       => 'page_header',
			),
			'page_header_shop'      => array(
				'title'       => esc_html__( 'On Shop', 'amwal' ),
				'description' => '',
				'priority'    => 20,
				'capability'  => 'edit_theme_options',
				'panel'       => 'page_header',
			),
			'page_header_portfolio' => array(
				'title'       => esc_html__( 'On Portfolio', 'amwal' ),
				'description' => '',
				'priority'    => 20,
				'capability'  => 'edit_theme_options',
				'panel'       => 'page_header',
			),
			'page_header_service'   => array(
				'title'       => esc_html__( 'On Service', 'amwal' ),
				'description' => '',
				'priority'    => 20,
				'capability'  => 'edit_theme_options',
				'panel'       => 'page_header',
			),

			// Panel Layout
			'layout'                => array(
				'title'       => esc_html__( 'Layout', 'amwal' ),
				'description' => '',
				'priority'    => 25,
				'capability'  => 'edit_theme_options',
			),

			// Panel Shop
			'myaccount'             => array(
				'title'       => esc_html__( 'Myaccount', 'amwal' ),
				'description' => '',
				'priority'    => 25,
				'capability'  => 'edit_theme_options',
				'panel'       => 'woocommerce',
			),

			// Panel Content
			'content'               => array(
				'title'       => esc_html__( 'Blog', 'amwal' ),
				'description' => '',
				'priority'    => 10,
				'capability'  => 'edit_theme_options',
				'panel'       => 'content',
			),
			'service'               => array(
				'title'       => esc_html__( 'Services', 'amwal' ),
				'description' => '',
				'priority'    => 15,
				'capability'  => 'edit_theme_options',
				'panel'       => 'content',
			),
			'portfolio'             => array(
				'title'       => esc_html__( 'Portfolios', 'amwal' ),
				'description' => '',
				'priority'    => 20,
				'capability'  => 'edit_theme_options',
				'panel'       => 'content',
			),
			'team'                  => array(
				'title'       => esc_html__( 'Team', 'amwal' ),
				'description' => '',
				'priority'    => 25,
				'capability'  => 'edit_theme_options',
				'panel'       => 'content',
			),
			'testimonial'           => array(
				'title'       => esc_html__( 'Testimonials', 'amwal' ),
				'description' => '',
				'priority'    => 25,
				'capability'  => 'edit_theme_options',
				'panel'       => 'content',
			),
			'jobs'                  => array(
				'title'       => esc_html__( 'Jobs', 'amwal' ),
				'description' => '',
				'priority'    => 30,
				'capability'  => 'edit_theme_options',
				'panel'       => 'content',
			),

			// Panel Footer
			'footer'                => array(
				'title'       => esc_html__( 'Footer Main', 'amwal' ),
				'description' => '',
				'priority'    => 10,
				'capability'  => 'edit_theme_options',
				'panel'       => 'footer'
			),
			'footer_extra'          => array(
				'title'       => esc_html__( 'Footer Extra', 'amwal' ),
				'description' => '',
				'priority'    => 15,
				'capability'  => 'edit_theme_options',
				'panel'       => 'footer'
			),
			'footer_widget'         => array(
				'title'       => esc_html__( 'Footer Widget', 'amwal' ),
				'description' => '',
				'priority'    => 20,
				'capability'  => 'edit_theme_options',
				'panel'       => 'footer'
			),
			'footer_newsletter'     => array(
				'title'       => esc_html__( 'Footer Newsletter', 'amwal' ),
				'description' => '',
				'priority'    => 20,
				'capability'  => 'edit_theme_options',
				'panel'       => 'footer'
			),
			'footer_copyright'      => array(
				'title'       => esc_html__( 'Footer Copyright', 'amwal' ),
				'description' => '',
				'priority'    => 20,
				'capability'  => 'edit_theme_options',
				'panel'       => 'footer'
			),
		),

		'fields'   => array(
			// Typography
			'body_typo'                             => array(
				'type'     => 'typography',
				'label'    => esc_html__( 'Body', 'amwal' ),
				'section'  => 'body_typo',
				'priority' => 10,
				'default'  => array(
					'font-family'    => 'Poppins',
					'variant'        => 'regular',
					'font-size'      => '14px',
					'line-height'    => '1.6',
					'letter-spacing' => '0',
					'subsets'        => array( 'latin-ext' ),
					'color'          => '#727272',
					'text-transform' => 'none',
				),
			),
			'heading1_typo'                         => array(
				'type'     => 'typography',
				'label'    => esc_html__( 'Heading 1', 'amwal' ),
				'section'  => 'heading_typo',
				'priority' => 10,
				'default'  => array(
					'font-family'    => 'Poppins',
					'variant'        => '600',
					'font-size'      => '36px',
					'line-height'    => '1.2',
					'letter-spacing' => '0',
					'subsets'        => array( 'latin-ext' ),
					'color'          => '#222222',
					'text-transform' => 'none',
				),
			),
			'heading2_typo'                         => array(
				'type'     => 'typography',
				'label'    => esc_html__( 'Heading 2', 'amwal' ),
				'section'  => 'heading_typo',
				'priority' => 10,
				'default'  => array(
					'font-family'    => 'Poppins',
					'variant'        => '600',
					'font-size'      => '30px',
					'line-height'    => '1.2',
					'letter-spacing' => '0',
					'subsets'        => array( 'latin-ext' ),
					'color'          => '#222222',
					'text-transform' => 'none',
				),
			),
			'heading3_typo'                         => array(
				'type'     => 'typography',
				'label'    => esc_html__( 'Heading 3', 'amwal' ),
				'section'  => 'heading_typo',
				'priority' => 10,
				'default'  => array(
					'font-family'    => 'Poppins',
					'variant'        => '600',
					'font-size'      => '24px',
					'line-height'    => '1.2',
					'letter-spacing' => '0',
					'subsets'        => array( 'latin-ext' ),
					'color'          => '#222222',
					'text-transform' => 'none',
				),
			),
			'heading4_typo'                         => array(
				'type'     => 'typography',
				'label'    => esc_html__( 'Heading 4', 'amwal' ),
				'section'  => 'heading_typo',
				'priority' => 10,
				'default'  => array(
					'font-family'    => 'Poppins',
					'variant'        => '600',
					'font-size'      => '18px',
					'line-height'    => '1.2',
					'letter-spacing' => '0',
					'subsets'        => array( 'latin-ext' ),
					'color'          => '#222222',
					'text-transform' => 'none',
				),
			),
			'heading5_typo'                         => array(
				'type'     => 'typography',
				'label'    => esc_html__( 'Heading 5', 'amwal' ),
				'section'  => 'heading_typo',
				'priority' => 10,
				'default'  => array(
					'font-family'    => 'Poppins',
					'variant'        => '600',
					'font-size'      => '16px',
					'line-height'    => '1.2',
					'letter-spacing' => '0',
					'subsets'        => array( 'latin-ext' ),
					'color'          => '#222222',
					'text-transform' => 'none',
				),
			),
			'heading6_typo'                         => array(
				'type'     => 'typography',
				'label'    => esc_html__( 'Heading 6', 'amwal' ),
				'section'  => 'heading_typo',
				'priority' => 10,
				'default'  => array(
					'font-family'    => 'Poppins',
					'variant'        => '600',
					'font-size'      => '12px',
					'line-height'    => '1.2',
					'letter-spacing' => '0',
					'subsets'        => array( 'latin-ext' ),
					'color'          => '#222222',
					'text-transform' => 'none',
				),
			),
			'menu_typo'                             => array(
				'type'     => 'typography',
				'label'    => esc_html__( 'Menu', 'amwal' ),
				'section'  => 'header_typo',
				'priority' => 10,
				'default'  => array(
					'font-family'    => 'Poppins',
					'variant'        => '600',
					'subsets'        => array( 'latin-ext' ),
					'font-size'      => '14px',
					'color'          => '#fff',
					'text-transform' => 'none',
				),
			),
			'footer_text_typo'                      => array(
				'type'     => 'typography',
				'label'    => esc_html__( 'Footer Text', 'amwal' ),
				'section'  => 'footer_typo',
				'priority' => 10,
				'default'  => array(
					'font-family' => 'Poppins',
					'variant'     => 'regular',
					'subsets'     => array( 'latin-ext' ),
					'font-size'   => '14px',
				),
			),
			// 404 Page
			'logo_404'                      => array(
				'type'        => 'image',
				'label'       => esc_html__( 'Logo', 'amwal' ),
				'description' => esc_html__( 'This logo is used for 404 page.', 'amwal' ),
				'section'     => '404',
				'default'     => '',
				'priority'    => 10,
			),
			'bg_404'                        => array(
				'type'        => 'image',
				'label'       => esc_html__( 'Background', 'amwal' ),
				'description' => esc_html__( 'This background is used for 404 page.', 'amwal' ),
				'section'     => '404',
				'default'     => '',
				'priority'    => 15,
			),

			// Color Scheme
			'color_scheme'                  => array(
				'type'     => 'radio-image',
				'label'    => esc_html__( 'Base Color Scheme', 'amwal' ),
				'default'  => '0|0',
				'section'  => 'color_scheme',
				'priority' => 10,
				'choices'  => array(
					'0|0'             => get_template_directory_uri() . '/img/color/color-1.png',
					'#2d3543|#e13131' => get_template_directory_uri() . '/img/color/color-2.png',
					'#00625b|#ffb600' => get_template_directory_uri() . '/img/color/color-3.png',
					'#0a2c4e|#82d1e5' => get_template_directory_uri() . '/img/color/color-4.png',
					'#0a2c4e|#f46333' => get_template_directory_uri() . '/img/color/color-5.png',
					'#222222|#209de2' => get_template_directory_uri() . '/img/color/color-6.png',
					'#222222|#f46333' => get_template_directory_uri() . '/img/color/color-7.png',
					'#222222|#ffb600' => get_template_directory_uri() . '/img/color/color-8.png',
					'#222222|#e13131' => get_template_directory_uri() . '/img/color/color-9.png',
					'#222222|#88c06a' => get_template_directory_uri() . '/img/color/color-10.png',
				),
			),
			'custom_color_scheme'           => array(
				'type'     => 'toggle',
				'label'    => esc_html__( 'Custom Color Scheme', 'amwal' ),
				'default'  => 0,
				'section'  => 'color_scheme',
				'priority' => 10,
			),
			'custom_color_1'                => array(
				'type'            => 'color',
				'label'           => esc_html__( 'Color Primary', 'amwal' ),
				'default'         => '',
				'section'         => 'color_scheme',
				'priority'        => 10,
				'active_callback' => array(
					array(
						'setting'  => 'custom_color_scheme',
						'operator' => '==',
						'value'    => 1,
					),
				),
			),
			'custom_color_2'                => array(
				'type'            => 'color',
				'label'           => esc_html__( 'Color Secondary', 'amwal' ),
				'default'         => '',
				'section'         => 'color_scheme',
				'priority'        => 10,
				'active_callback' => array(
					array(
						'setting'  => 'custom_color_scheme',
						'operator' => '==',
						'value'    => 1,
					),
				),
			),

			// Header layout
			'header_layout'                 => array(
				'type'     => 'select',
				'label'    => esc_html__( 'Header Layout', 'amwal' ),
				'section'  => 'header',
				'default'  => '1',
				'priority' => 10,
				'choices'  => array(
					'1' => esc_html__( 'Header v1', 'amwal' ),
					'2' => esc_html__( 'Header v2', 'amwal' ),
					'3' => esc_html__( 'Header v3', 'amwal' ),
					'4' => esc_html__( 'Header v4', 'amwal' ),
					'5' => esc_html__( 'Header v5', 'amwal' ),
					'6' => esc_html__( 'Header v6', 'amwal' ),
					'7' => esc_html__( 'Header v7', 'amwal' ),
					'8' => esc_html__( 'Header v8', 'amwal' ),
				),
			),

			'header_sticky'            => array(
				'type'            => 'toggle',
				'label'           => esc_html__( 'Header Sticky', 'amwal' ),
				'default'         => 0,
				'section'         => 'header',
				'priority'        => 11,
			),

			'header_transparent'            => array(
				'type'            => 'toggle',
				'label'           => esc_html__( 'Header Transparent', 'amwal' ),
				'default'         => '1',
				'section'         => 'header',
				'priority'        => 12,
				'active_callback' => array(
					array(
						'setting'  => 'header_layout',
						'operator' => 'in',
						'value'    => array( '1', '2' ),
					),
				),
			),
			'topbar'                        => array(
				'type'            => 'toggle',
				'label'           => esc_html__( 'Top bar', 'amwal' ),
				'description'     => esc_html__( 'Check this to show topbar', 'amwal' ),
				'section'         => 'header',
				'default'         => '1',
				'priority'        => 15,
				'active_callback' => array(
					array(
						'setting'  => 'header_layout',
						'operator' => 'in',
						'value'    => array( '1', '4', '7', '8' ),
					),
				),
			),
			'top_bar_position'              => array(
				'type'            => 'select',
				'label'           => esc_html__( 'Top bar position', 'amwal' ),
				'section'         => 'header',
				'default'         => 'top',
				'priority'        => 15,
				'choices'         => array(
					'top'    => esc_html__( 'Before header', 'amwal' ),
					'bottom' => esc_html__( 'After header', 'amwal' ),
				),
				'active_callback' => array(
					array(
						'setting'  => 'topbar',
						'operator' => '==',
						'value'    => '1',
					),
					array(
						'setting'  => 'header_layout',
						'operator' => 'in',
						'value'    => array( '1', '4', '7', '8' ),
					),
				),
			),
			'menu_extra'                    => array(
				'type'            => 'multicheck',
				'label'           => esc_html__( 'Menu Extra', 'amwal' ),
				'section'         => 'header',
				'default'         => array( 'cart', 'search' ),
				'priority'        => 20,
				'choices'         => array(
					'cart'   => esc_html__( 'Cart', 'amwal' ),
					'search' => esc_html__( 'Search', 'amwal' ),
				),
				'active_callback' => array(
					array(
						'setting'  => 'header_layout',
						'operator' => 'in',
						'value'    => array( '1', '4', '5', '6', '7' ),
					),
				),
			),
			'button_extra'                  => array(
				'type'            => 'toggle',
				'label'           => esc_html__( 'Show Button Extra', 'amwal' ),
				'default'         => '1',
				'section'         => 'header',
				'priority'        => 20,
				'active_callback' => array(
					array(
						'setting'  => 'header_layout',
						'operator' => 'in',
						'value'    => array( '6', '7', '8' ),
					),
				),
			),
			'button_extra_text'             => array(
				'type'            => 'text',
				'label'           => esc_html__( 'Enter Button Text', 'amwal' ),
				'default'         => '',
				'section'         => 'header',
				'priority'        => 20,
				'active_callback' => array(
					array(
						'setting'  => 'header_layout',
						'operator' => 'in',
						'value'    => array( '6', '7', '8' ),
					),
					array(
						'setting'  => 'button_extra',
						'operator' => '==',
						'value'    => '1',
					),
				),
			),
			'button_extra_link'             => array(
				'type'            => 'text',
				'label'           => esc_html__( 'Enter Button Link', 'amwal' ),
				'default'         => '',
				'section'         => 'header',
				'priority'        => 20,
				'active_callback' => array(
					array(
						'setting'  => 'header_layout',
						'operator' => 'in',
						'value'    => array( '6', '7', '8' ),
					),
					array(
						'setting'  => 'button_extra',
						'operator' => '==',
						'value'    => '1',
					),
				),
			),
			'header_info'                   => array(
				'type'            => 'textarea',
				'label'           => esc_html__( 'Header Contact Info', 'amwal' ),
				'description'     => esc_html__( 'Shortcodes are allowed', 'amwal' ),
				'section'         => 'header',
				'default'         => '',
				'priority'        => 20,
				'active_callback' => array(
					array(
						'setting'  => 'header_layout',
						'operator' => 'in',
						'value'    => array( '2', '3', '4', '5', '6', '7' ),
					),
				),
			),

			'header_socials'                => array(
				'type'            => 'repeater',
				'label'           => esc_html__( 'Socials', 'amwal' ),
				'section'         => 'header',
				'priority'        => 20,
				'default'         => array(
					array(
						'link_url' => 'https://facebook.com/',
					),
					array(
						'link_url' => 'https://twitter.com/',
					),
					array(
						'link_url' => 'https://plus.google.com/',
					),
					array(
						'link_url' => 'https://www.youtube.com/',
					),
				),
				'fields'          => array(
					'link_url' => array(
						'type'        => 'text',
						'label'       => esc_html__( 'Social URL', 'amwal' ),
						'description' => esc_html__( 'Enter the URL for this social', 'amwal' ),
						'default'     => '',
					),
				),
				'active_callback' => array(
					array(
						'setting'  => 'header_layout',
						'operator' => 'in',
						'value'    => array( '2', '3', '5' ),
					),
				),
			),

			// Logo
			'logo_transparent'              => array(
				'type'            => 'image',
				'label'           => esc_html__( 'Header Transparent Logo', 'amwal' ),
				'section'         => 'logo',
				'description'     => esc_html__( 'This logo is just used for header transparent in the homepage.', 'amwal' ),
				'default'         => '',
				'priority'        => 20,
				'active_callback' => array(
					array(
						'setting'  => 'header_transparent',
						'operator' => '==',
						'value'    => 1,
					),
					array(
						'setting'  => 'header_layout',
						'operator' => 'in',
						'value'    => array( '1', '2' ),
					),
				),
			),
			'logo'                          => array(
				'type'        => 'image',
				'label'       => esc_html__( 'Logo', 'amwal' ),
				'description' => esc_html__( 'This logo is used for all site.', 'amwal' ),
				'section'     => 'logo',
				'default'     => '',
				'priority'    => 20,
			),
			'logo_sticky'                          => array(
				'type'        => 'image',
				'label'       => esc_html__( 'Logo Sticky', 'amwal' ),
				'description' => esc_html__( 'This logo is used for Header Sticky.', 'amwal' ),
				'section'     => 'logo',
				'default'     => '',
				'priority'    => 20,
				'active_callback' => array(
					array(
						'setting'  => 'header_sticky',
						'operator' => '==',
						'value'    => 1,
					),
				),
			),
			'logo_width'                    => array(
				'type'     => 'text',
				'label'    => esc_html__( 'Logo Width(px)', 'amwal' ),
				'section'  => 'logo',
				'priority' => 20,
				array(
					'setting'  => 'logo',
					'operator' => '!=',
					'value'    => '',
				),
			),
			'logo_height'                   => array(
				'type'     => 'text',
				'label'    => esc_html__( 'Logo Height(px)', 'amwal' ),
				'section'  => 'logo',
				'priority' => 20,
				array(
					'setting'  => 'logo',
					'operator' => '!=',
					'value'    => '',
				),
			),
			'logo_margins'                  => array(
				'type'     => 'spacing',
				'label'    => esc_html__( 'Logo Margin', 'amwal' ),
				'section'  => 'logo',
				'priority' => 20,
				'default'  => array(
					'top'    => '0',
					'bottom' => '0',
					'left'   => '0',
					'right'  => '0',
				),
				array(
					'setting'  => 'logo',
					'operator' => '!=',
					'value'    => '',
				),
			),

			// Page Header
			'page_header'                   => array(
				'type'        => 'toggle',
				'label'       => esc_html__( 'Enable Page Header', 'amwal' ),
				'description' => esc_html__( 'Enable to show a page header for whole site below the site header', 'amwal' ),
				'section'     => 'page_header_site',
				'default'     => '1',
				'priority'    => 20,
			),
			'breadcrumb'                    => array(
				'type'            => 'toggle',
				'label'           => esc_html__( 'Show Breadcrumb', 'amwal' ),
				'description'     => esc_html__( 'Enable to show breadcrumb below the site header', 'amwal' ),
				'section'         => 'page_header_site',
				'default'         => '1',
				'priority'        => 20,
				'active_callback' => array(
					array(
						'setting'  => 'page_header',
						'operator' => '==',
						'value'    => '1',
					),
				),
			),
			'page_header_bg'                => array(
				'type'            => 'image',
				'label'           => esc_html__( 'Background Image', 'amwal' ),
				'description'     => esc_html__( 'Upload a page header background image', 'amwal' ),
				'section'         => 'page_header_site',
				'default'         => '',
				'priority'        => 20,
				'active_callback' => array(
					array(
						'setting'  => 'page_header',
						'operator' => '==',
						'value'    => '1',
					),
				),
			),
			'page_header_pages'             => array(
				'type'        => 'toggle',
				'label'       => esc_html__( 'Enable Page Header', 'amwal' ),
				'description' => esc_html__( 'Enable to show  page header on whole site', 'amwal' ),
				'section'     => 'page_header_pages',
				'default'     => '1',
				'priority'    => 10,
			),
			'breadcrumb_pages'              => array(
				'type'            => 'toggle',
				'label'           => esc_html__( 'Show Breadcrumb', 'amwal' ),
				'description'     => esc_html__( 'Enable to show breadcrumb below the site header', 'amwal' ),
				'section'         => 'page_header_pages',
				'default'         => '1',
				'priority'        => 20,
				'active_callback' => array(
					array(
						'setting'  => 'page_header_pages',
						'operator' => '==',
						'value'    => '1',
					),
				),
			),
			'page_header_bg_pages'          => array(
				'type'            => 'image',
				'label'           => esc_html__( 'Background Image', 'amwal' ),
				'description'     => esc_html__( 'Upload a page header background image', 'amwal' ),
				'section'         => 'page_header_pages',
				'default'         => '',
				'priority'        => 20,
				'active_callback' => array(
					array(
						'setting'  => 'page_header_pages',
						'operator' => '==',
						'value'    => '1',
					),
				),
			),
			'page_header_shop'              => array(
				'type'        => 'toggle',
				'label'       => esc_html__( 'Enable Page Header', 'amwal' ),
				'description' => esc_html__( 'Enable to show a page header for shop, product category, product tag below the site header', 'amwal' ),
				'section'     => 'page_header_shop',
				'default'     => 1,
				'priority'    => 20,
			),
			'breadcrumb_shop'               => array(
				'type'            => 'toggle',
				'label'           => esc_html__( 'Show Breadcrumb', 'amwal' ),
				'description'     => esc_html__( 'Enable to show breadcrumb below the site header', 'amwal' ),
				'section'         => 'page_header_shop',
				'default'         => '1',
				'priority'        => 20,
				'active_callback' => array(
					array(
						'setting'  => 'page_header_shop',
						'operator' => '==',
						'value'    => '1',
					),
				),
			),
			'page_header_bg_shop'           => array(
				'type'            => 'image',
				'label'           => esc_html__( 'Background Image', 'amwal' ),
				'description'     => esc_html__( 'Upload a page header shop background image', 'amwal' ),
				'section'         => 'page_header_shop',
				'default'         => '',
				'priority'        => 20,
				'active_callback' => array(
					array(
						'setting'  => 'page_header_shop',
						'operator' => '==',
						'value'    => '1',
					),
				),
			),
			'page_header_portfolio'         => array(
				'type'        => 'toggle',
				'label'       => esc_html__( 'Enable Page Header', 'amwal' ),
				'description' => esc_html__( 'Enable to show a page header for portfolio, portfolio archive pages  below the site header', 'amwal' ),
				'section'     => 'page_header_portfolio',
				'default'     => '1',
				'priority'    => 10,
			),
			'breadcrumb_portfolio'          => array(
				'type'            => 'toggle',
				'label'           => esc_html__( 'Show Breadcrumb', 'amwal' ),
				'description'     => esc_html__( 'Enable to show breadcrumb below the site header', 'amwal' ),
				'section'         => 'page_header_portfolio',
				'default'         => '1',
				'priority'        => 20,
				'active_callback' => array(
					array(
						'setting'  => 'page_header_portfolio',
						'operator' => '==',
						'value'    => '1',
					),
				),
			),
			'page_header_bg_portfolio'      => array(
				'type'            => 'image',
				'label'           => esc_html__( 'Background Image', 'amwal' ),
				'description'     => esc_html__( 'Upload a page header background image', 'amwal' ),
				'section'         => 'page_header_portfolio',
				'default'         => '',
				'priority'        => 20,
				'active_callback' => array(
					array(
						'setting'  => 'page_header_portfolio',
						'operator' => '==',
						'value'    => '1',
					),
				),
			),
			'page_header_service'           => array(
				'type'        => 'toggle',
				'label'       => esc_html__( 'Enable Page Header', 'amwal' ),
				'description' => esc_html__( 'Enable to show a page header for portfolio, portfolio archive pages  below the site header', 'amwal' ),
				'section'     => 'page_header_service',
				'default'     => '1',
				'priority'    => 10,
			),
			'breadcrumb_service'            => array(
				'type'            => 'toggle',
				'label'           => esc_html__( 'Show Breadcrumb', 'amwal' ),
				'description'     => esc_html__( 'Enable to show breadcrumb below the site header', 'amwal' ),
				'section'         => 'page_header_service',
				'default'         => '1',
				'priority'        => 20,
				'active_callback' => array(
					array(
						'setting'  => 'page_header_service',
						'operator' => '==',
						'value'    => '1',
					),
				),
			),
			'page_header_bg_service'        => array(
				'type'            => 'image',
				'label'           => esc_html__( 'Background Image', 'amwal' ),
				'description'     => esc_html__( 'Upload a page header background image', 'amwal' ),
				'section'         => 'page_header_service',
				'default'         => '',
				'priority'        => 20,
				'active_callback' => array(
					array(
						'setting'  => 'page_header_service',
						'operator' => '==',
						'value'    => '1',
					),
				),
			),


			// Layout
			'default_layout'                => array(
				'type'     => 'select',
				'label'    => esc_html__( 'Default Layout', 'amwal' ),
				'section'  => 'layout',
				'default'  => 'sidebar-content',
				'priority' => 10,
				'choices'  => array(
					'full-content'    => esc_attr__( 'Full Content', 'amwal' ),
					'sidebar-content' => esc_attr__( 'Sidebar Content', 'amwal' ),
					'content-sidebar' => esc_attr__( 'Content Sidebar', 'amwal' ),
				),
			),

			'page_layout'                   => array(
				'type'     => 'select',
				'label'    => esc_html__( 'Page Layout', 'amwal' ),
				'section'  => 'layout',
				'default'  => 'full-content',
				'priority' => 15,
				'choices'  => array(
					'full-content'    => esc_attr__( 'Full Content', 'amwal' ),
					'sidebar-content' => esc_attr__( 'Sidebar Content', 'amwal' ),
					'content-sidebar' => esc_attr__( 'Content Sidebar', 'amwal' ),
				),
			),

			'service_layout'                => array(
				'type'     => 'select',
				'label'    => esc_html__( 'Services Layout', 'amwal' ),
				'section'  => 'layout',
				'default'  => 'full-content',
				'priority' => 15,
				'choices'  => array(
					'full-content'    => esc_attr__( 'Full Content', 'amwal' ),
					'sidebar-content' => esc_attr__( 'Sidebar Content', 'amwal' ),
					'content-sidebar' => esc_attr__( 'Content Sidebar', 'amwal' ),
				),
			),

			'portfolio_layout'              => array(
				'type'     => 'select',
				'label'    => esc_html__( 'Portfolios Layout', 'amwal' ),
				'section'  => 'layout',
				'default'  => 'full-content',
				'priority' => 15,
				'choices'  => array(
					'full-content'    => esc_attr__( 'Full Content', 'amwal' ),
					'sidebar-content' => esc_attr__( 'Sidebar Content', 'amwal' ),
					'content-sidebar' => esc_attr__( 'Content Sidebar', 'amwal' ),
				),
			),

			'team_layout'                   => array(
				'type'     => 'select',
				'label'    => esc_html__( 'Team Layout', 'amwal' ),
				'section'  => 'layout',
				'default'  => 'full-content',
				'priority' => 15,
				'choices'  => array(
					'full-content'    => esc_attr__( 'Full Content', 'amwal' ),
					'sidebar-content' => esc_attr__( 'Sidebar Content', 'amwal' ),
					'content-sidebar' => esc_attr__( 'Content Sidebar', 'amwal' ),
				),
			),

			'testimonial_layout'            => array(
				'type'     => 'select',
				'label'    => esc_html__( 'Testimonial Layout', 'amwal' ),
				'section'  => 'layout',
				'default'  => 'full-content',
				'priority' => 15,
				'choices'  => array(
					'full-content'    => esc_attr__( 'Full Content', 'amwal' ),
					'sidebar-content' => esc_attr__( 'Sidebar Content', 'amwal' ),
					'content-sidebar' => esc_attr__( 'Content Sidebar', 'amwal' ),
				),
			),

			'shop_layout'                   => array(
				'type'     => 'select',
				'label'    => esc_html__( 'Shop Layout', 'amwal' ),
				'section'  => 'layout',
				'default'  => 'full-content',
				'priority' => 15,
				'choices'  => array(
					'full-content'    => esc_attr__( 'Full Content', 'amwal' ),
					'sidebar-content' => esc_attr__( 'Sidebar Content', 'amwal' ),
					'content-sidebar' => esc_attr__( 'Content Sidebar', 'amwal' ),
				),
			),

			'related_product_columns'              => array(
				'type'        => 'number',
				'label'       => esc_html__( 'Related Product Columns', 'amwal' ),
				'section'     => 'woocommerce_product_catalog',
				'default'     => 4,
				'priority'    => 25,
				'description' => esc_html__( 'Specify how many products you want to show on shop page', 'amwal' ),
			),

			'bg_myaccount'                  => array(
				'type'        => 'image',
				'label'       => esc_html__( 'Background', 'amwal' ),
				'description' => esc_html__( 'This background is used for Login page.', 'amwal' ),
				'section'     => 'myaccount',
				'default'     => '',
				'priority'    => 15,
			),

			// Content
			'blog_view'                     => array(
				'type'        => 'select',
				'label'       => esc_html__( 'Blog Layout', 'amwal' ),
				'description' => esc_html__( 'Select default view for blog page', 'amwal' ),
				'section'     => 'content',
				'default'     => 'list',
				'priority'    => 10,
				'multiple'    => 1,
				'choices'     => array(
					'list' => esc_attr__( 'List', 'amwal' ),
					'grid' => esc_attr__( 'Grid', 'amwal' ),
				),
			),
			'title_length'                => array(
				'type'     => 'number',
				'label'    => esc_html__( 'Title Length', 'amwal' ),
				'section'  => 'content',
				'default'  => 5,
				'priority' => 15,
				'choices'  => array(
					'min'  => 1,
					'step' => 1,
				),
			),
			'excerpt_length'                => array(
				'type'     => 'number',
				'label'    => esc_html__( 'Excerpt Length', 'amwal' ),
				'section'  => 'content',
				'default'  => 20,
				'priority' => 15,
				'choices'  => array(
					'min'  => 1,
					'step' => 1,
				),
			),
			'single_sharing'                => array(
				'type'        => 'toggle',
				'label'       => esc_html__( 'Show Sharing Icons', 'amwal' ),
				'description' => esc_html__( 'Display social sharing icons for each post on single page', 'amwal' ),
				'section'     => 'content',
				'default'     => '1',
				'priority'    => 20,
			),

			'service_per_page'              => array(
				'type'        => 'number',
				'label'       => esc_html__( 'Services Per Page', 'amwal' ),
				'section'     => 'service',
				'default'     => 12,
				'priority'    => 15,
				'description' => esc_html__( 'Specify how many products you want to show on portfolio page', 'amwal' ),
			),
			'service_excerpt_length'        => array(
				'type'     => 'number',
				'label'    => esc_html__( 'Service Excerpt Length', 'amwal' ),
				'section'  => 'service',
				'default'  => 42,
				'priority' => 20,
				'choices'  => array(
					'min'  => 0,
					'max'  => 45,
					'step' => 1,
				),
			),

			'portfolio_per_page'            => array(
				'type'        => 'number',
				'label'       => esc_html__( 'Portfolios Per Page', 'amwal' ),
				'section'     => 'portfolio',
				'default'     => 12,
				'priority'    => 15,
				'description' => esc_html__( 'Specify how many products you want to show on portfolio page', 'amwal' ),
			),
			'portfolio_nav_type'            => array(
				'type'        => 'select',
				'label'       => esc_html__( 'Type of Navigation', 'amwal' ),
				'description' => esc_html__( 'Select type of navigation you want to show on portfolios page', 'amwal' ),
				'section'     => 'portfolio',
				'default'     => 'links',
				'priority'    => 20,
				'choices'     => array(
					'links' => esc_html__( 'Links', 'amwal' ),
					'ajax'  => esc_html__( 'Load Ajax', 'amwal' ),
				),
			),

			'team_per_page'                 => array(
				'type'        => 'number',
				'label'       => esc_html__( 'Team Per Page', 'amwal' ),
				'section'     => 'team',
				'default'     => 12,
				'priority'    => 15,
				'description' => esc_html__( 'Specify how many products you want to show on team page', 'amwal' ),
			),
			'team_excerpt_length'           => array(
				'type'     => 'number',
				'label'    => esc_html__( 'Team Excerpt Length', 'amwal' ),
				'section'  => 'team',
				'default'  => 50,
				'priority' => 20,
				'choices'  => array(
					'min'  => 0,
					'max'  => 45,
					'step' => 1,
				),
			),
			'team_contact_form'             => array(
				'type'        => 'textarea',
				'label'       => esc_html__( 'Team Contact Form', 'amwal' ),
				'description' => sprintf( wp_kses_post( 'Please go to <a href="%s">Contact Forms</a> to get shortcode.', 'amwal' ), admin_url( 'admin.php?page=wpcf7' ) ),
				'section'     => 'team',
				'default'     => '',
				'priority'    => 20,
			),

			'testimonial_per_page'          => array(
				'type'        => 'number',
				'label'       => esc_html__( 'Testimonial Per Page', 'amwal' ),
				'section'     => 'testimonial',
				'default'     => 12,
				'priority'    => 15,
				'description' => esc_html__( 'Specify how many products you want to show on team page', 'amwal' ),
			),

			'testimonial_type'              => array(
				'type'        => 'select',
				'label'       => esc_html__( 'Testimonial Type', 'amwal' ),
				'description' => esc_html__( 'Select default view for testimonial page', 'amwal' ),
				'section'     => 'testimonial',
				'default'     => 'list',
				'priority'    => 20,
				'multiple'    => 1,
				'choices'     => array(
					'list' => esc_attr__( 'List', 'amwal' ),
					'grid' => esc_attr__( 'Grid', 'amwal' ),
				),
			),
			'testimonial_excerpt_length'    => array(
				'type'     => 'number',
				'label'    => esc_html__( 'Testimonial Excerpt Length', 'amwal' ),
				'section'  => 'testimonial',
				'default'  => 50,
				'priority' => 20,
				'choices'  => array(
					'min'  => 0,
					'max'  => 45,
					'step' => 1,
				),
			),
			'job_form'                      => array(
				'type'     => 'textarea',
				'label'    => esc_html__( 'Job Form Shortcode', 'amwal' ),
				'section'  => 'jobs',
				'default'  => '',
				'priority' => 20,
			),

			// Footer
			'footer_extra'                  => array(
				'type'        => 'toggle',
				'label'       => esc_html__( 'Show Footer Extra', 'amwal' ),
				'description' => esc_html__( 'Display Extra on footer', 'amwal' ),
				'section'     => 'footer_extra',
				'default'     => '1',
				'priority'    => 10,
			),

			'footer_extra_layout'           => array(
				'type'            => 'select',
				'label'           => esc_html__( 'Footer Extra Layout', 'amwal' ),
				'section'         => 'footer_extra',
				'default'         => '1',
				'priority'        => 10,
				'choices'         => array(
					'1' => esc_html__( 'Footer Extra v1', 'amwal' ),
					'2' => esc_html__( 'Footer Extra v2', 'amwal' ),
				),
				'active_callback' => array(
					array(
						'setting'  => 'footer_extra',
						'operator' => '==',
						'value'    => '1',
					),
				),
			),

			'footer_extra_position'         => array(
				'type'            => 'select',
				'label'           => esc_html__( 'Footer Extra Position', 'amwal' ),
				'section'         => 'footer_extra',
				'default'         => 'top',
				'priority'        => 10,
				'choices'         => array(
					'top'    => esc_html__( 'Top', 'amwal' ),
					'bottom' => esc_html__( 'Bottom', 'amwal' ),
				),
				'active_callback' => array(
					array(
						'setting'  => 'footer_extra',
						'operator' => '==',
						'value'    => '1',
					),
				),
			),

			'footer_extra_dark_skin'        => array(
				'type'            => 'toggle',
				'label'           => esc_html__( 'Show Footer Dark Skin', 'amwal' ),
				'description'     => esc_html__( 'Display extra skin on footer', 'amwal' ),
				'section'         => 'footer_extra',
				'default'         => '0',
				'priority'        => 10,
				'active_callback' => array(
					array(
						'setting'  => 'footer_extra',
						'operator' => '==',
						'value'    => '1',
					),
				),
			),

			'footer_extra_bg_color'         => array(
				'type'            => 'color',
				'label'           => esc_html__( 'Extra Background Color', 'amwal' ),
				'default'         => '',
				'section'         => 'footer_extra',
				'priority'        => 15,
				'active_callback' => array(
					array(
						'setting'  => 'footer_extra',
						'operator' => '==',
						'value'    => '1',
					),
				),
			),
			'footer_extra_bg'               => array(
				'type'            => 'image',
				'label'           => esc_html__( 'Extra Background', 'amwal' ),
				'section'         => 'footer_extra',
				'default'         => '',
				'priority'        => 15,
				'active_callback' => array(
					array(
						'setting'  => 'footer_extra',
						'operator' => '==',
						'value'    => '1',
					),
				),
			),
			'footer_extra_bg_horizontal '   => array(
				'type'            => 'select',
				'label'           => esc_html__( 'Extra Background Horizontal', 'amwal' ),
				'default'         => 'left',
				'section'         => 'footer_extra',
				'priority'        => 15,
				'choices'         => array(
					'left'   => esc_html__( 'Left', 'amwal' ),
					'right'  => esc_html__( 'Right', 'amwal' ),
					'center' => esc_html__( 'Center', 'amwal' ),
				),
				'active_callback' => array(
					array(
						'setting'  => 'footer_extra',
						'operator' => '==',
						'value'    => '1',
					),
				),
			),
			'footer_extra_bg_vertical'      => array(
				'type'            => 'select',
				'label'           => esc_html__( 'Extra Background Vertical', 'amwal' ),
				'default'         => 'top',
				'section'         => 'footer_extra',
				'priority'        => 15,
				'choices'         => array(
					'top'    => esc_html__( 'Top', 'amwal' ),
					'center' => esc_html__( 'Center', 'amwal' ),
					'bottom' => esc_html__( 'Bottom', 'amwal' ),
				),
				'active_callback' => array(
					array(
						'setting'  => 'footer_extra',
						'operator' => '==',
						'value'    => '1',
					),
				),
			),
			'footer_extra_bg_repeats'       => array(
				'type'            => 'select',
				'label'           => esc_html__( 'Extra Background Repeat', 'amwal' ),
				'default'         => 'repeat',
				'section'         => 'footer_extra',
				'priority'        => 15,
				'choices'         => array(
					'repeat'    => esc_html__( 'Repeat', 'amwal' ),
					'repeat-x'  => esc_html__( 'Repeat Horizontally', 'amwal' ),
					'repeat-y'  => esc_html__( 'Repeat Vertically', 'amwal' ),
					'no-repeat' => esc_html__( 'No Repeat', 'amwal' ),
				),
				'active_callback' => array(
					array(
						'setting'  => 'footer_extra',
						'operator' => '==',
						'value'    => '1',
					),
				),
			),
			'footer_extra_bg_attachments'   => array(
				'type'            => 'select',
				'label'           => esc_html__( 'Extra Background Attachment', 'amwal' ),
				'default'         => 'scroll',
				'section'         => 'footer_extra',
				'priority'        => 15,
				'choices'         => array(
					'scroll' => esc_html__( 'Scroll', 'amwal' ),
					'fixed'  => esc_html__( 'Fixed', 'amwal' ),
				),
				'active_callback' => array(
					array(
						'setting'  => 'footer_extra',
						'operator' => '==',
						'value'    => '1',
					),
				),
			),
			'footer_extra_bg_size'          => array(
				'type'            => 'select',
				'label'           => esc_html__( 'Extra Background Size', 'amwal' ),
				'default'         => 'normal',
				'section'         => 'footer_extra',
				'priority'        => 15,
				'choices'         => array(
					'normal'  => esc_html__( 'Normal', 'amwal' ),
					'contain' => esc_html__( 'Contain', 'amwal' ),
					'cover'   => esc_html__( 'Cover', 'amwal' ),
				),
				'active_callback' => array(
					array(
						'setting'  => 'footer_extra',
						'operator' => '==',
						'value'    => '1',
					),
				),
			),

			'footer_extra_logo'             => array(
				'type'            => 'image',
				'label'           => esc_html__( 'Footer Extra Logo', 'amwal' ),
				'section'         => 'footer_extra',
				'default'         => '',
				'priority'        => 15,
				'active_callback' => array(
					array(
						'setting'  => 'footer_extra_layout',
						'operator' => '==',
						'value'    => '2',
					),
					array(
						'setting'  => 'footer_extra',
						'operator' => '==',
						'value'    => '1',
					),
				),
			),

			'footer_socials_content'        => array(
				'type'            => 'textarea',
				'label'           => esc_html__( 'Footer Social Content', 'amwal' ),
				'description'     => esc_html__( 'Enter footer social content', 'amwal' ),
				'section'         => 'footer_extra',
				'default'         => '',
				'priority'        => 15,
				'active_callback' => array(
					array(
						'setting'  => 'footer_extra',
						'operator' => '==',
						'value'    => '1',
					),
				),
			),
			'footer_socials'                => array(
				'type'            => 'repeater',
				'label'           => esc_html__( 'Socials', 'amwal' ),
				'section'         => 'footer_extra',
				'priority'        => 15,
				'default'         => array(
					array(
						'link_url' => 'https://facebook.com/amwal',
					),
					array(
						'link_url' => 'https://twitter.com/amwal',
					),
					array(
						'link_url' => 'https://www.behance.net/amwal',
					),
					array(
						'link_url' => 'https://www.skype.com/en/',
					),
					array(
						'link_url' => 'http://www.apple.com/',
					)
				),
				'fields'          => array(
					'link_url' => array(
						'type'        => 'text',
						'label'       => esc_html__( 'Social URL', 'amwal' ),
						'description' => esc_html__( 'Enter the URL for this social', 'amwal' ),
						'default'     => '',
					),
				),
				'active_callback' => array(
					array(
						'setting'  => 'footer_extra',
						'operator' => '==',
						'value'    => '1',
					),
				),
			),
			'footer_widget'                 => array(
				'type'        => 'toggle',
				'label'       => esc_html__( 'Show Footer Widget', 'amwal' ),
				'description' => esc_html__( 'Display widget on footer', 'amwal' ),
				'section'     => 'footer_widget',
				'default'     => '1',
				'priority'    => 20,
			),
			'footer_widget_columns'         => array(
				'type'            => 'radio',
				'label'           => esc_html__( 'Footer Widget Columns', 'amwal' ),
				'description'     => esc_html__( 'How many sidebar you want to show on footer', 'amwal' ),
				'section'         => 'footer_widget',
				'default'         => '4',
				'priority'        => 25,
				'choices'         => array(
					'1' => esc_html__( '1 Column', 'amwal' ),
					'2' => esc_html__( '2 Columns', 'amwal' ),
					'3' => esc_html__( '3 Columns', 'amwal' ),
					'4' => esc_html__( '4 Columns', 'amwal' ),
				),
				'active_callback' => array(
					array(
						'setting'  => 'footer_widget',
						'operator' => '==',
						'value'    => '1',
					),
				),
			),
			'footer_widget_custom'          => array(
				'type'            => 'custom',
				'description'     => sprintf( wp_kses_post( 'Please go to <a href="%s">Widgets</a> to drag widgets to footer', 'amwal' ), admin_url( 'widgets.php' ) ),
				'section'         => 'footer_widget',
				'priority'        => 30,
				'active_callback' => array(
					array(
						'setting'  => 'footer_widget',
						'operator' => '==',
						'value'    => '1',
					),
				),
			),

			'footer_background'             => array(
				'type'     => 'image',
				'label'    => esc_html__( 'Footer Background', 'amwal' ),
				'section'  => 'footer',
				'default'  => '',
				'priority' => 15,
			),
			'footer_background_horizontal ' => array(
				'type'     => 'select',
				'label'    => esc_html__( 'Background Horizontal', 'amwal' ),
				'default'  => 'left',
				'section'  => 'footer',
				'priority' => 15,
				'choices'  => array(
					'left'   => esc_html__( 'Left', 'amwal' ),
					'right'  => esc_html__( 'Right', 'amwal' ),
					'center' => esc_html__( 'Center', 'amwal' ),
				),

			),
			'footer_background_vertical'    => array(
				'type'     => 'select',
				'label'    => esc_html__( 'Background Vertical', 'amwal' ),
				'default'  => 'top',
				'section'  => 'footer',
				'priority' => 15,
				'choices'  => array(
					'top'    => esc_html__( 'Top', 'amwal' ),
					'center' => esc_html__( 'Center', 'amwal' ),
					'bottom' => esc_html__( 'Bottom', 'amwal' ),
				),

			),
			'footer_background_repeats'     => array(
				'type'     => 'select',
				'label'    => esc_html__( 'Background Repeat', 'amwal' ),
				'default'  => 'repeat',
				'section'  => 'footer',
				'priority' => 15,
				'choices'  => array(
					'repeat'    => esc_html__( 'Repeat', 'amwal' ),
					'repeat-x'  => esc_html__( 'Repeat Horizontally', 'amwal' ),
					'repeat-y'  => esc_html__( 'Repeat Vertically', 'amwal' ),
					'no-repeat' => esc_html__( 'No Repeat', 'amwal' ),
				),

			),
			'footer_background_attachments' => array(
				'type'     => 'select',
				'label'    => esc_html__( 'Background Attachment', 'amwal' ),
				'default'  => 'scroll',
				'section'  => 'footer',
				'priority' => 15,
				'choices'  => array(
					'scroll' => esc_html__( 'Scroll', 'amwal' ),
					'fixed'  => esc_html__( 'Fixed', 'amwal' ),
				),

			),
			'footer_background_size'        => array(
				'type'     => 'select',
				'label'    => esc_html__( 'Background Size', 'amwal' ),
				'default'  => 'normal',
				'section'  => 'footer',
				'priority' => 15,
				'choices'  => array(
					'normal'  => esc_html__( 'Normal', 'amwal' ),
					'contain' => esc_html__( 'Contain', 'amwal' ),
					'cover'   => esc_html__( 'Cover', 'amwal' ),
				),

			),
			'footer_background_overlay'     => array(
				'type'     => 'toggle',
				'label'    => esc_html__( 'Show Footer Background Overlay', 'amwal' ),
				'section'  => 'footer',
				'default'  => '1',
				'priority' => 20,
			),

			'footer_newsletter'                   => array(
				'type'        => 'toggle',
				'label'       => esc_html__( 'Show Footer Newsletter', 'amwal' ),
				'description' => esc_html__( 'Display newsletter form on footer', 'amwal' ),
				'section'     => 'footer_newsletter',
				'default'     => '1',
				'priority'    => 15,
			),

			'footer_newsletter_bg'                => array(
				'type'            => 'image',
				'label'           => esc_html__( 'Newsletter Background', 'amwal' ),
				'section'         => 'footer_newsletter',
				'default'         => '',
				'priority'        => 15,
				'active_callback' => array(
					array(
						'setting'  => 'footer_newsletter',
						'operator' => '==',
						'value'    => '1',
					),
				),
			),
			'footer_newsletter_bg_horizontal '    => array(
				'type'            => 'select',
				'label'           => esc_html__( 'Newsletter Background Horizontal', 'amwal' ),
				'default'         => 'left',
				'section'         => 'footer_newsletter',
				'priority'        => 15,
				'choices'         => array(
					'left'   => esc_html__( 'Left', 'amwal' ),
					'right'  => esc_html__( 'Right', 'amwal' ),
					'center' => esc_html__( 'Center', 'amwal' ),
				),
				'active_callback' => array(
					array(
						'setting'  => 'footer_newsletter',
						'operator' => '==',
						'value'    => '1',
					),
				),
			),
			'footer_newsletter_bg_vertical'       => array(
				'type'            => 'select',
				'label'           => esc_html__( 'Newsletter Background Vertical', 'amwal' ),
				'default'         => 'top',
				'section'         => 'footer_newsletter',
				'priority'        => 15,
				'choices'         => array(
					'top'    => esc_html__( 'Top', 'amwal' ),
					'center' => esc_html__( 'Center', 'amwal' ),
					'bottom' => esc_html__( 'Bottom', 'amwal' ),
				),
				'active_callback' => array(
					array(
						'setting'  => 'footer_newsletter',
						'operator' => '==',
						'value'    => '1',
					),
				),
			),
			'footer_newsletter_bg_repeats'        => array(
				'type'            => 'select',
				'label'           => esc_html__( 'Newsletter Background Repeat', 'amwal' ),
				'default'         => 'repeat',
				'section'         => 'footer_newsletter',
				'priority'        => 15,
				'choices'         => array(
					'repeat'    => esc_html__( 'Repeat', 'amwal' ),
					'repeat-x'  => esc_html__( 'Repeat Horizontally', 'amwal' ),
					'repeat-y'  => esc_html__( 'Repeat Vertically', 'amwal' ),
					'no-repeat' => esc_html__( 'No Repeat', 'amwal' ),
				),
				'active_callback' => array(
					array(
						'setting'  => 'footer_newsletter',
						'operator' => '==',
						'value'    => '1',
					),
				),
			),
			'footer_newsletter_bg_attachments'    => array(
				'type'            => 'select',
				'label'           => esc_html__( 'Newsletter Background Attachment', 'amwal' ),
				'default'         => 'scroll',
				'section'         => 'footer_newsletter',
				'priority'        => 15,
				'choices'         => array(
					'scroll' => esc_html__( 'Scroll', 'amwal' ),
					'fixed'  => esc_html__( 'Fixed', 'amwal' ),
				),
				'active_callback' => array(
					array(
						'setting'  => 'footer_newsletter',
						'operator' => '==',
						'value'    => '1',
					),
				),
			),
			'footer_newsletter_bg_size'           => array(
				'type'            => 'select',
				'label'           => esc_html__( 'Newsletter Background Size', 'amwal' ),
				'default'         => 'normal',
				'section'         => 'footer_newsletter',
				'priority'        => 15,
				'choices'         => array(
					'normal'  => esc_html__( 'Normal', 'amwal' ),
					'contain' => esc_html__( 'Contain', 'amwal' ),
					'cover'   => esc_html__( 'Cover', 'amwal' ),
				),
				'active_callback' => array(
					array(
						'setting'  => 'footer_newsletter',
						'operator' => '==',
						'value'    => '1',
					),
				),

			),

			'footer_newsletter_subtitle'          => array(
				'type'            => 'text',
				'label'           => esc_html__( 'Newsletter Subtitle', 'amwal' ),
				'section'         => 'footer_newsletter',
				'description'     => esc_html__( 'Enter the newsletter subtitle', 'amwal' ),
				'default'         => esc_html__( 'Newsletter for receive', 'amwal' ),
				'priority'        => 20,
				'active_callback' => array(
					array(
						'setting'  => 'footer_newsletter',
						'operator' => '==',
						'value'    => '1',
					),
				),
			),
			'footer_newsletter_title'             => array(
				'type'            => 'text',
				'label'           => esc_html__( 'Newsletter Title', 'amwal' ),
				'section'         => 'footer_newsletter',
				'description'     => esc_html__( 'Enter the title in this format "A|B|C and the B element is primary color.', 'amwal' ),
				'default'         => esc_html__( 'our|lastest company|updates', 'amwal' ),
				'priority'        => 20,
				'active_callback' => array(
					array(
						'setting'  => 'footer_newsletter',
						'operator' => '==',
						'value'    => '1',
					),
				),
			),
			'footer_newsletter_form'            => array(
				'type'            => 'textarea',
				'label'           => esc_html__( 'Footer NewsLetter Form', 'amwal' ),
				'description'     => sprintf( wp_kses_post( 'Please go to <a href="%s">MailChimp Forms</a> to get shortcode.', 'amwal' ), admin_url( 'admin.php?page=mailchimp-for-wp' ) ),
				'section'         => 'footer_newsletter',
				'default'         => '',
				'priority'        => 20,
				'active_callback' => array(
					array(
						'setting'  => 'footer_newsletter',
						'operator' => '==',
						'value'    => '1',
					),
				),
			),

			'footer_copyright'              => array(
				'type'        => 'textarea',
				'label'       => esc_html__( 'Footer Copyright', 'amwal' ),
				'description' => esc_html__( 'Shortcodes are allowed', 'amwal' ),
				'section'     => 'footer_copyright',
				'default'     => esc_html__( 'Copyright &copy; 2017', 'amwal' ),
				'priority'    => 20,
			),

			'footer_copyright_transparent'  => array(
				'type'     => 'toggle',
				'label'    => esc_html__( 'Footer Copyright Transparent', 'amwal' ),
				'section'  => 'footer_copyright',
				'default'  => '0',
				'priority' => 25,
			),
			'footer_copyright_border_top'   => array(
				'type'            => 'toggle',
				'label'           => esc_html__( 'Show Copyright Border Top', 'amwal' ),
				'description'     => esc_html__( 'Display border top on footer copyright', 'amwal' ),
				'section'         => 'footer_copyright',
				'default'         => '0',
				'priority'        => 30,
				'active_callback' => array(
					array(
						'setting'  => 'footer_copyright_transparent',
						'operator' => '==',
						'value'    => '1',
					),
				),
			),
			'footer_copyright_position'     => array(
				'type'     => 'select',
				'label'    => esc_html__( 'Footer Copyright Position', 'amwal' ),
				'section'  => 'footer_copyright',
				'default'  => 'bottom',
				'priority' => 30,
				'choices'  => array(
					'top'    => esc_html__( 'Top', 'amwal' ),
					'bottom' => esc_html__( 'Bottom', 'amwal' ),
				),
			),

		),
	)
);
