/* eslint-disable jsdoc/require-param-type */
/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, TextareaControl } from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import Block from './block';
/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @param  props
 * @param  props.attributes
 * @param  props.setAttributes
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 * @return {WPElement} Element to render.
 */
export default function Edit( { attributes, setAttributes } ) {
	const {
		insufficientTotals,
		sufficientTotals,
		freeShippingFrom,
	} = attributes;

	return (
		<div { ...useBlockProps() }>
			<InspectorControls>
				<PanelBody
					title={ __( 'Settings', 'free-shipping-progress-bar' ) }
					initialOpen={ true }
				>
					<TextareaControl
						label={ __(
							'Insufficient totals message',
							'free-shipping-progress-bar'
						) }
						help={ __(
							'Provide the message for insufficient totals. %s is a placeholder for the calculated remaining value and should not be removed.',
							'free-shipping-progress-bar'
						) }
						placeholder={ __(
							'Purchase only %s more to get free US shipping!',
							'free-shipping-progress-bar'
						) }
						value={ insufficientTotals }
						onChange={ ( value ) =>
							setAttributes( { insufficientTotals: value } )
						}
					/>
					<TextareaControl
						label={ __(
							'Sufficient totals message',
							'free-shipping-progress-bar'
						) }
						help={ __(
							'Provide the message for sufficient totals.',
							'free-shipping-progress-bar'
						) }
						placeholder={ __(
							'You have qualified for free shipping. Great job!',
							'free-shipping-progress-bar'
						) }
						value={ sufficientTotals }
						onChange={ ( value ) =>
							setAttributes( { sufficientTotals: value } )
						}
					/>
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
							setAttributes( { freeShippingFrom: value } )
						}
					/>
				</PanelBody>
			</InspectorControls>
			<Block { ...attributes } />
		</div>
	);
}
