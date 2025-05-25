import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

export default function Logo({ title, desc, className }) {
	return (
		<>
			<h1
				className={twMerge(
					'font-orbitron text-2xl theme-text  font-[800] tracking-tighter leading-none',
					className
				)}
			>
				<Link to='/'>{title}</Link>
			</h1>
			{desc && (
				<h2 className='text-xs font-semibold theme-text tracking-wide indent-0.5 opacity-50'>
					{desc}
				</h2>
			)}
		</>
	);
}
