/**
 * External dependencies
 */
import { __, sprintf } from '@wordpress/i18n';

export default function Block( { freeShippingFrom, cart } ) {
	let currentTotal;

	if ( undefined === cart ) {
		currentTotal = 45;
	} else {
		currentTotal = cart.cartTotals.total_price / 100;
	}

	const progress = ( currentTotal / freeShippingFrom ) * 100;
	const divWidth = ( progress > 100 ? 100 : progress ) + '%';
	const divStyle = { width: divWidth };
	const remaining = Number( freeShippingFrom - currentTotal ).toFixed( 2 );
	const message =
		remaining > 0
			? sprintf(
					__(
						'Spend only $%s more to get free shipping!',
						'free-shipping-progress-bar'
					),
					remaining
			  )
			: __(
					'You have qualified for free shipping. Great job!',
					'free-shipping-progress-bar'
			  );

	return (
		<div className="wc-free-shipping-progress-bar">
			<div id="message">{ message }</div>
			<div id="progressBar">
				<div id="progress" style={ divStyle }></div>
			</div>
		</div>
	);
}
