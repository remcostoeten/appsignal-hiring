import dataFromGraphql from '@/data/graphql';
import MetadataDistributions from '@/components/MetadataDistributions';
import Image from 'next/image';

export default function Home() {
	const { app } = dataFromGraphql;

	return (
		<div className='page-wrapper bg-gray-100 h-screen flex justify-center items-center flex-col'>
			<Image src='/box-example.png' width={211} height={300} />
			<div className='w-64 max-w-sm bg-white  metadata border-solid border border-gray-200 rounded-md'>
				<MetadataDistributions
					distributions={app.metadataDistributions}
				/>
			</div>
		</div>
	);
}
