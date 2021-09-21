<?php
/**
 * Plugin Name: Woocommerce Free Shipping Progress Bar Block
 * Description: Show a free shipping progress bar.
 * Version: 0.1.0
 * Author: Automattic
 * Author URI: https://woocommerce.com
 * License: GPL-2.0-or-later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: woocommerce-free-shipping-progress-bar-block
 * Requires at least: 5.8
 * Requires PHP: 7.0
 * WC requires at least: 5.6
 * WC tested up to: 5.7
 * 
 * @package WooCommerce\FreeShippingProgressBarBlock
 */

defined( 'ABSPATH' ) || exit;

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/writing-your-first-block-type/
 */
function woocommerce_free_shipping_progress_bar_block_block_init() {
	register_block_type( __DIR__ );
}
add_action( 'init', 'woocommerce_free_shipping_progress_bar_block_block_init' );
