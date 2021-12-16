/**
 * External dependencies
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

/**
 * Internal dependencies
 */
import ProgressBar from './../index';

const outer = '.wc-free-shipping-progress-bar__outer';
const inner = '.wc-free-shipping-progress-bar__inner';

describe( 'The ProgressBar component', () => {
	it( 'shows the classnames of the outer div correctly', () => {
		render( <ProgressBar /> );
		expect( document.querySelector( outer ) ).toBeInTheDocument();
	} );

	it( 'shows the classnames of the inner div correctly', () => {
		render( <ProgressBar /> );
		expect( document.querySelector( inner ) ).toBeInTheDocument();
	} );

	it( 'shows the style for a full bar correctly', () => {
		render( <ProgressBar freeShippingFrom="4" currentTotal="4" /> );
		expect( document.querySelector( inner ) ).toHaveStyle( 'width: 100%' );
	} );

	it( 'shows the style for a threequarter bar correctly', () => {
		render( <ProgressBar freeShippingFrom="4" currentTotal="3" /> );
		expect( document.querySelector( inner ) ).toHaveStyle( 'width: 75%' );
	} );

	it( 'shows the style for a half bar correctly', () => {
		render( <ProgressBar freeShippingFrom="4" currentTotal="2" /> );
		expect( document.querySelector( inner ) ).toHaveStyle( 'width: 50%' );
	} );

	it( 'shows the style for an empty bar correctly', () => {
		render( <ProgressBar freeShippingFrom="4" currentTotal="0" /> );
		expect( document.querySelector( inner ) ).toHaveStyle( 'width: 0%' );
	} );
} );
