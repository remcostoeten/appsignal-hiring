// also just some static content to get the hang off tailwind.
export default function Bars() {
	return (
		<>
			<div className='box-property hostnames'>
				<h4 className='flex content-center top-1ext-gray-400 text-sm mb-3'>
					Hostnames
					<span className='px-1'>(3)</span>
				</h4>
				<div className='bar bg-green-600 w-full h-4 mb-3'></div>
			</div>
			<div className='box-property revision'>
				<h4 className='flex content-center top-1ext-gray-400 text-sm mb-3'>
					Revisions
					<span className='px-1'>(3)</span>
				</h4>
				<div className='bar bg-blue-600 w-full h-4 mb-3'></div>
			</div>

			<div className='box flex'>
				<div className=' w-30 px-5 bg-blue-100'>1</div>
				<div className='w-30 px-5 bg-blue-200'>2</div>
				<div className='w-30 px-5 bg-blue-300'>3</div>
				<div className='w-30 px-5 bg-blue-400'>4</div>
				<div className='w-30 px-5 bg-blue-500'>5</div>
			</div>
		</>
	);
}
