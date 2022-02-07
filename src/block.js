/**
 * Internal dependencies
 */
import ProgressLabel from './components/progress-label';
import ProgressBar from './components/progress-bar';

export default function Block( attributes ) {
	return (
		<div className="wc-free-shipping-progress-bar">
			<ProgressLabel { ...attributes } />
			<ProgressBar { ...attributes } />
		</div>
	);
}
