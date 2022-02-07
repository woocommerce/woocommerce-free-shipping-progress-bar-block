/*
 * External dependencies
 */
import classnames from 'classnames';

/**
 * Internal dependencies
 */
import { getColorClass, getColorCode } from '../../util';

const ProgressBar = ( {
	currentTotal,
	freeShippingFrom,
	backgroundColor,
	colorProps,
} ) => {
	const progressClass = getColorClass( backgroundColor, 'color' );
	const progressColor = getColorCode(
		backgroundColor,
		colorProps,
		'backgroundColor'
	);
	const progress = ( currentTotal / freeShippingFrom ) * 100;
	const width = progress > 100 ? 100 : progress;
	const style = { color: progressColor };

	return (
		<progress
			className={ classnames(
				'wc-free-shipping-progress-bar__progress',
				progressClass
			) }
			max="100"
			style={ style }
			value={ width }
		/>
	);
};

export default ProgressBar;
