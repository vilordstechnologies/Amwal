<?php
/**
 * Registering meta boxes
 *
 * All the definitions of meta boxes are listed below with comments.
 *
 * For more information, please visit:
 * @link http://www.deluxeblogtips.com/meta-box/
 */


/**
 * Enqueue script for handling actions with meta boxes
 *
 * @since 1.0
 *
 * @param string $hook
 */
function amwal_meta_box_scripts($hook)
{

	if (in_array($hook, array('post.php', 'post-new.php'))) {
		wp_enqueue_script('amwal-meta-boxes', get_template_directory_uri() . "/js/backend/meta-boxes.js", array('jquery'), '20160921', true);
	}
}

add_action('admin_enqueue_scripts', 'amwal_meta_box_scripts');

/**
 * Registering meta boxes
 *
 * Using Meta Box plugin: http://www.deluxeblogtips.com/meta-box/
 *
 * @see http://www.deluxeblogtips.com/meta-box/docs/define-meta-boxes
 *
 * @param array $meta_boxes Default meta boxes. By default, there are no meta boxes.
 *
 * @return array All registered meta boxes
 */
function amwal_register_meta_boxes($meta_boxes)
{
	// Post format's meta box
	$meta_boxes[] = array(
		'id'       => 'post-format-settings',
		'title'    => esc_html__('Format Details', 'amwal'),
		'pages'    => array('post'),
		'context'  => 'normal',
		'priority' => 'high',
		'autosave' => true,
		'fields'   => array(
			array(
				'name'             => esc_html__('Image', 'amwal'),
				'id'               => 'image',
				'type'             => 'image_advanced',
				'class'            => 'image',
				'max_file_uploads' => 1,
			),
			array(
				'name'  => esc_html__('Gallery', 'amwal'),
				'id'    => 'images',
				'type'  => 'image_advanced',
				'class' => 'gallery',
			),
			array(
				'name'  => esc_html__('Audio', 'amwal'),
				'id'    => 'audio',
				'type'  => 'textarea',
				'cols'  => 20,
				'rows'  => 2,
				'class' => 'audio',
			),
			array(
				'name'  => esc_html__('Video', 'amwal'),
				'id'    => 'video',
				'type'  => 'textarea',
				'cols'  => 20,
				'rows'  => 2,
				'class' => 'video',
			),
			array(
				'name'  => esc_html__('Link', 'amwal'),
				'id'    => 'url',
				'type'  => 'textarea',
				'cols'  => 20,
				'rows'  => 1,
				'class' => 'link',
			),
			array(
				'name'  => esc_html__('Text', 'amwal'),
				'id'    => 'url_text',
				'type'  => 'textarea',
				'cols'  => 20,
				'rows'  => 1,
				'class' => 'link',
			),
			array(
				'name'  => esc_html__('Quote', 'amwal'),
				'id'    => 'quote',
				'type'  => 'textarea',
				'cols'  => 20,
				'rows'  => 2,
				'class' => 'quote',
			),
			array(
				'name'  => esc_html__('Author', 'amwal'),
				'id'    => 'quote_author',
				'type'  => 'textarea',
				'cols'  => 20,
				'rows'  => 1,
				'class' => 'quote',
			),
			array(
				'name'  => esc_html__('Author URL', 'amwal'),
				'id'    => 'author_url',
				'type'  => 'textarea',
				'cols'  => 20,
				'rows'  => 1,
				'class' => 'quote',
			),
			array(
				'name'  => esc_html__('Status', 'amwal'),
				'id'    => 'status',
				'type'  => 'textarea',
				'cols'  => 20,
				'rows'  => 1,
				'class' => 'status',
			),
		),
	);

	// Display Settings
	$meta_boxes[] = array(
		'id'       => 'display-settings',
		'title'    => esc_html__('Display Settings', 'amwal'),
		'pages'    => array('post', 'page', 'portfolio_project', 'service'),
		'context'  => 'normal',
		'priority' => 'high',
		'fields'   => array(
			array(
				'name'  => esc_html__('Layout', 'amwal'),
				'id'    => 'heading_layout',
				'type'  => 'heading',
				'class' => 'hide-homepage hide-fullwidth',
			),
			array(
				'name'  => esc_html__('Custom Layout', 'amwal'),
				'id'    => 'custom_layout',
				'type'  => 'checkbox',
				'std'   => false,
				'class' => 'hide-homepage hide-fullwidth',
			),
			array(
				'name'    => esc_html__('Layout', 'amwal'),
				'id'      => 'layout',
				'type'    => 'image_select',
				'class'   => 'custom-layout hide-homepage hide-fullwidth',
				'options' => array(
					'full-content'    => get_template_directory_uri() . '/img/sidebars/empty.png',
					'sidebar-content' => get_template_directory_uri() . '/img/sidebars/single-left.png',
					'content-sidebar' => get_template_directory_uri() . '/img/sidebars/single-right.png',
				),
			),

		),
	);

	// Newsletter
	$meta_boxes[] = array(
		'id'       => 'page-newsletter-setting',
		'title'    => esc_html__('Newsletter Setting', 'amwal'),
		'pages'    => array('page'),
		'context'  => 'normal',
		'priority' => 'high',
		'fields'   => array(
			array(
				'name'  => esc_html__('Hide Newsletter', 'amwal'),
				'id'    => 'hide_newsletter',
				'type'  => 'checkbox',
				'std'   => false,
				'class' => 'hide-newsletter',
			),
		),
	);

	// Display Coming Soon
	$meta_boxes[] = array(
		'id'       => 'display-comingsoon',
		'title'    => esc_html__('Coming Soon Settings', 'amwal'),
		'pages'    => array('page'),
		'context'  => 'normal',
		'priority' => 'high',
		'fields'   => array(
			array(
				'name'  => esc_html__('Coming Soon Background', 'amwal'),
				'id'    => 'heading_bg_coming',
				'type'  => 'heading',
				'class' => 'show-comingsoon',
			),
			array(
				'name'             => esc_html__('Choose Background Image', 'amwal'),
				'id'               => 'bg_comingsoon',
				'type'             => 'image_advanced',
				'max_file_uploads' => 1,
				'class'            => 'show-comingsoon',
			),
		),
	);

	$meta_boxes[] = array(
		'id'       => 'page-header-settings',
		'title'    => esc_html__('Page Header Settings', 'amwal'),
		'pages'    => array('post', 'page', 'portfolio_project', 'service'),
		'context'  => 'normal',
		'priority' => 'high',
		'fields'   => array(
			array(
				'name'  => esc_html__('Page Header', 'amwal'),
				'id'    => 'heading_page_header',
				'type'  => 'heading',
				'class' => 'hide-homepage',
			),
			array(
				'name'  => esc_html__('Hide Page Header', 'amwal'),
				'id'    => 'hide_page_header',
				'type'  => 'checkbox',
				'std'   => false,
				'class' => 'hide-homepage',
			),
			array(
				'name'  => esc_html__('Hide Breadcrumb', 'amwal'),
				'id'    => 'hide_breadcrumb',
				'type'  => 'checkbox',
				'std'   => false,
				'class' => 'hide-homepage',
			),
			array(
				'name'             => esc_html__('Custom Page Header Background', 'amwal'),
				'id'               => 'page_header_bg',
				'type'             => 'image_advanced',
				'max_file_uploads' => 1,
				'class'            => 'hide-homepage',
			),
		),
	);

	// Testimonial
	$meta_boxes[] = array(
		'id'       => 'testimonial-details',
		'title'    => esc_html__('Testimonial Details', 'amwal'),
		'pages'    => array('testimonial'),
		'context'  => 'normal',
		'priority' => 'high',
		'fields'   => array(
			array(
				'name' => esc_html__('Email', 'amwal'),
				'desc' => esc_html__('Enter email of this customer to get avatar while no thumbnail is set.', 'amwal'),
				'id'   => 'email',
				'type' => 'text',
			),
			array(
				'name' => esc_html__('Byline', 'amwal'),
				'desc' => esc_html__('Enter a byline for the customer giving this testimonial', 'amwal'),
				'id'   => 'byline',
				'type' => 'text',
			),
		),
	);

	// Portfolio
	$meta_boxes[] = array(
		'id'       => 'portfolio-setting',
		'title'    => esc_html__('Portfolio Page Template', 'amwal'),
		'pages'    => array('portfolio_project'),
		'context'  => 'normal',
		'priority' => 'high',
		'fields'   => array(
			array(
				'name'    => esc_html__('Portfolio Template', 'amwal'),
				'id'      => 'portfolio_template',
				'type'    => 'select',
				'options' => array(
					''           => esc_html__('Default', 'amwal'),
					'full-width' => esc_html__('Full Width', 'amwal'),
				),
			),
		),
	);

	// Job Listing Type

	$meta_boxes[] = array(
		'id'       => 'job-settings',
		'title'    => esc_html__('Job Settings', 'amwal'),
		'pages'    => array('job_listing'),
		'context'  => 'normal',
		'priority' => 'high',
		'fields'   => array(
			array(
				'name' => esc_html__('Open Job', 'amwal'),
				'desc' => esc_html__('Open Job information on Job page', 'amwal'),
				'id'   => 'open',
				'type' => 'checkbox',
				'std'  => false,
			),
			array(
				'name' => esc_html__('Job Code', 'amwal'),
				'id'   => 'code',
				'type' => 'text',
			),
			array(
				'name' => esc_html__('Department', 'amwal'),
				'id'   => 'department',
				'type' => 'text',
			),
			array(
				'name' => esc_html__('Experiences Yrs', 'amwal'),
				'id'   => 'exp_year',
				'type' => 'text',
			),
			array(
				'name' => esc_html__('Compensation', 'amwal'),
				'id'   => 'compensation',
				'type' => 'text',
			),
			array(
				'name' => esc_html__('Education', 'amwal'),
				'id'   => 'education',
				'type' => 'text',
			),
			array(
				'name' => esc_html__('Career Level', 'amwal'),
				'id'   => 'career_level',
				'type' => 'text',
			),
			array(
				'name' => esc_html__('Material Status', 'amwal'),
				'id'   => 'material',
				'type' => 'text',
			),
			array(
				'name' => esc_html__('Responsibility', 'amwal'),
				'id'   => 'responsibility',
				'type' => 'wysiwyg',
			),
			array(
				'name' => esc_html__('Skills & Experiences', 'amwal'),
				'id'   => 'skills_experiences',
				'type' => 'wysiwyg',
			),
		),
	);


	return $meta_boxes;
}

add_filter('rwmb_meta_boxes', 'amwal_register_meta_boxes');
