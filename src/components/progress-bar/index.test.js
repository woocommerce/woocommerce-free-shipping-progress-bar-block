/**
 * External dependencies
 */
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

/**
 * Internal dependencies
 */
import ProgressBar from './index';

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
		const cart = {
			cartTotals: { total_price: 100, currency_minor_unit: 0 },
		};
		render( <ProgressBar freeShippingFrom="100" cart={ cart } /> );
		expect( document.querySelector( inner ) ).toHaveStyle( 'width: 100%' );
	} );

	it( 'shows the style for a threequarter bar correctly', () => {
		const cart = {
			cartTotals: { total_price: 75, currency_minor_unit: 0 },
		};
		render( <ProgressBar freeShippingFrom="100" cart={ cart } /> );
		expect( document.querySelector( inner ) ).toHaveStyle( 'width: 75%' );
	} );

	it( 'shows the style for a half bar correctly', () => {
		const cart = {
			cartTotals: { total_price: 50, currency_minor_unit: 0 },
		};
		render( <ProgressBar freeShippingFrom="100" cart={ cart } /> );
		expect( document.querySelector( inner ) ).toHaveStyle( 'width: 50%' );
	} );

	it( 'shows the style for an empty bar correctly', () => {
		const cart = {
			cartTotals: { total_price: 0, currency_minor_unit: 0 },
		};
		render( <ProgressBar freeShippingFrom="1" cart={ cart } /> );
		expect( document.querySelector( inner ) ).toHaveStyle( 'width: 0%' );
	} );
} );
