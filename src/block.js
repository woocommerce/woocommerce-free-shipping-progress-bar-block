export default function Block( {
	insufficient_before,
	insufficient_after,
	sufficient,
	currentTotal,
	freeShippingFrom,
} ) {
	const progress = ( currentTotal / freeShippingFrom ) * 100;
	const divWidth = ( progress > 100 ? 100 : progress ) + '%';
	const divStyle = { width: divWidth };
	const remaining = Number( freeShippingFrom - currentTotal ).toFixed( 2 );
	const message =
		remaining > 0
			? `${ insufficient_before } $${ remaining } ${ insufficient_after }`
			: `${ sufficient }`;

	return (
		<div className="wc-free-shipping-progress-bar">
			<div id="message">{ message }</div>
			<div id="progressBar">
				<div id="progress" style={ divStyle }></div>
			</div>
		</div>
	);
}
