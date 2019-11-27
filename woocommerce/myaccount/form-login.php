<?php
/**
 * Login Form
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/myaccount/form-login.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see     https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce/Templates
 * @version 3.4.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

?>

<div class="customer-login" id="customer_login">
	<div class="row">
		<div class="col-md-3 col-sm-3 col-login">

		</div>
		<div class="col-md-6 col-sm-6 col-login">
			<?php wc_print_notices(); ?>
			<?php do_action('woocommerce_before_customer_login_form'); ?>
			<div class="tabs">
				<ul class="tabs-nav">
					<li class="active"><a href="#" class="active"><?php esc_html_e('Login', 'amwal'); ?></a></li>
					<?php if (get_option('woocommerce_enable_myaccount_registration') === 'yes') : ?>
						<li><a href="#"><?php esc_html_e('Register', 'amwal'); ?></a></li>
					<?php endif; ?>
				</ul>
				<div class="tabs-panel">
					<form method="post" action="<?php echo esc_url( get_permalink ( get_option( 'woocommerce_myaccount_page_id' ) ) ) ?>" class="login">

						<?php do_action('woocommerce_login_form_start'); ?>

						<p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
							<label for="username"><?php esc_html_e( 'Username or email address', 'amwal' ); ?> <span class="required">*</span></label>
							<input type="text" class="woocommerce-Input woocommerce-Input--text input-text" placeholder="<?php esc_html_e('Username', 'amwal'); ?>" name="username" id="username" value="<?php if ( ! empty( $_POST['username'] ) ) echo esc_attr( $_POST['username'] ); ?>" />
						</p>
						<p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
							<label for="password"><?php esc_html_e( 'Password', 'amwal' ); ?> <span class="required">*</span></label>
							<input class="woocommerce-Input woocommerce-Input--text input-text" placeholder="<?php esc_html_e('Password', 'amwal'); ?>" type="password" name="password" id="password" />
						</p>

						<?php do_action('woocommerce_login_form'); ?>

						<p class="form-row">
							<?php wp_nonce_field( 'woocommerce-login', 'woocommerce-login-nonce' ); ?>
							<input type="submit" class="woocommerce-Button button" name="login" value="<?php esc_attr_e('Sign In', 'amwal'); ?>" />
						</p>
						<p class="woocommerce-LostPassword lost_password">
							<a href="<?php echo esc_url( wp_lostpassword_url() ); ?>"><?php esc_html_e('-  I\'ve forgotten my password ', 'amwal'); ?></a>
						</p>

						<p class="form-row aw-remember">
							<span class="inline">
								<input class="woocommerce-Input woocommerce-Input--checkbox" name="rememberme" type="checkbox" id="rememberme" value="forever"/> <label for="rememberme" class="checkbox"><?php esc_html_e('Remember me', 'amwal'); ?></label>
							</span>
						</p>

						<div class="clear"></div>

						<?php do_action('woocommerce_login_form_end'); ?>

					</form>
				</div>

				<?php if (get_option('woocommerce_enable_myaccount_registration') === 'yes') : ?>


					<div class="tabs-panel">

						<form method="post" class="register">

							<?php do_action('woocommerce_register_form_start'); ?>

							<?php if ('no' === get_option('woocommerce_registration_generate_username')) : ?>

								<p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
									<input type="text" placeholder="<?php esc_html_e('Username', 'amwal'); ?>" class="woocommerce-Input woocommerce-Input--text input-text" name="username" id="reg_username" value="<?php if ( ! empty( $_POST['username'] ) ) echo esc_attr( $_POST['username'] ); ?>" />
								</p>

							<?php endif; ?>

							<p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
								<input type="email" placeholder="<?php esc_html_e('Email address', 'amwal'); ?>" class="woocommerce-Input woocommerce-Input--text input-text" name="email" id="reg_email" value="<?php if ( ! empty( $_POST['email'] ) ) echo esc_attr( $_POST['email'] ); ?>" />
							</p>

							<?php if ('no' === get_option('woocommerce_registration_generate_password')) : ?>

								<p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
									<input type="password" placeholder="<?php esc_html_e('Password', 'amwal'); ?>" class="woocommerce-Input woocommerce-Input--text input-text" name="password" id="reg_password" />
								</p>

							<?php endif; ?>

							<!-- Spam Trap -->
							<div style="<?php echo((is_rtl()) ? 'right' : 'left'); ?>: -999em; position: absolute;"><label for="trap"><?php esc_html_e('Anti-spam', 'amwal'); ?></label><input type="text" name="email_2" id="trap" tabindex="-1"/></div>

							<?php do_action( 'woocommerce_register_form' ); ?>
							<?php do_action( 'register_form' ); ?>

							<p class="woocomerce-FormRow form-row">
								<?php wp_nonce_field( 'woocommerce-register', 'woocommerce-register-nonce' ); ?>
								<input type="submit" class="woocommerce-Button button" name="register" value="<?php esc_attr_e('Register', 'amwal'); ?>" />
							</p>

							<?php do_action('woocommerce_register_form_end'); ?>

						</form>

					</div>
				<?php endif; ?>
			</div>
			<?php do_action('woocommerce_after_customer_login_form'); ?>
		</div>
		<div class="col-md-3 col-sm-3 col-login">

		</div>
	</div>

</div>
