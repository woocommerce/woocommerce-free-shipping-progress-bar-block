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
function create_block_interactive_block_block_init() {
	register_block_type(
		__DIR__,
		array(
			'render_callback' => 'render_block_with_attributes',
		)
	);
}

/**
 * Enqueue the frontend scripts.
 */
function enqueue_frontend_script() {
	$script_path       = 'build/frontend.js';
	$script_asset_path = 'build/frontend.asset.php';
	$script_asset      = require( $script_asset_path );
	$script_url        = plugins_url( $script_path, __FILE__ );
	wp_enqueue_script( 'script', $script_url, $script_asset['dependencies'], $script_asset['version'] );
}

/**
 * Add attributes to block.
 *
 * @param array  $attributes    The array with attributes.
 * @param string $content       The original block HTML code.
 * @return string               The updated block HTML code.
 */
function add_attributes_to_block( $attributes = array(), $content = '' ) {
	$escaped_data_attributes = array();

	// Add the custom background color to the attributes array.
	if ( ! $attributes['backgroundColor'] && isset( $attributes['style'], $attributes['style']['color'], $attributes['style']['color']['background'] ) ) {
		$attributes['backgroundColor'] = $attributes['style']['color']['background'];
	}

	// Add the custom text color to the attributes array.
	if ( ! $attributes['textColor'] && isset( $attributes['style'], $attributes['style']['color'], $attributes['style']['color']['text'] ) ) {
		$attributes['textColor'] = $attributes['style']['color']['text'];
	}

	foreach ( $attributes as $key => $value ) {
		if ( 'style' === $key ) {
			continue;
		}

		if ( is_bool( $value ) ) {
			$value = $value ? 'true' : 'false';
		}

		if ( ! is_scalar( $value ) ) {
			$value = wp_json_encode( $value );
		}

		$escaped_data_attributes[] = 'data-' . esc_attr( strtolower( preg_replace( '/(?<!\ )[A-Z]/', '-$0', $key ) ) ) . '="' . esc_attr( $value ) . '"';
	}

	return preg_replace( '/^<div /', '<div ' . implode( ' ', $escaped_data_attributes ) . ' ', trim( $content ) );
}

/**
 * Render block with attributes.
 *
 * @param array  $attributes    The array with attributes.
 * @param string $content       The original block HTML code.
 * @return string               The updated block HTML code.
 */
function render_block_with_attributes( $attributes = array(), $content = '' ) {
	if ( ! is_admin() ) {
		enqueue_frontend_script();
	}
	return add_attributes_to_block( $attributes, $content );
};

add_action( 'init', 'create_block_interactive_block_block_init' );

/**
 * Add experimentalfilter to add data attributes to the free shipping progress bar block.
 *
 * @see https://github.com/woocommerce/woocommerce-gutenberg-products-block/blob/trunk/docs/blocks/feature-flags-and-experimental-interfaces.md
 */
add_filter(
	'__experimental_woocommerce_blocks_add_data_attributes_to_block',
	function ( $allowed_blocks ) {
		$allowed_blocks[] = 'nielslange/free-shipping-progress-bar';
		return $allowed_blocks;
	},
	10,
	1
);
