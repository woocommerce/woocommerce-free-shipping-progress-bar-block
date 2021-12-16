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
import ProgressLabel from '../index';

const label = '.wc-free-shipping-progress-bar__label';

describe( 'The ProgressLabel component', () => {
	it( 'shows the classnames of the div correctly', () => {
		render( <ProgressLabel /> );
		expect( document.querySelector( label ) ).toBeInTheDocument();
	} );

	it( 'shows the message for insufficient totals correctly', () => {
		render(
			<ProgressLabel
				labelInsufficientTotals="Spend only {amount} more to get free shipping!"
				freeShippingFrom="2"
				currentTotal="1"
			/>
		);
		expect( document.querySelector( label ) ).toHaveTextContent(
			'Spend only 1.00 more to get free shipping!'
		);
	} );

	it( 'shows the message for sufficient totals correctly', () => {
		render(
			<ProgressLabel
				labelSufficientTotals="You have qualified for free shipping. Great job!"
				freeShippingFrom="2"
				currentTotal="2"
			/>
		);
		expect( document.querySelector( label ) ).toHaveTextContent(
			'You have qualified for free shipping. Great job!'
		);
	} );
} );
