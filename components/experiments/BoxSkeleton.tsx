import Link from 'next/link';
import Bars from './Bars';

export default function BoxSkeleton() {
	return (
		<>
			<div className='container'>
				<div className='py-5 px-5 : border-solid border-2 rounded-lg border-gray-200 container mx-auto my-40'>
					<div className='box max-w-2xl border-'>
						<div className='heading flex justify-between items-center pb-8'>
							<h2 className='text-lg font-bold'>Box Heading</h2>
							<Link className='text-blue-500 underline' href='#'>
								Link
							</Link>
						</div>
						<Bars />
					</div>
				</div>
			</div>
		</>
	);
}
