/**
 * External dependencies
 */
import { cloneElement, isValidElement } from '@wordpress/element';

const Icon = ( { srcElement, size = 24, ...props } ) => {
	if ( ! isValidElement( srcElement ) ) {
		return null;
	}
	return cloneElement( srcElement, {
		width: size,
		height: size,
		...props,
	} );
};

export default Icon;
