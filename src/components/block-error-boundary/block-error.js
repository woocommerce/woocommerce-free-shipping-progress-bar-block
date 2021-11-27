/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';

const BlockError = ( {
	header = __( 'Oops!', 'free-shipping-progress-bar' ),
	text = __(
		'There was an error loading the content.',
		'free-shipping-progress-bar'
	),
	errorMessage,
	errorMessagePrefix = __( 'Error:', 'free-shipping-progress-bar' ),
	button,
} ) => {
	return (
		<div className="wc-free-shipping-progress-bar-error">
			<div className="wc-free-shipping-progress-bar-error__content">
				{ header && (
					<p className="wc-free-shipping-progress-bar-error__header">
						{ header }
					</p>
				) }
				{ text && (
					<p className="wc-free-shipping-progress-bar-error__text">
						{ text }
					</p>
				) }
				{ errorMessage && (
					<p className="wc-free-shipping-progress-bar-error__message">
						{ errorMessagePrefix ? errorMessagePrefix + ' ' : '' }
						{ errorMessage }
					</p>
				) }
				{ button && (
					<p className="wc-free-shipping-progress-bar-error__button">
						{ button }
					</p>
				) }
			</div>
		</div>
	);
};

export default BlockError;
