<div class="header-col-right">
	<?php
	amwal_header_info();
	amwal_header_language();
	amwal_header_socials();
	?>
</div>
<div class="header-col-left">
	<div class="menu-logo">
		<?php get_template_part( 'parts/logo' ); ?>
	</div>
	<div class="primary-nav nav">
		<?php amwal_header_menu(); ?>
	</div>
	<?php amwal_icon_menu(); ?>
</div>
