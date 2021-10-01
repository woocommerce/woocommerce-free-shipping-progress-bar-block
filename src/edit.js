/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl } from '@wordpress/components';

/**
 * Internal dependencies
 */
import Block from './block';

export default function Edit( { attributes, setAttributes } ) {
	const { freeShippingFrom } = attributes;

	return (
		<div { ...useBlockProps() }>
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
			<Block { ...attributes } />
		</div>
	);
}
