import dataFromGraphql from '@/data/graphql';
import MetadataDistributions from '@/components/MetadataDistributions';
import Image from 'next/image';
import Link from 'next/link';
export default function Home() {
	const { app } = dataFromGraphql;
	return (
		<div className='page-wrapper bg-gray-100 h-screen flex justify-center items-center flex-col'>
			<div className='absolute top-5'>
				<div className='flex'>
					<Link
						className='mx-2 text-xs underline text-blue-400 font-normal'
						href='https://appsignal-hiring-assesment.netlify.app/'
						target='_blank'>
						Deployment url
					</Link>
					<Link
						className='text-xs underline text-blue-400 font-normal'
						href='https://github.com/remcostoeten/appsignal-hiring'
						target='_blank'>
						Repository url
					</Link>
				</div>
				<h4 className='mx-2'>Designs</h4>
				<div className='flex m-w-64 justify-space-between'>
					<Image src='/box-example.png' width={211} height={300} />
					<Image
						src='/box-example-hover.png'
						width={211}
						height={300}
					/>
				</div>
			</div>
			<div className='w-64 max-w-sm bg-white  metadata border-solid border border-gray-200 rounded-md'>
				<MetadataDistributions
					distributions={app.metadataDistributions}
				/>
			</div>
		</div>
	);
}
