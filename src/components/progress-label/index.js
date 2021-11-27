/**
 * External dependencies
 */
import { formatPrice } from '@woocommerce/price-format';

/**
 * Internal dependencies
 */
import {
	getCurrentTotal,
	getMinorUnit,
	getRemaining,
	getCurrencyFormat,
} from '../../util';

const ProgressLabel = ( {
	freeShippingFrom,
	labelInsufficientTotals,
	labelSufficientTotals,
	cart,
} ) => {
	const currentTotal = getCurrentTotal( cart );
	const minorUnit = getMinorUnit( cart );
	const remaining = getRemaining( freeShippingFrom, currentTotal, minorUnit );
	const currency = getCurrencyFormat( cart );
	const price = formatPrice( remaining, currency );
	const message =
		remaining > 0
			? labelInsufficientTotals.replace( '{amount}', price )
			: labelSufficientTotals;

	return (
		<div className="wc-free-shipping-progress-bar__label">{ message }</div>
	);
};

export default ProgressLabel;
