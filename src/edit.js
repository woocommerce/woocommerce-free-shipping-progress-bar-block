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
	withColors,
	PanelColorSettings,
} from '@wordpress/block-editor';
import { PanelBody, TextControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

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
function ProgressEdit( {
	attributes,
	setAttributes,
	messageColor,
	setMessageColor,
	progressColor,
	setProgressColor,
} ) {
	const { freeShippingFrom } = attributes;

	return (
		<div { ...useBlockProps() }>
			<InspectorControls>
				<PanelBody title="Settings" initialOpen={ true }>
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
								value: messageColor.color,
								onChange: setMessageColor,
							},
							{
								label: __(
									'Progress Bar Color',
									'free-shipping-progress-bar'
								),
								value: progressColor.color,
								onChange: setProgressColor,
							},
						] }
					></PanelColorSettings>
				</PanelBody>
			</InspectorControls>
			<Block { ...attributes } />
		</div>
	);
}

const Edit = withColors( 'color', {
	messageColor: 'color',
	progressColor: 'color',
} )( ProgressEdit );

export default Edit;
