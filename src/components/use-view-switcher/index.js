/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import { useDispatch, select } from '@wordpress/data';
import { Toolbar, ToolbarDropdownMenu } from '@wordpress/components';
import { store as blockEditorStore } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import { Icon, eye } from '../../icons';

export const useViewSwitcher = ( clientId, views ) => {
	const initialView = views[ 0 ];
	const [ currentView, setCurrentView ] = useState( initialView );
	const { selectBlock } = useDispatch( 'core/block-editor' );
	const { getBlock } = select( blockEditorStore );

	const ViewSwitcherComponent = (
		<Toolbar>
			<ToolbarDropdownMenu
				label={ __( 'Switch view', 'free-shipping-progress-bar' ) }
				text={ currentView.label }
				icon={
					<Icon srcElement={ eye } style={ { marginRight: '8px' } } />
				}
				controls={ views.map( ( view ) => ( {
					...view,
					title: view.label,
					onClick: () => {
						setCurrentView( view );
						selectBlock(
							getBlock( clientId ).innerBlocks.find(
								( block ) => block.name === view.view
							)?.clientId || clientId
						);
					},
				} ) ) }
			/>
		</Toolbar>
	);

	return {
		currentView: currentView.view,
		component: ViewSwitcherComponent,
	};
};

export default useViewSwitcher;
