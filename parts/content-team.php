<?php
/**
 * @package Amwal
 */

$checkthumb = amwal_entry_thumbnail('amwal-portfolio-grid');

$css_class  = 'col-sm-12 col-md-12 col-xs-12 no-offset no-thumb';

$col_class = 'amwal-team-item col-md-12 col-sm-12 col-xs-12';

$col_header = 'team-col-left col-md-4 col-sm-4 col-xs-12';
?>

<div id="post-<?php the_ID(); ?>" <?php post_class( esc_attr($col_class) ); ?> >
	<div class="row">
		<?php if ( ! empty( $checkthumb ) ) :
			$css_class = 'team-col-right  col-md-9 col-sm-9 col-xs-12 entry-content-offset';
			?>
			<div class="<?php echo esc_attr( $col_header ); ?>">
				<header class="entry-header">
					<?php echo $checkthumb;?>
				</header>
				<!-- .entry-header -->
			</div>
		<?php endif; ?>
		<div class="<?php echo esc_attr( $css_class ); ?>">
			<div class="entry-content">
				<div class="team-header">
					<?php
					the_title( sprintf( '<h2 class="entry-title"><a href="%s" class="team-title" rel="bookmark">', esc_url( get_permalink() ) ), '</a></h2>' );

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
					<div class="team-item-social"><?php echo $social_links; ?></div>

				</div>

				<div class="team-content">
					<div class="team-job"><?php echo get_post_meta( get_the_ID(), '_team_member_job', true ); ?></div>
					<div class="entry-desc">
						<?php
						amwal_team_excerpt_length();
						?>
					</div>
				</div>

			</div>
		</div>

	</div>

</div><!-- #post-## -->
