/**
 * Get the current totals.
 *
 * @param {Object} cart The cart object.
 * @returns {Number} The totals of the cart object, if available, else the totals of the cart progress bar preview.
 */
export function getCurrentTotal( cart ) {
	if (
		undefined !== cart &&
		undefined !== cart.cartTotals.total_price &&
		undefined !== cart.cartTotals.currency_minor_unit
	) {
		const total_price = cart.cartTotals.total_price;
		const minor_unit = cart.cartTotals.currency_minor_unit;

		return total_price / Math.pow( 10, minor_unit );
	}
	return '';
}

/**
 * Get the minor unit.
 *
 * @param {Object} cart The cart object.
 * @returns {Number} The totals of the cart object, if available, else the totals of the cart progress bar preview.
 */
export function getMinorUnit( cart ) {
	if (
		undefined !== cart &&
		undefined !== cart.cartTotals.currency_minor_unit
	) {
		return cart.cartTotals.currency_minor_unit;
	}
	return '';
}

/**
 * Get the remaining value.
 *
 * @param {Number} freeShippingFrom The free shipping from value.
 * @param {Number} currentTotal The current total value.
 * @param {Number} minorUnit The minor unit value.
 * @returns {Number} The difference between freeShippingFrom and currentTotal.
 */
export function getRemaining( freeShippingFrom, currentTotal, minorUnit ) {
	const remaining = freeShippingFrom - currentTotal;
	const power = Math.pow( 10, minorUnit );
	const result = remaining.toFixed( minorUnit ) * power;

	return result;
}

/**
 * Get the currency format.
 *
 * @param {Object} cart The cart object.
 * @returns {Object} The currency format object.
 */
export function getCurrencyFormat( cart ) {
	let format = {};

	if ( undefined === cart ) {
		return '';
	}

	if ( undefined !== cart.cartTotals.currency_code ) {
		format.code = cart.cartTotals.currency_code;
	}

	if ( undefined !== cart.cartTotals.currency_decimal_separator ) {
		format.decimalSeparator = cart.cartTotals.currency_decimal_separator;
	}

	if ( undefined !== cart.cartTotals.currency_minor_unit ) {
		format.minorUnit = cart.cartTotals.currency_minor_unit;
	}

	if ( undefined !== cart.cartTotals.currency_prefix ) {
		format.prefix = cart.cartTotals.currency_prefix;
	}

	if ( undefined !== cart.cartTotals.currency_suffix ) {
		format.suffix = cart.cartTotals.currency_suffix;
	}

	if ( undefined !== cart.cartTotals.currency_symbol ) {
		format.symbol = cart.cartTotals.currency_symbol;
	}

	if ( undefined !== cart.cartTotals.currency_thousand_separator ) {
		format.thousandSeparator = cart.cartTotals.currency_thousand_separator;
	}

	return format;
}
