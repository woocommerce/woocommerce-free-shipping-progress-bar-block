export default function ProgressBar(props) {
	const progress = (props.currentTotal / props.freeShippingFrom) * 100;
	const divWidth = (progress > 100 ? 100 : progress) + '%';
	const divStyle = { width: divWidth };
	const remaining = Number(
		props.freeShippingFrom - props.currentTotal
	).toFixed(2);
	const message = `Spend $${remaining} more to get free US shipping.`;

	return (
		<>
			<div id="message"> {message} </div>
			<div id="progressBar">
				<div id="progress" style={divStyle}></div>
			</div>
		</>
	);
}
