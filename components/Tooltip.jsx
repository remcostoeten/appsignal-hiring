import 'tippy.js/dist/tippy.css';

import Tippy from '@tippyjs/react';

const Tooltip = ({ content, children, ...rest }) => {
	const tippyProps = {
		placement: 'top',
		interactive: true,
		...rest,
	};

	return (
		<Tippy
			{...tippyProps}
			content={
				<div className='ignore-react-onclickoutside' role='tooltip'>
					{content}
				</div>
			}>
			{children}
		</Tippy>
	);
};

export default Tooltip;
          