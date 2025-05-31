import { twMerge } from 'tailwind-merge';
export default function Spinner({ customStyle }) {
	return (
		<section className='size-full bg-white/50 backdrop-blur fixed top-0 left-0 z-150 flex justify-center items-center'>
			<div
				className={twMerge(
					'size-20 border-[oklch(var(--point-color))] border-4 border-t-transparent rounded-full animate-spin',
					customStyle
				)}
			></div>
		</section>
	);
}
