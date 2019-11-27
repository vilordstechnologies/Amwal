<?php

class Amwal_Tweets_Widget extends WP_Widget {
	/**
	 * Holds widget settings defaults, populated in constructor.
	 *
	 * @var array
	 */
	protected $defaults;

	/**
	 * Constructor
	 */
	function __construct() {
		$this->defaults = array(
			'title'               => '',
			'consumer_key'        => '',
			'consumer_secret'     => '',
			'access_token'        => '',
			'access_token_secret' => '',
			'cache_time'          => 3600,
			'username'            => '',
			'number'              => 2,
			'created_time'        => 0,
			'autoplay'            => 0,
			'pagination'          => '',
		);

		parent::__construct(
			'tweets-widget',
			esc_html__( 'Amwal - Latest Tweets', 'amwal' ),
			array(
				'classname'   => 'tweets-widget',
				'description' => esc_html__( 'Display latest tweets', 'amwal' ),
			)
		);
	}

	/**
	 * Outputs the HTML for this widget.
	 *
	 * @param array $args     An array of standard parameters for widgets in this theme
	 * @param array $instance An array of settings for this widget instance
	 *
	 * @return void Echoes it's output
	 */
	function widget( $args, $instance ) {
		$instance = wp_parse_args( $instance, $this->defaults );

		if ( ! $instance['consumer_key'] || ! $instance['consumer_secret'] || ! $instance['access_token'] || ! $instance['access_token_secret'] || ! $instance['cache_time'] || ! $instance['username'] ) {
			return;
		}

		extract( $args );
		echo $before_widget;

		if ( $title = apply_filters( 'widget_title', $instance['title'], $instance, $this->id_base ) ) {
			echo $before_title . $title . $after_title;
		}

		$transient_key = 'ta_tweets_' . md5( serialize( $instance ) );
		if ( false === ( $tweets = get_transient( $transient_key ) ) ) {
			require_once get_template_directory() . '/inc/libs/twitter-api-php.php';

			$settings = array(
				'oauth_access_token'        => $instance['access_token'],
				'oauth_access_token_secret' => $instance['access_token_secret'],
				'consumer_key'              => $instance['consumer_key'],
				'consumer_secret'           => $instance['consumer_secret'],
			);

			$url    = 'https://api.twitter.com/1.1/statuses/user_timeline.json';
			$fields = "?screen_name={$instance['username']}&count={$instance['number']}";
			$method = 'GET';

			$twitter = new TwitterAPIExchange( $settings );
			$tweets  = $twitter->setGetfield( $fields )->buildOauth( $url, $method )->performRequest();
			$tweets  = @json_decode( $tweets );

			if ( empty( $tweets ) ) {
				esc_html_e( 'Cannot retrieve tweets.', 'amwal' );
				echo $after_widget;

				return;
			}

			// Save our new transient.
			set_transient( $transient_key, $tweets, $instance['cache_time'] );
		}

		$autoplay = intval( $instance['autoplay'] );
		$autoplay = $autoplay ? intval( $instance['autoplay'] ) : 0;

		$pavi = $instance['pagination'] ? 1 : 0;

		printf( '<ul class="latest-tweets" data-auto="%s" data-pag="%s" >', esc_attr($autoplay), esc_attr($pavi) );


		foreach ( $tweets as $tweet ) {
			if ( $tweet ) {
				$time              = strtotime( $tweet->created_at );
				$created_time      = sprintf( '%s', human_time_diff( $time ) );
				$show_created_time = $instance['created_time'];

				if ( ! $show_created_time ) {
					printf(
						'<li class="tweet-item"><i class="tw-icon fa fa-twitter"></i><p><a class="user-name" href="%s">@%s, </a> %s</p></li>',
						esc_url( 'https://twitter.com/' . $instance['username'] ),
						$instance['username'],
						$this->convert_links( $tweet->text )
					);
				} else {
					printf(
						'<li class="tweet-item"><i class="tw-icon fa fa-twitter"></i><p><a class="user-name" href="%s">@%s, </a>%s</p><span>%s %s</span></li>',
						esc_url( 'https://twitter.com/' . $instance['username'] ),
						$instance['username'],
						$this->convert_links( $tweet->text ),
						$created_time,
						esc_html__( 'ago', 'amwal' )
					);
				}
			}

		}
		echo '</ul>';
		echo $after_widget;
	}

