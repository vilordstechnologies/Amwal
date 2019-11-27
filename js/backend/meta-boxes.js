jQuery(document).ready(function ($) {
	"use strict";

	// Show/hide settings for post format when choose post format
	var $format = $('#post-formats-select').find('input.post-format'),
		$formatBox = $('#post-format-settings');

	$format.on('change', function () {
		var type = $format.filter(':checked').val();

		$formatBox.hide();
		if ($formatBox.find('.rwmb-field').hasClass(type)) {
			$formatBox.show();
		}

		$formatBox.find('.rwmb-field').slideUp();
		$formatBox.find('.' + type).slideDown();
	});
	$format.filter(':checked').trigger('change');

	// Show/hide settings for custom layout settings
	$('#custom_layout').on('change', function () {
		if ($(this).is(':checked')) {
			$('.rwmb-field.custom-layout').slideDown();
		}
		else {
			$('.rwmb-field.custom-layout').slideUp();
		}
	}).trigger('change');

	// Show/hide settings for template settings
	$('#page_template').on('change', function () {

		if ( $(this).val() == 'template-homepage.php' || $(this).val() == 'template-job.php' ) {

			$('#display-settings').hide();
			$('#display-comingsoon').hide();
			$('#page-header-settings').hide();

		} else if ( $(this).val() == 'template-full-width.php' ) {

			$('#display-settings').hide();
			$('#display-comingsoon').hide();
			$('#page-header-settings').show();

		} else {
			$('#display-settings').show();
			$('#page-header-settings').show();
			$('#display-comingsoon').hide();

			if ($(this).val() == 'template-coming-soon.php') {
				$('#display-comingsoon').show();
				$('#display-settings').hide();
				$('#page-header-settings').hide();
			}
		}

	}).trigger('change');

});
