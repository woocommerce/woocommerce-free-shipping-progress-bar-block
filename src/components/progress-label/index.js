const ProgressLabel = ( {
	currentTotal,
	freeShippingFrom,
	labelInsufficientTotals,
	labelSufficientTotals,
} ) => {
	const remaining = Number( freeShippingFrom - currentTotal ).toFixed( 2 );
	const message =
		remaining > 0
			? labelInsufficientTotals.replace( '{amount}', remaining )
			: labelSufficientTotals;

	return (
		<div className="wc-free-shipping-progress-bar__label">{ message }</div>
	);
};

export default ProgressLabel;
