import { useBlockProps } from "@wordpress/block-editor";
import ProgressBar from "./components/ProgressBar";

export default function save() {
	return (
		<div {...useBlockProps.save()}>
			<ProgressBar currentTotal="90" freeShippingFrom="100" />
		</div>
	);
}
