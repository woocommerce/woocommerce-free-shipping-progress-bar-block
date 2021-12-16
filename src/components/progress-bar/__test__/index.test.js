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

describe( 'The ProgressBar component', () => {
	it( 'renders without crashing', () => {
		const div = document.createElement( 'div' );
		ReactDOM.render( <ProgressBar></ProgressBar>, div );
	} );

	it( 'shows the classnames of the outer div correctly', () => {
		const { getByTestId } = render( <ProgressBar></ProgressBar> );
		expect( getByTestId( 'progress-bar-outer' ) ).toHaveClass(
			'wc-free-shipping-progress-bar__outer'
		);
	} );

	it( 'shows the classnames of the inner div correctly', () => {
		const { getByTestId } = render( <ProgressBar></ProgressBar> );
		expect( getByTestId( 'progress-bar-inner' ) ).toHaveClass(
			'wc-free-shipping-progress-bar__inner'
		);
	} );

	it( 'shows the style for a full bar correctly', () => {
		const { getByTestId } = render(
			<ProgressBar freeShippingFrom="4" currentTotal="4"></ProgressBar>
		);
		expect( getByTestId( 'progress-bar-inner' ) ).toHaveStyle(
			'width: 100%'
		);
	} );

	it( 'shows the style for a threequarter bar correctly', () => {
		const { getByTestId } = render(
			<ProgressBar freeShippingFrom="4" currentTotal="3"></ProgressBar>
		);
		expect( getByTestId( 'progress-bar-inner' ) ).toHaveStyle(
			'width: 75%'
		);
	} );

	it( 'shows the style for a half bar correctly', () => {
		const { getByTestId } = render(
			<ProgressBar freeShippingFrom="4" currentTotal="2"></ProgressBar>
		);
		expect( getByTestId( 'progress-bar-inner' ) ).toHaveStyle(
			'width: 50%'
		);
	} );

	it( 'shows the style for an empty bar correctly', () => {
		const { getByTestId } = render(
			<ProgressBar freeShippingFrom="4" currentTotal="0"></ProgressBar>
		);
		expect( getByTestId( 'progress-bar-inner' ) ).toHaveStyle(
			'width: 0%'
		);
	} );
} );
