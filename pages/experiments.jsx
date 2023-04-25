import Link from 'next/link';

export default function BoxSkeleton() {
	return (
		<>
			<div className='container	'>
				<div className='py-5 px-5 : border-solid border-2 rounded-lg border-gray-200 container mx-auto my-40'>
					<div className='box max-w-2xl border-'>
						<div className='heading flex justify-between items-center pb-8'>
							<h2 className='text-lg font-bold'>Box Heading</h2>
							<Link className='text-blue-500 underline' href='#'>
								Link
							</Link>
						</div>
						<div className='box-property hostnames'>
							<h4 className='flex content-center top-1ext-gray-400 text-sm mb-3'>
								Hostnames
								<span className='px-1'>(3)</span>
							</h4>
							<div className='box flex'>
								<div className=' w-30 px-5 bg-green-100'>1</div>
								<div className='w-30 px-5 bg-green-200'>2</div>
								<div className='w-30 px-5 bg-green-300'>3</div>
								<div className='w-30 px-5 bg-green-400'>4</div>
								<div className='w-30 px-5 bg-green-600'>5</div>
								<div className='w-30 px-5 bg-green-700'>6</div>
								<div className='w-30 px-5 bg-green-700'>6</div>
								<div className='w-30 px-5 bg-green-800'>6</div>
								<div className='w-30 px-5 bg-green-900'>6</div>
								<div className='w-30 px-5 bg-green-950'>7</div>
							</div>
						</div>
						<div className='box-property revision'>
							<h4 className='flex content-center top-1ext-gray-400 text-sm mb-3'>
								Revisions
								<span className='px-1'>(3)</span>
							</h4>
						</div>
						<div className='box flex'>
							<div className=' w-30 px-5 bg-blue-100'>1</div>
							<div className='w-30 px-5 bg-blue-200'>2</div>
							<div className='w-30 px-5 bg-blue-300'>3</div>
							<div className='w-30 px-5 bg-blue-400'>4</div>
							<div className='w-30 px-5 bg-blue-600'>5</div>
							<div className='w-30 px-5 bg-blue-700'>6</div>
							<div className='w-30 px-5 bg-blue-800'>7</div>
							<div className='w-30 px-5 bg-blue-900'>7</div>
							<div className='w-30 px-5 bg-blue-950'>7</div>
						</div>{' '}
					</div>
				</div>
			</div>
		</>
	);
}
