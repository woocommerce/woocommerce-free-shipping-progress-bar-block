/**
 * External dependencies
 */
import kebabCase from 'lodash.kebabcase';

export function getColorClass( colorSlug, colorContextName ) {
	if ( ! colorSlug || ! colorContextName ) {
		return undefined;
	}

	return `has-${ kebabCase(
		colorSlug
	) }-${ colorContextName } has-text-color`;
}

export function getColorCode( colorCode, colorProps, scope ) {
	if ( colorProps !== undefined && colorProps.style !== undefined ) {
		return colorProps.style[ scope ];
	}

	return colorCode || 'currentColor';
}
