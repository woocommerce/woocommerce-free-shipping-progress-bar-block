/* eslint-disable jsdoc/require-param-type */
/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import {
	useBlockProps,
	InspectorControls,
	PanelColorSettings,
} from '@wordpress/block-editor';
import { PanelBody, TextControl } from '@wordpress/components';

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
	const { freeShippingFrom, messageColor, progressBarColor } = attributes;

	return (
		<div { ...useBlockProps() }>
			<InspectorControls>
				<PanelBody title="Settings" initialOpen={ true }>
					<TextControl
						label="Free shipping from"
						help="Provide the value in your store currency."
						value={ freeShippingFrom }
						onChange={ ( value ) =>
							setAttributes( {
								freeShippingFrom: value,
							} )
						}
					/>
					<PanelColorSettings
						title={ __(
							'Color Settings',
							'free-shipping-progress-bar'
						) }
						colorSettings={ [
							{
								label: __(
									'Message Color',
									'free-shipping-progress-bar'
								),
								value: messageColor,
								onChange: ( messageColor ) =>
									setAttributes( { messageColor } ),
							},
							{
								label: __(
									'Progress Bar Color',
									'free-shipping-progress-bar'
								),
								value: progressBarColor,
								onChange: ( progressBarColor ) =>
									setAttributes( {
										progressBarColor,
									} ),
							},
						] }
					></PanelColorSettings>
				</PanelBody>
			</InspectorControls>
			<Block { ...attributes } />
		</div>
	);
}
