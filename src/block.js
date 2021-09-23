export default function Block( { currentTotal, freeShippingFrom } ) {
	const progress = ( currentTotal / freeShippingFrom ) * 100;
	const divWidth = ( progress > 100 ? 100 : progress ) + '%';
	const divStyle = { width: divWidth };
	const remaining = Number( freeShippingFrom - currentTotal ).toFixed( 2 );
	const message =
		remaining > 0
			? `Spend only $${ remaining } more to get free US shipping.`
			: `You've qualified for free shipping. Great job!`;

	return (
		<div className="wc-free-shipping-progress-bar">
			<div id="message">{ message }</div>
			<div id="progressBar">
				<div id="progress" style={ divStyle }></div>
			</div>
		</div>
	);
}
