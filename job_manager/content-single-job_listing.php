<?php global $post; ?>
<div class="single_job_listing" itemscope itemtype="http://schema.org/JobPosting">
	<meta itemprop="title" content="<?php echo esc_attr( $post->post_title ); ?>" />

	<?php if ( get_option( 'job_manager_hide_expired_content', 1 ) && 'expired' === $post->post_status ) : ?>
		<div class="job-manager-info"><?php esc_html_e( 'This listing has expired.', 'amwal' ); ?></div>
	<?php else : ?>
		<?php
			/**
			 * single_job_listing_start hook
			 *
			 * @hooked job_listing_meta_display - 20
			 * @hooked job_listing_company_display - 30
			 */
			do_action( 'single_job_listing_start' );
		?>

		<div class="post-desc">
			<div class="job_description" itemprop="description">
				<?php echo apply_filters( 'the_job_description', get_the_content() ); ?>
			</div>

			<?php
			/**
			 * single_job_listing_end hook
			 */
			do_action( 'single_job_listing_end' );
			?>

		</div>

		<div class="apply-job">
			<h3><?php esc_html_e( 'Apply Job', 'amwal' ) ?></h3>
			<?php echo do_shortcode( wp_kses( amwal_get_option( 'job_form' ), wp_kses_allowed_html( 'post' ) ) ); ?>
		</div>

	<?php endif; ?>

</div>
