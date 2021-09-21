import { useBlockProps } from "@wordpress/block-editor";
import ProgressBar from "./components/ProgressBar";

export default function Edit() {
	return (
		<div {...useBlockProps()}>
			<ProgressBar currentTotal="90" freeShippingFrom="100" />
		</div>
	);
}
