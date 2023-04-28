import { render, screen } from '@testing-library/react';

import MetadataDistributions from './MetadataDistributions';
import dataFromGraphql from '@/data/graphql';
import userEvent from '@testing-library/user-event'; // a package which stimulates user events. NPM package can be deleted prior to merging to prod branch if not needed.

describe('MetadataDistributions component', () => {
	// v1
	// Simple test to check if both titles from the graphql data are actually rendered since they are not hardcoded unlike "Attribute distributions" which would be useless to test.

	test('dhe distribution "hostname" is rendered properly ', () => {
		render(
			<MetadataDistributions
				distributions={dataFromGraphql.app.metadataDistributions}
			/>,
		);

		expect(screen.getByText('hostname')).toBeInTheDocument();
	});

	test('The distribution  "revision" is rendered properly ', () => {
		render(
			<MetadataDistributions
				distributions={dataFromGraphql.app.metadataDistributions}
			/>,
		);

		expect(screen.getByText('hostname')).toBeInTheDocument();
	});

	// v2 
	// A more cleaner approach but the problem here is that it will pass regardless of typos coming from the data,  but it will fail if the data is not present in the graphql query. It's a tradeoff which can be discussed based on the amount of data/components that are going to be tested.
	const distributions = dataFromGraphql.app.metadataDistributions;

	distributions.forEach((distribution) => {
		test(`The distribution "${distribution.name}" is rendered properly`, () => {
			render(<MetadataDistributions distributions={[distribution]} />);

			expect(screen.getByText(distribution.name)).toBeInTheDocument();
		});
	});
});
