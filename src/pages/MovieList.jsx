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
		<section className='w-full min-h-screen bg-slate-200 flex-wrap flex justify-between px-[8vw] py-[8vh]'>
			{Loading && <p>Loading...</p>}

			{MovieData.map((data) => {
				return <Card key={`${data.id}`} data={data} />;
			})}
		</section>
	);
}
