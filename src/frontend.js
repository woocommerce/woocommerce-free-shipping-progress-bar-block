/**
 * External dependencies
 */
import { registerCheckoutBlock } from '@woocommerce/blocks-checkout';

/**
 * Internal dependencies
 */
import Block from './block';
import metadata from '../block.json';

const options = {
	metadata,
	component: Block,
};

registerCheckoutBlock( options );
