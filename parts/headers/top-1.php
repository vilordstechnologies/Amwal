<div class="container">
	<?php amwal_icon_menu(); ?>
	<div class="menu-logo">
		<?php get_template_part( 'parts/logo' ); ?>
	</div>
	<div class="menu-extra">
		<ul>
			<?php
			amwal_extra_search();
			amwal_extra_cart();
			?>
		</ul>
	</div>
	<div class="primary-nav nav">
		<?php amwal_header_menu(); ?>
	</div>

</div>