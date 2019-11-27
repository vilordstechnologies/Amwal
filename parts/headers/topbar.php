
<div id="topbar" class="topbar">
	<div class="container">
		<div class="row">
			<div class="topbar-left topbar-sidebar col-xs-12 col-sm-12 col-md-12 col-lg-7">
				<?php if ( is_active_sidebar( 'topbar-left' ) ) {
					dynamic_sidebar( 'topbar-left' );
				} ?>
			</div>

			<div class="topbar-right topbar-sidebar col-xs-12 col-sm-12 col-md-12 col-lg-5">
				<?php if ( is_active_sidebar( 'topbar-right' ) ) {
					dynamic_sidebar( 'topbar-right' );
				} ?>
			</div>

		</div>
	</div>
</div>