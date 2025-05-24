export default function BgDetail({ Detail }) {
	return (
		<div className='fixed top-0 left-0 opacity-50 size-full'>
			<img
				src={`https://image.tmdb.org/t/p/w1280${Detail?.backdrop_path}`}
				alt={Detail.title}
				className='size-full object-cover'
			/>
			<div className='fixed size-full top-0 left-0 bg-gradient-to-b from-transparent to-[oklch(var(--theme-bg))]'></div>
		</div>
	);
}
