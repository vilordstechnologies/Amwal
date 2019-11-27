<div class="header-primary-menu">
	<div class="container">
		<div class="row">
			<div class="menu-col-left col-md-8 col-sm-8 col-xs-12">
				<div class="primary-nav nav">
					<?php amwal_header_menu(); ?>
				</div>
			</div>

			<div class="menu-col-right col-md-4 col-sm-4 col-xs-12">
				<div class="menu-extra">
					<ul>
						<?php
						amwal_extra_search();
						amwal_extra_cart();
						?>
					</ul>
				</div>
				<?php amwal_header_socials(); ?>
			</div>
		</div>
	</div>
</div>
<div class="container">
	<div class="row col-header">
		<div class="header-col-left col-md-3 col-sm-3 col-xs-12">
			<div class="menu-logo">
				<?php get_template_part( 'parts/logo' ); ?>
			</div>
		</div>
		<div class="header-col-right col-md-9 col-sm-9 col-xs-12">
			<?php amwal_header_info(); ?>
		</div>
	</div>
</div>
<div class="header-primary-mobile">
	<div class="container">
		<div class="menu-logo-mobile">
			<?php get_template_part( 'parts/logo' ); ?>
		</div>
		<?php amwal_icon_menu(); ?>
	</div>
</div>