	/**
	 * Replace link tweet
	 *
	 * @param $text
	 *
	 * @return string
	 */
	function convert_links( $text ) {
		$text = preg_replace( '#https?://[a-z0-9._/-]+#i', '<a rel="nofollow" target="_blank" href="$0">$0</a>', $text );
		$text = preg_replace( '#@([a-z0-9_]+)#i', '@<a rel="nofollow" target="_blank" href="http://twitter.com/$1">$1</a>', $text );
		$text = preg_replace( '# \#([a-z0-9_-]+)#i', ' #<a rel="nofollow" target="_blank" href="http://twitter.com/search?q=%23$1">$1</a>', $text );

		return $text;
	}

	/**
	 * Deals with the settings when they are saved by the admin.
	 *
	 * @param array $new_instance
	 * @param array $old_instance
	 *
	 * @return array
	 */
	function update( $new_instance, $old_instance ) {
		$instance                        = array();
		$instance['title']               = strip_tags( $new_instance['title'] );
		$instance['consumer_key']        = strip_tags( $new_instance['consumer_key'] );
		$instance['consumer_secret']     = strip_tags( $new_instance['consumer_secret'] );
		$instance['access_token']        = strip_tags( $new_instance['access_token'] );
		$instance['access_token_secret'] = strip_tags( $new_instance['access_token_secret'] );
		$instance['cache_time']          = strip_tags( $new_instance['cache_time'] );
		$instance['username']            = strip_tags( $new_instance['username'] );
		$instance['number']              = intval( $new_instance['number'] );
		$instance['created_time']        = ! empty( $new_instance['created_time'] );
		$instance['autoplay']            = intval( $new_instance['autoplay'] );
		$instance['pagination']          = ! empty( $new_instance['pagination'] );

		return $instance;
	}

	/**
	 * Displays the form for this widget on the Widgets page of the WP Admin area.
	 *
	 * @param array $instance
	 *
	 * @return array
	 */
	function form( $instance ) {
		$instance = wp_parse_args( $instance, $this->defaults );
		$fields   = array(
			'consumer_key'        => esc_html__( 'Consumer Key', 'amwal' ),
			'consumer_secret'     => esc_html__( 'Consumer Secret', 'amwal' ),
			'access_token'        => esc_html__( 'Access Token', 'amwal' ),
			'access_token_secret' => esc_html__( 'Access Token Secret', 'amwal' ),
			'cache_time'          => esc_html__( 'Cache Time (seconds)', 'amwal' ),
			'username'            => esc_html__( 'Twitter Username', 'amwal' ),
			'number'              => esc_html__( 'Number Of Tweets', 'amwal' ),
		);
		?>

		<p>
			<label for="<?php echo esc_attr( $this->get_field_id( 'title' ) ); ?>"><?php esc_html_e( 'Title', 'amwal' ); ?></label>
			<input class="widefat" id="<?php echo esc_attr( $this->get_field_id( 'title' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'title' ) ); ?>" type="text" value="<?php echo esc_attr( $instance['title'] ); ?>">
		</p>

		<?php
		foreach ( $fields as $k => $v ) {
			printf(
				'<p>
					<label for="%s">%s</label>
					<input type="text" class="widefat" id="%s" name="%s" value="%s">
				</p>',
				$this->get_field_id( $k ),
				$v,
				$this->get_field_id( $k ),
				$this->get_field_name( $k ),
				$instance[$k]
			);
		}
		?>

		<p>
			<input type="checkbox" id="<?php echo esc_attr( $this->get_field_id( 'created_time' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'created_time' ) ); ?>" value="1" <?php checked( 1, $instance['created_time'] ); ?>>
			<label for="<?php echo esc_attr( $this->get_field_id( 'created_time' ) ); ?>"><?php esc_html_e( 'Show Tweet Created Time', 'amwal' ); ?></label>
		</p>

		<p>
			<label for="<?php echo esc_attr( $this->get_field_id( 'autoplay' ) ); ?>"><?php esc_html_e( 'Slider auto play', 'amwal' ); ?></label>
			<input class="widefat" id="<?php echo esc_attr( $this->get_field_id( 'autoplay' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'autoplay' ) ); ?>" type="text" value="<?php echo esc_attr( $instance['autoplay'] ); ?>">
		</p>

		<p>
			<input type="checkbox" id="<?php echo esc_attr( $this->get_field_id( 'pagination' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'pagination' ) ); ?>" value="1" <?php checked( 1, $instance['pagination'] ); ?>>
			<label for="<?php echo esc_attr( $this->get_field_id( 'pagination' ) ); ?>"><?php esc_html_e( 'Show Pagination', 'amwal' ); ?></label>
		</p>

		<?php
	}
}
