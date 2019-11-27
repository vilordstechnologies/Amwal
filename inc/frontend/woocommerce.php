<?php

/**
 * Class for all WooCommerce template modification
 *
 * @version 1.0
 */
class Amwal_WooCommerce {
	/**
	 * @var string Layout of current page
	 */
	public $layout;

	/**
	 * Construction function
	 *
	 * @since  1.0
	 * @return Amwal_WooCommerce
	 */
	function __construct() {
		// Check if Woocomerce plugin is actived
		if ( ! in_array( 'woocommerce/woocommerce.php', apply_filters( 'active_plugins', get_option( 'active_plugins' ) ) ) ) {
			return false;
		}

		// Define all hook
		add_action( 'template_redirect', array( $this, 'hooks' ) );

	}

	/**
	 * Hooks to WooCommerce actions, filters
	 *
	 * @since  1.0
	 * @return void
	 */
	function hooks() {

		// WooCommerce Styles
		add_filter( 'woocommerce_enqueue_styles', array( $this, 'wc_styles' ) );

		// Add Bootstrap classes
		add_filter( 'post_class', array( $this, 'product_class' ), 30, 3 );

		// Related cross-sell and upsells columns
		add_filter( 'woocommerce_related_products_columns', array( $this, 'related_products_columns' ), 20 );
		add_filter( 'woocommerce_up_sells_columns', array( $this, 'related_products_columns' ), 20 );
		add_filter( 'woocommerce_cross_sells_columns', array( $this, 'related_products_columns' ), 20 );


		// Remove breadcrumb, use theme's instead
		remove_action( 'woocommerce_before_main_content', 'woocommerce_breadcrumb', 20 );

		// Add badges
		remove_action( 'woocommerce_before_shop_loop_item_title', 'woocommerce_show_product_loop_sale_flash' );
		remove_action( 'woocommerce_before_single_product_summary', 'woocommerce_show_product_sale_flash' );

		// Add/Remove single prosuct
		remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_meta', 40 );

		// Add toolbars for shop page
		add_filter( 'woocommerce_show_page_title', '__return_false' );
		remove_action( 'woocommerce_before_shop_loop', 'woocommerce_result_count', 20 );
		remove_action( 'woocommerce_before_shop_loop', 'woocommerce_catalog_ordering', 30 );
		add_action( 'woocommerce_before_shop_loop', array( $this, 'shop_toolbar' ) );

		// Change product link position
		remove_action( 'woocommerce_after_shop_loop_item', 'woocommerce_template_loop_product_link_close', 5 );
		add_action( 'woocommerce_before_shop_loop_item_title', 'woocommerce_template_loop_product_link_close', 20 );

		// Product share
		add_action( 'woocommerce_share', array( $this, 'share' ) );

		// Add link to product title in shop loop
		remove_action( 'woocommerce_shop_loop_item_title', 'woocommerce_template_loop_product_title' );
		add_action( 'woocommerce_shop_loop_item_title', array( $this, 'show_product_loop_title' ) );

		// Change next and prev text
		add_filter( 'woocommerce_pagination_args', array( $this, 'pagination_args' ) );

		// Change placeholder woocommerce form
		add_filter( 'woocommerce_form_field_args', array( $this, 'woo_form_args' ) );

		// Wrap product
		add_action( 'woocommerce_before_shop_loop_item', array( $this, 'open_loop_product_wrapper' ), 5 );
		add_action( 'woocommerce_after_shop_loop_item', array( $this, 'close_loop_product_wrapper' ), 30 );

		add_action( 'woocommerce_after_shop_loop_item', array( $this, 'show_quickview_buttons' ), 25 );

	}


	/**
	 * Remove default woocommerce styles
	 *
	 * @since  1.0
	 *
	 * @param  array $styles
	 *
	 * @return array
	 */
	function wc_styles( $styles ) {
		// unset( $styles['woocommerce-general'] );
		unset( $styles['woocommerce-layout'] );
		unset( $styles['woocommerce-smallscreen'] );

		return $styles;
	}

	/**
	 * Change related & up-sell products columns
	 *
	 * @param int $columns
	 *
	 * @return int
	 */
	function related_products_columns( $columns ) {
		$columns = intval( amwal_get_option( 'related_product_columns' ) );

		return $columns;
	}

