<?php

class Amwal_Portfolios_Widget extends WP_Widget {
	/**
	 * Holds widget settings defaults, populated in constructor.
	 *
	 * @var array
	 */
	protected $defaults;

	/**
	 * Constructor
	 *
	 * @return Amwal_Recent_Posts_Widget
	 */
	function __construct() {
		$this->defaults = array(
			'title'      => '',
			'limit'      => 3,
			'thumb_size' => 'widget-thumb',
			'cat'        => '',
		);

		parent::__construct(
			'portfolios-widget',
			esc_html__( 'Amwal - Portfolios', 'amwal' ),
			array(
				'classname'   => 'portfolios-widget',
				'description' => esc_html__( 'Advanced portfolios widget.', 'amwal' )
			)
		);
	}

	/**
	 * Display widget
	 *
	 * @param array $args     Sidebar configuration
	 * @param array $instance Widget settings
	 *
	 * @return void
	 */
	function widget( $args, $instance ) {
		$instance = wp_parse_args( $instance, $this->defaults );
		extract( $args );

		$query_args = array(
			'posts_per_page'      => $instance['limit'],
			'post_type'           => 'portfolio_project',
			'ignore_sticky_posts' => true,
		);
		if ( ! empty( $instance['cat'] ) && is_array( $instance['cat'] ) ) {
			$query_args['category__in'] = $instance['cat'];
		}

		$query = new WP_Query( $query_args );

		if ( ! $query->have_posts() ) {
			return;
		}

		echo $before_widget;

		if ( $title = apply_filters( 'widget_title', $instance['title'], $instance, $this->id_base ) ) {
			echo $before_title . $title . $after_title;
		}

		echo '<div class="widget-portfolio-list">';

		while ( $query->have_posts() ) : $query->the_post();

			$thumb = get_the_post_thumbnail( get_the_ID(), $instance['thumb_size'] );
			if ( ! empty( $thumb ) ) :
				?>
				<div class="portfolio-item">
					<?php
					printf(
						'<a class="portfolio-thumb" href="%s" title="%s">%s</a>',
						get_permalink(),
						the_title_attribute( 'echo=0' ),
						$thumb
					);
					?>
				</div>
				<?php
			endif;
		endwhile;

		echo '</div>';
		wp_reset_postdata();

		echo $after_widget;

	}

	/**
	 * Update widget
	 *
	 * @param array $new_instance New widget settings
	 * @param array $old_instance Old widget settings
	 *
	 * @return array
	 */
	function update( $new_instance, $old_instance ) {
		$new_instance['title'] = strip_tags( $new_instance['title'] );
		$new_instance['cat']   = array_filter( $new_instance['cat'] );
		$new_instance['limit'] = intval( $new_instance['limit'] );

		return $new_instance;
	}

	/**
	 * Display widget settings
	 *
	 * @param array $instance Widget settings
	 *
	 * @return void
	 */
	function form( $instance ) {
		$instance = wp_parse_args( $instance, $this->defaults );
		?>

		<p>
			<label for="<?php echo esc_attr( $this->get_field_id( 'title' ) ); ?>"><?php esc_html_e( 'Title', 'amwal' ); ?></label>
			<input class="widefat" id="<?php echo esc_attr( $this->get_field_id( 'title' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'title' ) ); ?>" type="text" value="<?php echo esc_attr( $instance['title'] ); ?>">
		</p>

		<div style="width: 280px; float: left; margin-right: 20px;">
			<p>
				<input id="<?php echo esc_attr( $this->get_field_id( 'limit' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'limit' ) ); ?>" type="text" size="2" value="<?php echo intval( $instance['limit'] ); ?>">
				<label for="<?php echo esc_attr( $this->get_field_id( 'limit' ) ); ?>"><?php esc_html_e( 'Number Of Portfolios', 'amwal' ); ?></label>
			</p>

			<p>
				<label for="<?php echo esc_attr( $this->get_field_id( 'cat' ) ); ?>"><?php esc_html_e( 'Select Portfolios Category: ', 'amwal' ); ?></label>
				<select class="widefat" multiple="multiple" id="<?php echo esc_attr( $this->get_field_id( 'cat' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'cat' ) ); ?>[]">
					<option value="" <?php selected( empty( $instance['cat'] ) ); ?>><?php esc_html_e( 'All Categories', 'amwal' ); ?></option>
					<?php
					$categories = get_terms( 'portfolio_category' );
					foreach ( $categories as $category ) {
						printf(
							'<option value="%s"%s>%s</option>',
							$category->term_id,
							selected( in_array( $category->term_id, (array) $instance['cat'] ) ),
							$category->name
						);
					}
					?>
				</select>
			</p>

			<p>
				<label for="<?php echo esc_attr( $this->get_field_id( 'thumb_size' ) ); ?>"><?php esc_html_e( 'Thumbnail Size', 'amwal' ); ?></label>
				<select name="<?php echo esc_attr( $this->get_field_name( 'thumb_size' ) ); ?>" id="<?php echo esc_attr( $this->get_field_id( 'thumb_size' ) ); ?>" class="widefat">
					<?php foreach ( $sizes = $this->get_image_sizes() as $name => $size ) : ?>
						<option value="<?php echo esc_attr( $name ) ?>" <?php selected( $name, $instance['thumb_size'] ) ?>><?php echo ucfirst( $name ) . " ({$size['width']}x{$size['height']})" ?></option>
					<?php endforeach; ?>
				</select>
			</p>
		</div>


		<div style="clear: both;"></div>
		<?php
	}

	/**
	 * Get available image sizes with width and height following
	 *
	 * @return array|bool
	 */
	public static function get_image_sizes() {
		global $_wp_additional_image_sizes;

		$sizes       = array();
		$image_sizes = get_intermediate_image_sizes();

		// Create the full array with sizes and crop info
		foreach ( $image_sizes as $size ) {
			if ( in_array( $size, array( 'thumbnail', 'medium', 'large' ) ) ) {
				$sizes[$size]['width']  = get_option( $size . '_size_w' );
				$sizes[$size]['height'] = get_option( $size . '_size_h' );
			} elseif ( isset( $_wp_additional_image_sizes[$size] ) ) {
				$sizes[$size] = array(
					'width'  => $_wp_additional_image_sizes[$size]['width'],
					'height' => $_wp_additional_image_sizes[$size]['height'],
				);
			}
		}

		return $sizes;
	}
}
