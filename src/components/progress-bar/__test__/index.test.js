/**
 * External dependencies
 */
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

/**
 * Internal dependencies
 */
import ProgressBar from '../index';

const progressbar = '.wc-free-shipping-progress-bar__progress';

describe( 'The ProgressBar component', () => {
	it( 'shows the classnames of the div correctly', () => {
		render( <ProgressBar freeShippingFrom="1" currentTotal="0" /> );
		expect( document.querySelector( progressbar ) ).toBeInTheDocument();
	} );

	it( 'shows the style for a full bar correctly', () => {
		render( <ProgressBar freeShippingFrom="4" currentTotal="4" /> );
		expect( document.querySelector( progressbar ) ).toHaveAttribute(
			'value',
			'100'
		);
	} );

	it( 'shows the style for a three quarter bar correctly', () => {
		render( <ProgressBar freeShippingFrom="4" currentTotal="3" /> );
		expect( document.querySelector( progressbar ) ).toHaveAttribute(
			'value',
			'75'
		);
	} );

	it( 'shows the style for a half bar correctly', () => {
		render( <ProgressBar freeShippingFrom="4" currentTotal="2" /> );
		expect( document.querySelector( progressbar ) ).toHaveAttribute(
			'value',
			'50'
		);
	} );

	it( 'shows the style for a one quarter bar correctly', () => {
		render( <ProgressBar freeShippingFrom="4" currentTotal="1" /> );
		expect( document.querySelector( progressbar ) ).toHaveAttribute(
			'value',
			'25'
		);
	} );

	it( 'shows the style for an empty bar correctly', () => {
		render( <ProgressBar freeShippingFrom="4" currentTotal="0" /> );
		expect( document.querySelector( progressbar ) ).toHaveAttribute(
			'value',
			'0'
		);
	} );
} );
