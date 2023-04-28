import { render, screen } from '@testing-library/react';

import MetadataDistributions from './MetadataDistributions';
import dataFromGraphql from '@/data/graphql';
import userEvent from '@testing-library/user-event'; // a package which stimulates user events. NPM package can be deleted prior to merging to prod branch if not needed.

describe('MetadataDistributions component', () => {
	test('The distribution "hostname" is rendered properly ', () => {
		render(
			<MetadataDistributions
				distributions={dataFromGraphql.app.metadataDistributions}
			/>,
		);
		// Simple test to check if both titles from the graphql data are actually rendered since they are not hardcoded unlike "Attribute distributions" which would be useless to test.
		expect(screen.getByText('hostname')).toBeInTheDocument();
	});
	test('The distribution  "revision" is rendered properly ', () => {
		render(
			<MetadataDistributions
				distributions={dataFromGraphql.app.metadataDistributions}
			/>,
		);
		// Simple test to check if both titles from the graphql data are actually rendered since they are not hardcoded unlike "Attribute distributions" which would be useless to test.
		expect(screen.getByText('revision')).toBeInTheDocument();
	});
});
