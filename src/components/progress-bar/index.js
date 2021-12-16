const ProgressBar = ( { currentTotal, freeShippingFrom } ) => {
	const progress = ( currentTotal / freeShippingFrom ) * 100;
	const divWidth = ( progress > 100 ? 100 : progress ) + '%';
	const divStyle = { width: divWidth };

	return (
		<div
			data-testid="progress-bar-outer"
			className="wc-free-shipping-progress-bar__outer"
		>
			<div
				data-testid="progress-bar-inner"
				className="wc-free-shipping-progress-bar__inner"
				style={ divStyle }
			></div>
		</div>
	);
};

export default ProgressBar;
