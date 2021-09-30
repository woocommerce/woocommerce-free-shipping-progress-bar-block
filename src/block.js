/**
 * External dependencies
 */
import { sprintf } from '@wordpress/i18n';

export default function Block( {
	insufficientTotals,
	sufficientTotals,
	currentTotal,
	freeShippingFrom,
} ) {
	const progress = ( currentTotal / freeShippingFrom ) * 100;
	const divWidth = ( progress > 100 ? 100 : progress ) + '%';
	const divStyle = { width: divWidth };
	const remaining = Number( freeShippingFrom - currentTotal ).toFixed( 2 );
	const message =
		remaining > 0
			? sprintf( `${ insufficientTotals }`, `$${ remaining }` )
			: `${ sufficientTotals }`;

	return (
		<div className="wc-free-shipping-progress-bar">
			<div id="message">{ message }</div>
			<div id="progressBar">
				<div id="progress" style={ divStyle }></div>
			</div>
		</div>
	);
}
