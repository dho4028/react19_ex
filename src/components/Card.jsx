export default function Card({ data }) {
	return (
		<article className='w-full'>
			{/* 썸네일 */}
			<a href={'/' + data.id} className='block w-full h-[22vw] relative'>
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
			</a>

			{/* 제목 */}
			<h2 className='text-2xl font-dongle text-[oklch(var(--theme-text))] font-[500] mt-3'>
				<a href={'/' + data.id}>{data.title}</a>
			</h2>
		</article>
	);
}