	/**
	 * Add Bootstrap's column classes for product
	 *
	 * @since 1.0
	 *
	 * @param array  $classes
	 * @param string $class
	 * @param string $post_id
	 *
	 * @return array
	 */
	function product_class( $classes, $class = '', $post_id = '' ) {
		if ( ! $post_id || get_post_type( $post_id ) !== 'product' || is_single( $post_id ) ) {
			return $classes;
		}
		global $woocommerce_loop;

		$classes[] = 'col-sm-6 col-xs-12';
		$classes[] = 'col-md-' . (12 / $woocommerce_loop['columns']);

		return $classes;
	}

	/**
	 * Change next and previous icon of pagination nav
	 *
	 * @since  1.0
	 */
	function pagination_args( $args ) {
		$args['prev_text'] = esc_html__( 'Previous', 'amwal' );
		$args['next_text'] = esc_html__( 'Next', 'amwal' );

		return $args;
	}

	/**
	 * Display a tool bar on top of product archive
	 *
	 * @since 1.0
	 */
	function shop_toolbar() {
		?>

		<div class="shop-toolbar">
			<div class="row">
				<div class="toolbar-col-left col-xs-12 col-sm-6">
					<h2 class="page-title"><?php woocommerce_page_title(); ?></h2>
				</div>

				<div class="toolbar-col-right col-xs-12 col-sm-6 text-right">
					<?php woocommerce_catalog_ordering() ?>
				</div>
			</div>
		</div>

		<?php
	}

	/**
	 * Open product wrapper
	 */
	public function open_loop_product_wrapper() {
		?><div class="product-inner"><?php
	}

	/**
	 * Close product wrapper
	 */
	public function close_loop_product_wrapper() {
		?></div><?php
	}

	/**
	 * Print new product title shop page with link inside
	 */
	function show_product_loop_title() {
		?>

		<h3><a href="<?php the_permalink() ?>"><?php the_title() ?></a></h3>

		<?php
	}

	/**
	 * Display quickview
	 *
	 * @since 1.0
	 */
	function show_quickview_buttons() {
		global $product;
		echo '<span data-href="' . $product->get_permalink() . '"  class="product-quick-view woo-btn">
			<i class="fa fa-eye" aria-hidden="true"' . ' data-original-title="' . esc_attr__( 'Quick View', 'amwal' ) . '" rel="tooltip"></i>
			' . esc_html__( 'Quick View', 'amwal' ) . '
		</span>
		<div class="clear"></div>';
	}

	function woo_form_args ( $args ) {
		$args['placeholder'] = $args['label'];

		return $args;
	}

	// Share
	function share() {
		$facecbook_url = add_query_arg( array( 'u' => rawurlencode( get_permalink() ) ), 'https://www.facebook.com/sharer/sharer.php' );
		$twitter_url   = add_query_arg( array( 'url' => rawurlencode( get_permalink() ), 'text' => rawurlencode( get_the_title() ) ), 'https://twitter.com/intent/tweet' );
		$google_url   = add_query_arg( array( 'url' => rawurlencode( get_permalink() ) ), 'https://plus.google.com/share' );
		$linkedin_url = add_query_arg( array( 'url' => rawurlencode( get_permalink() ), 'title' => rawurlencode( get_the_title() ) ), 'https://www.linkedin.com/shareArticle?mini=true' );
		?>

		<div class="product-share">
			<a href="<?php echo esc_url( $facecbook_url ) ?>" target="_blank" class="facebook-share-link">
				<i class="fa fa-facebook"></i>
			</a>
			<a href="<?php echo esc_url( $twitter_url ) ?>" target="_blank" class="twitter-share-link">
				<i class="fa fa-twitter"></i>
			</a>
			<a href="<?php echo esc_url( $google_url ) ?>" target="_blank" class="googleplus-share-link">
				<i class="fa fa-google-plus"></i>
			</a>
			<a href="<?php echo esc_url( $linkedin_url ) ?>" target="_blank" class="linkedin-share-link">
				<i class="fa fa-linkedin"></i>
			</a>
		</div>
		<div class="clear"></div>
		<?php
	}
}
