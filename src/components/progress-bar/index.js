const ProgressBar = ( { currentTotal, freeShippingFrom } ) => {
	const progress = ( currentTotal / freeShippingFrom ) * 100;
	const divWidth = ( progress > 100 ? 100 : progress ) + '%';
	const divStyle = { width: divWidth };

	return (
		<div className="wc-free-shipping-progress-bar__outer">
			<div
				className="wc-free-shipping-progress-bar__inner"
				style={ divStyle }
			></div>
		</div>
	);
};

export default ProgressBar;
