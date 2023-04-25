import Tooltip from '@/components/Tooltip';
import Link from 'next/link';

export default function MetadataDistributions({ distributions }) {
	const greenBarColors = [
		'bg-green-100',
		'bg-green-200',
		'bg-green-300',
		'bg-green-400',
		'bg-green-500',
		'bg-green-600',
		'bg-green-700',
		'bg-green-800',
		'bg-green-900',
		'bg-green-950',
	];
	const blueBarColors = [
		'bg-blue-100',
		'bg-blue-200',
		'bg-blue-300',
		'bg-blue-400',
		'bg-blue-500',
		'bg-blue-600',
		'bg-blue-700',
		'bg-blue-800',
		'bg-blue-950',
	];
	return (
		<div>
			{/* <Tooltip content="I'm a tooltip"> */}
			{/* <h2>Meta/data distributions</h2> */}
			{/* </Tooltip> */}

			<div className='metadata__wrapper bg-white'>
				<div className='heading flex justify-between items-center'>
					<h2 className='text-xs font-bold'>
						Attribute distributions
					</h2>
					<Link
						className='text-xxs underline text-blue-600
'
						href='/'>
						All attributes
					</Link>
				</div>
				{distributions.map((distribution) => (
					<div
						key={distribution.name}
						className='bg-white rounded-lg shadow-md'>
						<div className='p-4'>
							<h3 className='text-xs font-normal'>
								{distribution.name}
							</h3>
							<p className='text-gray-500 text-sm'>
								{distribution.unique}
							</p>
						</div>
					</div>
				))}
			</div>

			{/* <pre>{JSON.stringify(distributions, null, 2)}</pre> */}
		</div>
	);
}
