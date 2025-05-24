import { useEffect, useState } from 'react';
import Card from '../components/Card';

export default function MovieList() {
	const [MovieData, setMovieData] = useState([]);
	const [Loading, setLoading] = useState(false);

	useEffect(() => {
		const fetchMovieData = async () => {
			const BASE_URL = 'https://api.themoviedb.org/3/movie/popular';
			const API_KEY = '4cf85a609f260b43cf0278ad12483b46';
			const LANGUAGE = 'ko-KR';

			setLoading(true);

			try {
				const REQ_URL = `${BASE_URL}?api_key=${API_KEY}&language=${LANGUAGE}`;
				const response = await fetch(REQ_URL);
				const data = await response.json();
				console.log(data.results);
				setMovieData(data.results);
			} catch (error) {
				console.error('영화 데이터를 가져오는데 실패했습니다: ', error);
			} finally {
				setLoading(false);
			}
		};

		fetchMovieData();
	}, []);

	return (
		<section className='w-full fixed h-screen top-0 right-0 px-[10vw] py-30 overflow-y-auto custom-scroll grid grid-cols-5 gap-10 justify-items-center max-2xl:grid-cols-4 max-xl:grid-cols-3 max-md:grid-cols-2'>
			{Loading && <p>Loading...</p>}

			{MovieData.map((data) => {
				return <Card key={`${data.id}`} data={data} />;
			})}
		</section>
	);
}
