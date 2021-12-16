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

describe( 'The ProgressLabel component', () => {
	it( 'renders without crashing', () => {
		const div = document.createElement( 'div' );
		ReactDOM.render( <ProgressLabel></ProgressLabel>, div );
	} );

	it( 'shows the classnames of the div correctly', () => {
		const { getByTestId } = render( <ProgressLabel></ProgressLabel> );
		expect( getByTestId( 'progress-bar-label' ) ).toHaveClass(
			'wc-free-shipping-progress-bar__label'
		);
	} );

	it( 'shows the message for insufficient totals correctly', () => {
		const { getByTestId } = render(
			<ProgressLabel
				labelInsufficientTotals="Spend only {amount} more to get free shipping!"
				freeShippingFrom="2"
				currentTotal="1"
			></ProgressLabel>
		);
		expect( getByTestId( 'progress-bar-label' ) ).toHaveTextContent(
			'Spend only 1.00 more to get free shipping!'
		);
	} );

	it( 'shows the message for sufficient totals correctly', () => {
		const { getByTestId } = render(
			<ProgressLabel
				labelSufficientTotals="You have qualified for free shipping. Great job!"
				freeShippingFrom="2"
				currentTotal="2"
			></ProgressLabel>
		);
		expect( getByTestId( 'progress-bar-label' ) ).toHaveTextContent(
			'You have qualified for free shipping. Great job!'
		);
	} );
} );
