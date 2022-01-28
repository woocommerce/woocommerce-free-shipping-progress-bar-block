/**
 * External dependencies
 */
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

/**
 * Internal dependencies
 */
import ProgressLabel from './index';

jest.mock(
	'@woocommerce/price-format',
	() => ( {
		formatPrice: jest.fn().mockImplementation( ( value ) => '$100.00' ),
		getCurrencyFromPriceResponse: jest.fn().mockImplementation( () => ( {
			code: 'USD',
			prefix: '$',
		} ) ),
	} ),
	{ virtual: true }
);

const label = '.wc-free-shipping-progress-bar__label';

describe( 'The ProgressLabel component', () => {
	it( 'shows the classnames of the div correctly', () => {
		render( <ProgressLabel /> );
		expect( document.querySelector( label ) ).toBeInTheDocument();
	} );

	it( 'shows the message for insufficient totals correctly', () => {
		const cart = { cartTotals: { total_price: 10000 } };
		const labelBefore = 'Spend only {amount} more to get free shipping!';
		const labelAfter = 'Spend only $100.00 more to get free shipping!';
		const args = {
			labelSufficientTotals: labelBefore,
			freeShippingFrom: 200,
			cart: cart,
		};

		render( <ProgressLabel { ...args } /> );
		expect( screen.getByText( labelAfter ) ).toBeInTheDocument();
	} );

	it( 'shows the message for sufficient totals correctly', () => {
		const cart = { cartTotals: { total_price: 10000 } };
		const label = 'You have qualified for free shipping. Great job!';
		const args = {
			labelSufficientTotals: label,
			freeShippingFrom: 100,
			cart: cart,
		};

		render( <ProgressLabel { ...args } /> );
		expect( screen.getByText( label ) ).toBeInTheDocument();
	} );
} );
