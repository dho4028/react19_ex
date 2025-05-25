import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

export default function ToggleTheme() {
	const [IsDark, setIsDark] = useState(false);

	useEffect(() => {
		IsDark
			? document.documentElement.setAttribute('data-mode', 'dark')
			: document.documentElement.removeAttribute('data-mode');
	}, [IsDark]);

	return (
		<div className='w-14 h-7 bg-black/7 shadow-inner shadow-black-500/80 rounded-4xl p-1 bordr-b border-white/30 saturate-150'>
			<button
				onClick={() => setIsDark(!IsDark)}
				className={twMerge(
					'size-5 rounded-full cursor-pointer transition duration-500 shadow-md opacity-70 bg-[oklch(var(--point-color))]',
					IsDark ? 'translate-x-0' : 'translate-x-7'
				)}
			></button>
		</div>
	);
}
