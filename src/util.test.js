/**
 * Internal dependencies
 */
import { getRemaining } from './util';

describe( 'The function getRemaining()', () => {
	test.each`
		freeShippingFrom | currentTotal | minorUnit | expected
		${ 50 }          | ${ 48 }      | ${ 2 }    | ${ 200 }
		${ 50 }          | ${ 48 }      | ${ 3 }    | ${ 2000 }
		${ 50 }          | ${ 48 }      | ${ 0 }    | ${ 2 }
		${ 50 }          | ${ 23.5 }    | ${ 2 }    | ${ 2650 }
		${ 50 }          | ${ 23.05 }   | ${ 2 }    | ${ 2695 }
		${ 50 }          | ${ 23.5 }    | ${ 3 }    | ${ 26500 }
		${ 50 }          | ${ 23.05 }   | ${ 3 }    | ${ 26950 }
		${ 50 }          | ${ 23.5 }    | ${ 0 }    | ${ 27 }
		${ 50 }          | ${ 23.05 }   | ${ 0 }    | ${ 27 }
	`(
		'correctly returns the remaining price given $minorUnit minorUnit, $freeShippingFrom freeShippingFrom and $currentTotal currentTotal as $expected',
		( { minorUnit, freeShippingFrom, currentTotal, expected } ) => {
			const remaining = getRemaining(
				freeShippingFrom,
				currentTotal,
				minorUnit
			);
			expect( remaining ).toEqual( expected );
		}
	);
} );
