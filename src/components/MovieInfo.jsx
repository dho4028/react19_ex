import { useNavigate } from 'react-router-dom';

export default function MovieInfo({ Detail, Trailer, setOpen }) {
	const navigate = useNavigate();
	return (
		<div className='relative w-9/12 h-full pr-10 theme-text flex flex-wrap content-between max-xl:w-full max-xl:pr-0'>
			<article className='relative flex flex-wrap w-full gap-10'>
				<h1 className='w-full text-[5vmax] font-hanna leading-none'>
					{Detail?.title}
				</h1>
				<h2 className='w-full text-2xl leading-none font-hanna theme-text opacity-40'>
					{Detail?.original_title}
				</h2>

				{/* 영화 기타 정보 */}
				<div className='flex flex-wrap gap-1 font-noto text-xs font-[600]'>
					<ul className='flex bar'>
						{Detail?.genres.map((el, idx) => (
							<li key={el.id}>
								&nbsp;
								{idx !== 0 && '/'}
								&nbsp;
								{el.name}
							</li>
						))}
					</ul>

					<span className='bar'>{Detail?.release_date}</span>
					<span className='bar'>{Detail?.runtime}분</span>
					<span className='bar'>{Detail?.vote_average} / 10</span>
				</div>

				<nav>
					{Trailer && (
						<button className='btn' onClick={setOpen}>
							WATCH TRAILER
						</button>
					)}
				</nav>
			</article>

			{/* 영화 포스터 및 줄거리 소개 영역 */}
			<article className='flex gap-10 h-2/5 panel mt-10 max-xl:h-auto max-xl:mb-20 max-md:flex-wrap'>
				<img
					src={`https://image.tmdb.org/t/p/w342${Detail.poster_path}`}
					alt={Detail.title}
					className='block object-contain w-1/4 h-full max-md:w-full max-md:h-auto'
				/>

				<div className='text-justify'>
					{Detail.tagline && (
						<h3 className='mb-4 text-4xl font-dongle'>{Detail.tagline}</h3>
					)}
					<p className='w-full mb-10 text-sm opacity-60'>{Detail.overview}</p>
					<button onClick={() => navigate(-1)} className='btn'>
						Go Back
					</button>
				</div>
			</article>
		</div>
	);
}
