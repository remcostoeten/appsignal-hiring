import Link from 'next/link';
import Tooltip from '@/components/Tooltip';

export default function MetadataDistributions({ distributions }) {
	const greenBarColors = [
		'bg-green-950',
		'bg-green-900',
		'bg-green-800',
		'bg-green-700',
		'bg-green-600',
		'bg-green-500',
		'bg-green-400',
		'bg-green-300',
		'bg-green-200',
		'bg-green-100',
	];

	const blueBarColors = [
		'bg-blue-950',
		'bg-blue-900',
		'bg-blue-800',
		'bg-blue-700',
		'bg-blue-600',
		'bg-blue-500',
		'bg-blue-400',
		'bg-blue-300',
		'bg-blue-200',
		'bg-blue-100',
	];

	const renderBars = (distributions, colorArray, total) => {
		// 3) Okay so thought this through because the percentages we're off so i'm redoing some logic here

		// Tailwind has 10 colors for each color so if we limit the total bars to the color arrays we do not need to slice at the top map anymore like I initially did.
		const totalBars = colorArray.length;
		const maxBarSize = 100;
		const otherBars = distributions.slice(0, totalBars - 1); // reserve 1 bar at the end for others if needed.
		const distributionBars = distributions.slice(totalBars - 1); // the rest of the bars

		// Calculate the sum of the values for the remaining bars
		// only reduce hen there are more than 10 bars
		const sumOfOtherBars = distributionBars.reduce(
			(acc, item) => acc + item.value,
			0,
		);

		// missing one check here which should be done to prevent creating a others array if there are less than 10 bars.
		// Logic would be something like this but i'm missing something , so leaving it here as a comment.
		// let sumOfOtherBars = distributionBars;
		// if (distributions > totalBars) {
		// 	const sumOfOtherBars = distributionBars.reduce(
		// 		(acc, item) => acc + item.value,
		// 		0,
		// 	);
		// } else {
		// 	const sumOfOtherBars = distributionBars;
		// }

		const condensedDistribution = [
			...otherBars,
			{ value: sumOfOtherBars, key: 'Others' },
		];

		const bars = condensedDistribution.map((item, index) => {
			//1) #19fd348 something not right here with the calculation, but it's close enough i suppose

			const barSize = total !== 0 ? (item.value / total) * 100 : 0;
			// 2) I know what the problem is, basic calculation isn't right and the remaning > 10 need to be added to a total and then the calculation needs to be done again, might do later.

			const percent = item.value / total; // from 0 to 1
			const color = colorArray[index % colorArray.length];

			return (
				<Tooltip
					key={index}
					content={`${item.key} (${(percent * 100).toFixed(1)}%)`}>
					<Link
						// role(?) for testing purpose.
						role='bar'
						href='#'
						className={`h-full bar ${color}`}
						style={{
							marginRight: '1px',
							width: `${barSize}%`,
							cursor: 'pointer',
						}}></Link>
				</Tooltip>
			);
		});

		return bars;
	};

	return (
		<>
			<div>
				<div className='metadata__wrapper bg-white'>
					<div className='heading flex justify-between items-center p-4'>
						<h2 className='text-xs text-indigo-900 font-bold'>
							Attribute distributions
						</h2>
						<Link
							href='/'
							className='text-xxs underline text-blue-600'>
							All attributes
						</Link>
					</div>
					{distributions.map((distribution, index) => (
						<>
							<div
								key={distribution.name}
								className='px-4 p-1 border-t border-grey-200 flex align-baseline'>
								<h3 className='mt-2 text-xs font-medium capitalize'>
									{distribution.name}
									<span className='px-0.5'>
										({distribution.unique})
									</span>
								</h3>
							</div>
							<div className='rounded-md bg-gray-200 mb-4 h-2 mx-3 border flex '>
								{index === 0
									? renderBars(
											distribution.distibutions,
											greenBarColors,
											distribution.total,
									  )
									: renderBars(
											distribution.distibutions,
											blueBarColors,
											distribution.total,
									  )}
							</div>
						</>
					))}
				</div>
			</div>
		</>
	);
}
