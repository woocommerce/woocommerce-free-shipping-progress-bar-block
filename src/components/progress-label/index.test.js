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
		formatPrice: jest.fn().mockImplementation( () => '$100.00' ),
		getCurrencyFromPriceResponse: jest.fn().mockImplementation( () => ( {
			code: 'USD',
			prefix: '$',
		} ) ),
	} ),
	{ virtual: true }
);

const label = '.wc-free-shipping-progress-bar__label';

describe( 'The ProgressLabel component', () => {
	/**
	 * Test is the <ProgressLabel /> component renderes correctly without props.
	 */
	it( 'shows the classnames of the div correctly', () => {
		render( <ProgressLabel /> );
		expect( document.querySelector( label ) ).toBeInTheDocument();
	} );

	/**
	 * Test is the <ProgressLabel /> component shows the correct message for the
	 * insufficient totals when shipping is free from $200.00, but the total
	 * cart value is $100.00.
	 */
	it( 'shows the message for insufficient totals correctly', () => {
		const labelBefore = 'Spend only {amount} more to get free shipping!';
		const labelAfter = 'Spend only $100.00 more to get free shipping!';
		const args = {
			freeShippingFrom: 200,
			labelInsufficientTotals: labelBefore,
			cart: {
				cartTotals: { total_price: 100, currency_minor_unit: 0 },
			},
		};

		render( <ProgressLabel { ...args } /> );
		expect( screen.getByText( labelAfter ) ).toBeInTheDocument();
	} );

	/**
	 * Test is the <ProgressLabel /> component shows the correct message for the
	 * sufficient totals when shipping is free from $100.00, and the total cart
	 * value equals $100.00.
	 */
	it( 'shows the message for sufficient totals correctly', () => {
		const label = 'You have qualified for free shipping. Great job!';
		const args = {
			freeShippingFrom: 100,
			labelSufficientTotals: label,
			cart: { cartTotals: { total_price: 100, currency_minor_unit: 0 } },
		};

		const progressbar = render( <ProgressLabel { ...args } /> );
		expect( screen.getByText( label ) ).toBeInTheDocument();
	} );
} );
