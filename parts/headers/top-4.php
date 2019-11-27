<div class="container">
	<div class="row">
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

<div class="header-primary-menu">
	<div class="container">
		<div class="row">
			<div class="menu-col-left col-md-10 col-sm-10 col-xs-12">
				<div class="menu-logo-mobile">
					<?php get_template_part( 'parts/logo' ); ?>
				</div>
				<div class="primary-nav nav">
					<?php amwal_header_menu(); ?>
				</div>
				<?php amwal_icon_menu(); ?>
			</div>

			<div class="menu-col-right col-md-2 col-sm-2 col-xs-12">
				<div class="menu-extra">
					<ul>
						<?php
						amwal_extra_search();
						amwal_extra_cart();
						?>
					</ul>
				</div>
			</div>
		</div>
	</div>
</div>