<?php

?>
<div class="post clearfix">
	<div class="title-area">
		<h3><?php esc_html_e( 'Project Manager', 'amwal' ) ?></h3>
	</div><!-- /.pull-right -->

</div><!-- end post -->

<div class="job-content">

	<?php the_content() ?>
	<?php
	wp_link_pages(
		array(
			'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'amwal' ),
			'after'  => '</div>',
		)
	);
	?>

</div><!-- end post-desc -->



