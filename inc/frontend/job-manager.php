<?php

/**
 * Class for all Job_Manager template modification
 *
 * @version 1.0
 */
class Amwal_Job_Manager {
	/**
	 * @var string Layout of current page
	 */
	public $layout;

	/**
	 * Construction function
	 *
	 * @since  1.0
	 * @return amwal_Job_Manager
	 */
	function __construct() {
		// Check if Job_Manager plugin is actived
		if ( ! in_array( 'wp-job-manager/wp-job-manager.php', apply_filters( 'active_plugins', get_option( 'active_plugins' ) ) ) ) {
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

		remove_action( 'single_job_listing_start', 'job_listing_meta_display', 20 );

		add_action( 'single_job_listing_start', array( $this, 'show_job_details' ) );
		add_action( 'single_job_listing_end', array( $this, 'show_responsibility' ), 20 );
		add_action( 'single_job_listing_end', array( $this, 'show_skills_experiences' ), 10 );
	}

	/**
	 * Display job details
	 *
	 * @since 1.0
	 */
	function show_job_details() {
		$department = get_post_meta( get_the_ID(), 'department', true );
		$exp_year = get_post_meta( get_the_ID(), 'exp_year', true );
		$compensation = get_post_meta( get_the_ID(), 'compensation', true );
		$education = get_post_meta( get_the_ID(), 'education', true );
		$career_level = get_post_meta( get_the_ID(), 'career_level', true );
		$material = get_post_meta( get_the_ID(), 'material', true );
		$date = get_post_meta( get_the_ID(), '_job_expires', true );
		?>
		<div class="job-media row">
			<div class="job-details col-1 col-md-6 col-sm-12 col-xs-12">
				<ul>
					<li>
						<label><?php esc_html_e( 'Department', 'amwal' ) ?></label>
						<span><?php echo wp_kses( $department, wp_kses_allowed_html( 'post' )  ); ?></span>
						<div class="clear"></div>
					</li>
					<li>
						<label><?php esc_html_e( 'Experiences Yrs', 'amwal' ) ?></label>
						<span><?php echo wp_kses( $exp_year, wp_kses_allowed_html( 'post' )  ); ?></span>
						<div class="clear"></div>
					</li>
					<li>
						<label><?php esc_html_e( 'Location', 'amwal' ) ?></label>
						<span><?php the_job_location() ?></span>
						<div class="clear"></div>
					</li>
					<li>
						<label><?php esc_html_e( 'Compensation', 'amwal' ) ?></label>
						<span><?php echo wp_kses( $compensation, wp_kses_allowed_html( 'post' )  ); ?></span>
						<div class="clear"></div>
					</li>
				</ul>
			</div>
			<div class="job-details col-2 col-md-6 col-sm-12 col-xs-12">
				<ul>
					<li>
						<label><?php esc_html_e( 'Education', 'amwal' ) ?></label>
						<span><?php echo wp_kses( $education, wp_kses_allowed_html( 'post' )  ); ?></span>
						<div class="clear"></div>
					</li>
					<li>
						<label><?php esc_html_e( 'Career Level', 'amwal' ) ?></label>
						<span><?php echo wp_kses( $career_level, wp_kses_allowed_html( 'post' )  ); ?></span>
						<div class="clear"></div>
					</li>
					<li>
						<label><?php esc_html_e( 'Date Closed', 'amwal' ) ?></label>
						<span><?php echo wp_kses( $date, wp_kses_allowed_html( 'post' )  ); ?></span>
						<div class="clear"></div>
					</li>
					<li>
						<label><?php esc_html_e( 'Material Status', 'amwal' ) ?></label>
						<span><?php echo wp_kses( $material, wp_kses_allowed_html( 'post' )  ); ?></span>
						<div class="clear"></div>
					</li>
				</ul>
			</div>
		</div>
		<?php
	}

	/**
	 * Display Benefits & Perks
	 *
	 * @since 1.0
	 */
	function show_skills_experiences() {
		$skills_experiences = get_post_meta( get_the_ID(), 'skills_experiences', true );
		if ( empty( $skills_experiences ) ) {
			return;
		}
		?>

		<div class="skills">
			<h3><?php esc_html_e( 'Skills & Experiences', 'amwal' ) ?></h3>
			<?php echo wpautop( $skills_experiences ) ?>
		</div>

		<?php
	}

	/**
	 * Display Qualifications
	 *
	 * @since 1.0
	 */
	function show_responsibility() {
		$responsibility = get_post_meta( get_the_ID(), 'responsibility', true );
		if ( empty( $responsibility ) ) {
			return;
		}
		?>
		<div class="responsibility">
			<h3><?php esc_html_e( 'Responsibility', 'amwal' ) ?></h3>
			<?php echo wpautop( $responsibility ) ?>
		</div>
		<div class="clear"></div>

		<?php
	}
}

