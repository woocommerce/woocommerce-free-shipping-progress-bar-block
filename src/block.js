/**
 * External dependencies
 */
import { __, sprintf } from '@wordpress/i18n';

export default function Block( {
	currentTotal,
	freeShippingFrom,
	messageColor,
	progressBarColor,
} ) {
	const progress = ( currentTotal / freeShippingFrom ) * 100;
	const progressWidth = ( progress > 100 ? 100 : progress ) + '%';
	const progressStyle = {
		width: progressWidth,
		background: progressBarColor,
	};
	const progressBarStyle = {
		borderColor: progressBarColor,
	};
	const remaining = Number( freeShippingFrom - currentTotal ).toFixed( 2 );
	const message =
		remaining > 0
			? sprintf(
					__(
						'Spend only $%s more to get free US shipping!',
						'free-shipping-progress-bar'
					),
					remaining
			  )
			: __(
					'You have qualified for free shipping. Great job!',
					'free-shipping-progress-bar'
			  );
	const messageStyle = { color: messageColor };

	return (
		<div className="wc-free-shipping-progress-bar">
			<div id="message" style={ messageStyle }>
				{ message }
			</div>
			<div id="progressBar" style={ progressBarStyle }>
				<div id="progress" style={ progressStyle }></div>
			</div>
		</div>
	);
}
