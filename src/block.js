/**
 * Internal dependencies
 */
import ProgressLabel from './components/progress-label';
import ProgressBar from './components/progress-bar';
import './style.scss';

export default function Block( attributes ) {
	return (
		<>
			<ProgressLabel { ...attributes } />
			<ProgressBar { ...attributes } />
		</>
	);
}
