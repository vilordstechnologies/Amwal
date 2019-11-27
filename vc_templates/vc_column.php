<?php
if ( ! defined( 'ABSPATH' ) ) {
	die( '-1' );
}

/**
 * Shortcode attributes
 * @var $atts
 * @var $el_id
 * @var $el_class
 * @var $width
 * @var $css
 * @var $offset
 * @var $content - shortcode content
 * @var $css_animation
 * Shortcode class
 * @var $this WPBakeryShortCode_VC_Column
 */
$el_class = $el_id = $width = $css = $offset = $css_animation = $bg_full_width = '';
$output = '';
$atts = vc_map_get_attributes( $this->getShortcode(), $atts );
extract( $atts );

$width = wpb_translateColumnWidthToSpan( $width );
$width = vc_column_offset_class_merge( $offset, $width );

$css_classes = array(
	$this->getExtraClass( $el_class ) . $this->getCSSAnimation( $css_animation ),
	'wpb_column',
	'vc_column_container',
	$width,
);

if ( vc_shortcode_custom_css_has_property( $css, array(
	'border',
	'background',
) ) ) {
	$css_classes[] = 'vc_col-has-fill';
}

$bg_column = array();
if( $bg_full_width ) {
	preg_match( '/background-image\s*:\s*url\(\s*([\'"]*)(?P<file>[^\1]+)\1\s*\)/i', $css, $matches );
	if ( $matches ) {
		$bg_column[] = $matches[0] . ';';
	}

	preg_match( '/background-color\s*:\s*([^\;]+)\s*\;/i', $css, $matches );
	if ( $matches ) {
		$bg_column[] = $matches[0];
	}

	preg_match( '/background-size\s*:\s*([^\;]+)\s*\;/i', $css, $matches );
	if ( $matches ) {
		$bg_column[] = $matches[0];
	}

	$css_classes[]='col-bg-full';

}

$wrapper_attributes = array();

$css_class = preg_replace( '/\s+/', ' ', apply_filters( VC_SHORTCODE_CUSTOM_CSS_FILTER_TAG, implode( ' ', array_filter( $css_classes ) ), $this->settings['base'], $atts ) );
$wrapper_attributes[] = 'class="' . esc_attr( trim( $css_class ) ) . '"';
if ( ! empty( $el_id ) ) {
	$wrapper_attributes[] = 'id="' . esc_attr( $el_id ) . '"';
}

$output .= '<div ' . implode( ' ', $wrapper_attributes ) . '>';
$output .= '<div class="vc_column-inner ' . esc_attr( trim( vc_shortcode_custom_css_class( $css ) ) ) . '">';
$output .= '<div class="wpb_wrapper">';
$output .= wpb_js_remove_wpautop( $content );
$output .= '</div>';
$output .= '</div>';


if( $bg_full_width ) {
	$output .= '<div class="bg-column" style="' . implode( ' ', $bg_column ) . '"></div>';
}

$output .= '</div>';

echo $output;
