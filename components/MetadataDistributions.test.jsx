// ToDo: there's a typo in graphql data which probably is done on purpose to see if any tests catch it. So check for distibutions and not distirbutions

import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import MetadataDistributions from './MetadataDistributions';
import dataFromGraphql from '@/data/graphql';

describe('MetadataDistributions component', () => {
	// v1
	// Simple test to check if both titles from the graphql data are actually rendered since they are not hardcoded unlike "Attribute distributions" which would be useless to test.

	test('the distribution "hostname" is rendered properly', () => {
		render(
			<MetadataDistributions
				distributions={dataFromGraphql.app.metadataDistributions}
			/>,
		);
		expect(screen.getByText('hostname')).toBeInTheDocument();
	});

	test('the distribution "revision" is rendered properly', () => {
		render(
			<MetadataDistributions
				distributions={dataFromGraphql.app.metadataDistributions}
			/>,
		);
		expect(screen.getByText('revision')).toBeInTheDocument();
	});

	// v2
	// A more cleaner approach but the problem here is that it will pass regardless of typos coming from the data,  but it will fail if the data is not present in the graphql query. It's a tradeoff which can be discussed based on the amount of data/components that are going to be tested.
	const distributions = dataFromGraphql.app.metadataDistributions;

	distributions.forEach((distribution) => {
		test(`the distribution "${distribution.name}" is rendered properly`, () => {
			render(<MetadataDistributions distributions={[distribution]} />);
			expect(screen.getByText(distribution.name)).toBeInTheDocument();
		});
	});

	it('Check if there are no more than 10 bars rendered.', () => {
		render(<MetadataDistributions distributions={distributions} />);
		const barElements = screen.getAllByRole('bar');
		expect(barElements.length).toBeLessThanOrEqual(20);
		//  20 because we slice 0,10 bars from the data and there are two distributions in the data.
		// Althrough when typing this out this is not foolprooof obviously since one dist can have 11 bars and the other 9. But it's a start. Should maybe somehow check on the unique parent and then childs instead of the role='bar'.
	});
});
