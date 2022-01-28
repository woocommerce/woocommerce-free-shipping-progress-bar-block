/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	BlockControls,
	InspectorControls,
	PlainText,
	useBlockProps,
} from '@wordpress/block-editor';
import { Notice, PanelBody, TextControl } from '@wordpress/components';

/**
 * Internal dependencies
 */
import BlockErrorBoundary from './components/block-error-boundary';
import ProgressBar from './components/progress-bar';
import useViewSwitcher from './components/use-view-switcher';
import { notice } from './constants';
import { Icon, progressBarHalf, progressBarFull } from './icons';

const BlockSettings = ( { attributes, setAttributes } ) => {
	const { freeShippingFrom } = attributes;

	return (
		<InspectorControls>
			<PanelBody
				title={ __( 'Settings', 'free-shipping-progress-bar' ) }
				initialOpen={ true }
			>
				<TextControl
					label={ __(
						'Free shipping from',
						'free-shipping-progress-bar'
					) }
					help={ __(
						'Provide the value in your store currency.',
						'free-shipping-progress-bar'
					) }
					value={ freeShippingFrom }
					onChange={ ( value ) =>
						setAttributes( {
							freeShippingFrom: value,
						} )
					}
				/>
			</PanelBody>
		</InspectorControls>
	);
};

const Edit = ( { attributes, setAttributes, clientId } ) => {
	const { labelInsufficientTotals, labelSufficientTotals } = attributes;
	const { currentView, component: ViewSwitcherComponent } = useViewSwitcher(
		clientId,
		[
			{
				view: 'insufficient-cart-totals',
				label: __(
					'Insufficient cart totals',
					'free-shipping-progress-bar'
				),
				icon: <Icon srcElement={ progressBarHalf } />,
			},
			{
				view: 'sufficient-cart-totals',
				label: __(
					'Sufficient cart totals',
					'free-shipping-progress-bar'
				),
				icon: <Icon srcElement={ progressBarFull } />,
			},
		]
	);

	return (
		<div { ...useBlockProps() }>
			<BlockErrorBoundary
				header={ __(
					'Progress Bar Block Error',
					'free-shipping-progress-bar'
				) }
				text={ __(
					'There was an error whilst editing the progress bar block. If this problem continues, try re-creating the block.',
					'free-shipping-progress-bar'
				) }
				showErrorMessage={ true }
				errorMessagePrefix={ __(
					'Error message:',
					'free-shipping-progress-bar'
				) }
			>
				<BlockControls __experimentalShareWithChildBlocks>
					{ ViewSwitcherComponent }
				</BlockControls>
				{ currentView === 'insufficient-cart-totals' && (
					<>
						<BlockSettings
							attributes={ attributes }
							setAttributes={ setAttributes }
						/>
						<PlainText
							className="wc-free-shipping-progress-bar__label"
							value={ labelInsufficientTotals }
							onChange={ ( value ) =>
								setAttributes( {
									labelInsufficientTotals: value,
								} )
							}
						/>
						{ ! labelInsufficientTotals.includes( '{amount}' ) && (
							<Notice
								className="wc-free-shipping-progress-bar__notice"
								status="warning"
								isDismissible={ false }
								actions={ [
									{
										label: __(
											'Restore default text',
											'free-shipping-progress-bar'
										),
										onClick: () =>
											setAttributes( {
												labelInsufficientTotals: notice,
											} ),
									},
								] }
							>
								<p>
									{ __(
										'Ensure that the label contains the placeholder {amount}.',
										'free-shipping-progress-bar'
									) }
								</p>
							</Notice>
						) }
						<ProgressBar { ...attributes } />
					</>
				) }
				{ currentView === 'sufficient-cart-totals' && (
					<>
						<PlainText
							className="wc-free-shipping-progress-bar__label"
							value={ labelSufficientTotals }
							onChange={ ( value ) =>
								setAttributes( {
									labelSufficientTotals: value,
								} )
							}
						/>
						<ProgressBar
							{ ...attributes }
							currentTotal="1"
							freeShippingFrom="1"
						/>
					</>
				) }
			</BlockErrorBoundary>
		</div>
	);
};

export default Edit;
