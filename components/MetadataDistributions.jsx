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

	const renderBars = (distributions, total, colorArray) => {
		const bars = distributions.slice(0, 10).map((item, index) => {
			console.log(item.value);
			const barSize = `${(item.value / 100) * 100}`;
			return (
				<div key={index}>
					<div
						className='bg-red-400 '
						key={`${item.key}-${index}`}
						style={{
							marginRight: '10px',
							width: `${barSize}%`,
						}}>
						{item.value}
					</div>
				</div>
			);
		});

		return bars;
	};

	return (
		<div>
			<div className='metadata__wrapper bg-white'>
				<div className='heading flex justify-between items-center p-4'>
					<h2 className='text-xs text-indigo-900 font-bold'>
						Attribute distributions
					</h2>
					<Link href='/' className='text-xxs underline text-blue-600'>
						All attributes
					</Link>
				</div>
				{distributions.map((distribution) => (
					<>
						<div
							key={distribution.name}
							className='px-4 p-1 border-t border-grey-200 flex align-baseline'>
							<h3 className='text-xs font-medium capitalize'>
								{distribution.name}
								<span className='px-0.5'>
									({distribution.unique})
								</span>
							</h3>
						</div>
						<div className='rounded-md bg-gray-200  h-2 my-4 mx-3 border flex '>
							{renderBars(distribution.distibutions)}
						</div>
					</>
				))}
			</div>
		</div>
	);
}
