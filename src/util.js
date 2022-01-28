/**
 * Internal dependencies
 */
import metadata from '../block.json';

/**
 * Get the current totals.
 *
 * @param {Object} cart The cart object.
 * @returns {Number} The totals of the cart object, if available, else the totals of the cart progress bar preview.
 */
export function getCurrentTotal( cart ) {
	if ( undefined !== cart ) {
		const total_price = cart.cartTotals.total_price;
		const minor_unit = cart.cartTotals.currency_minor_unit;

		return total_price / Math.pow( 10, minor_unit );
	}

	return metadata.attributes.currentTotal.default;
}

/**
 * Get the minor unit.
 *
 * @param {Object} cart The cart object.
 * @returns {Number} The totals of the cart object, if available, else 0.
 */
export function getMinorUnit( cart ) {
	return cart?.cartTotals?.currency_minor_unit || 0;
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
