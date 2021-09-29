import kebabCase from 'lodash.kebabcase';

export function getColorClassName( colorContextName, colorSlug ) {
	if ( ! colorContextName || ! colorSlug ) {
		return undefined;
	}

	return `has-${ kebabCase( colorSlug ) }-${ colorContextName }`;
}
