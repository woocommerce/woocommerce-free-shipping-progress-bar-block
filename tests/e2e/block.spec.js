/**
 * External dependencies
 */
import {
	createNewPost,
	enablePageDialogAccept,
	getAllBlocks,
	insertBlock,
} from '@wordpress/e2e-test-utils';

const block = {
	name: 'Free Shipping Progress Bar',
	slug: 'nielslange/free-shipping-progress-bar',
	get dataType() {
		return `[data-type="${ this.slug }"]`;
	},
};

describe( `${ block.name }`, () => {
	beforeAll( async () => {
		await enablePageDialogAccept();
	} );

	beforeEach( async () => {
		await createNewPost();
		await insertBlock( block.name );
	} );

	it( 'renders without crashing', async () => {
		expect( await page.$( block.dataType ) ).not.toBeNull();
	} );

	it( 'can be inserted only once', async () => {
		expect( await getAllBlocks() ).toHaveLength( 1 );
	} );

	it( 'can change free shipping value', async () => {
		/**
		 * @todo: Yet to implement!
		 *
		 */
	} );

	it( 'can change message text', async () => {
		/**
		 * @todo: Yet to implement!
		 */
	} );

	it( 'can change color settings', async () => {
		/**
		 * @todo: Yet to implement!
		 */
	} );
} );
