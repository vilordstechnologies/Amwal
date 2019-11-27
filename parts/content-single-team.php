<?php
/**
 * @package Amwal
 */
?>
<div id="post-<?php the_ID(); ?>" <?php post_class( 'team-single' ); ?>>

	<div class="entry-header">
		<?php $thumb = amwal_entry_thumbnail( 'amwal-portfolio-grid' );
		if ( ! empty( $thumb ) ) {
			printf( '<div class="team-single-thumb">%s</div>', $thumb );
		}
		?>
		<div class="team-info">
			<div class="team-title">
				<?php the_title( '<h2 class="team-name">', '</h2>' ); ?>
				<?php
				$job = get_post_meta( get_the_ID(), '_team_member_job', true );
				if ( $job ) {
					printf( '<div class="team-job">%s</div>', $job );
				}
				?>
			</div>
			<div class="team-contact">
				<?php
				$socials       = get_post_meta( get_the_ID(), '_team_member_socials', true );
				$socials_links = '';

				if ( $socials ) {
					$social_links = array();
					foreach ( $socials as $social => $link ) {
						if ( $link ) {
							$social = 'googleplus' == $social ? 'google-plus' : $social;
							$social = 'vimeo' == $social ? 'vimeo-square' : $social;

							$social_links[] = sprintf( '<li><a href="%s" class="fa fa-%s"></a></li>', $link, $social );
						}
					}

					$social_links = '<ul class="socials-icon">' . implode( '', $social_links ) . '</ul>';
				}
				?>
				<div class="team-socials"><?php echo $social_links; ?></div>
				<?php
					$phone = get_post_meta( get_the_ID(), '_team_member_phone', true );
					$email = get_post_meta( get_the_ID(), '_team_member_email', true );
					if ( $phone ) {
						printf( '<div class="team-phone">%s</div>', $phone );
					}
					if( $email ) {
						printf( '<div class="team-email">%s</div>', $email );
					}
				?>

			</div>
		</div>
	</div>

	<div class="entry-content">
		<div class="entry-desc">
			<?php the_content(); ?>
		</div>
		<?php amwal_team_contact_form(); ?>

	</div>
	<!-- .entry-content -->
</div><!-- #post-## -->

