import { Link } from 'react-router-dom';

export default function Card({ data }) {
	return (
		<article className='w-full'>
			{/* 썸네일 */}
			<Link
				to={'/detail/' + data.id}
				className='block w-full h-[22vw] relative'
			>
				<img
					src={`https://image.tmdb.org/t/p/w200${data.poster_path}`}
					alt={data.title}
					className='absolute size-full object-cover blur-xl saturate-150 opacity-80 translate-y-4 translate-x-4'
					loading='lazy'
				/>
				<img
					src={`https://image.tmdb.org/t/p/w200${data.poster_path}`}
					alt={data.title}
					className='absolute size-full object-cover rounded-lg'
					loading='lazy'
				/>
			</Link>

			{/* 제목 */}
			<h2 className='text-2xl font-dongle text-[oklch(var(--theme-text))] font-[500] mt-3'>
				<Link to={'/detail/' + data.id}>{data.title}</Link>
			</h2>
		</article>
	);
}
