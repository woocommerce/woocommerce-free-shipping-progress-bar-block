/**
 * External dependencies
 */
import { getColorClassName } from '@wordpress/block-editor';
import { __, sprintf } from '@wordpress/i18n';
import classnames from 'classnames';

export default function Block( {
	color,
	messageColor,
	progressColor,
	currentTotal,
	freeShippingFrom,
} ) {
	const messageColorClass = getColorClassName( 'color', messageColor );
	const messageClasses = classnames( {
		'has-text-color': color || messageColor,
		[ messageColorClass ]: messageColorClass,
	} );
	const progressBorderClass = getColorClassName(
		'border-color',
		progressColor
	);
	const progressBorderClasses = classnames( {
		'has-border': color || progressColor,
		[ progressBorderClass ]: progressBorderClass,
	} );
	const progressBackgroundClass = getColorClassName(
		'background-color',
		progressColor
	);
	const progressBackgroundClasses = classnames( {
		'has-background': color || progressColor,
		[ progressBackgroundClass ]: progressBackgroundClass,
	} );

	const progress = ( currentTotal / freeShippingFrom ) * 100;
	const progressBarWidth = ( progress > 100 ? 100 : progress ) + '%';
	const progressBarStyle = { width: progressBarWidth };
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

	return (
		<div className="wc-free-shipping-progress-bar">
			<div className={ classnames( 'message', messageClasses ) }>
				{ message }
			</div>
			<div
				className={ classnames(
					'progress-container',
					progressBorderClasses
				) }
			>
				<div
					className={ classnames(
						'progress-bar',
						progressBackgroundClasses
					) }
					style={ progressBarStyle }
				></div>
			</div>
		</div>
	);
}
