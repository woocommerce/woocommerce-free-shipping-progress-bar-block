/*
 * External dependencies
 */
import classnames from 'classnames';

/**
 * Internal dependencies
 */
import { getColorClass, getColorCode } from '../../util';

const ProgressLabel = ( {
	currentTotal,
	freeShippingFrom,
	labelInsufficientTotals,
	labelSufficientTotals,
	textColor,
	colorProps,
} ) => {
	const messageClass = getColorClass( textColor, 'color' );
	const messageColor = getColorCode( textColor, colorProps, 'color' );
	const style = { color: messageColor };
	const remaining = Number( freeShippingFrom - currentTotal ).toFixed( 2 );
	const message =
		remaining > 0
			? labelInsufficientTotals.replace( '{amount}', remaining )
			: labelSufficientTotals;

	return (
		<div
			className={ classnames(
				'wc-free-shipping-progress-bar__label',
				messageClass
			) }
			style={ style }
		>
			{ message }
		</div>
	);
};

export default ProgressLabel;
