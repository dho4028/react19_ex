import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MovieInfo from '../components/MovieInfo';
import BgDetail from '../components/BgDetail';
import Modal from '../components/Modal';
import Spinner from '../components/Spinner';
import ReviewForm from '../components/ReviewForm';

export default function MovieDetail() {
	const { id } = useParams();
	const [Detail, setDetail] = useState(null);
	const [Trailer, setTrailer] = useState(null);
	const [Open, setOpen] = useState(false);
	const [Loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			const BASE_URL = 'https://api.themoviedb.org/3/movie';
			const API_KEY = '4cf85a609f260b43cf0278ad12483b46';
			const REQ_URL_DETAIL = `${BASE_URL}/${id}?api_key=${API_KEY}&language=ko-KR`;
			const REQ_URL_TRAILER = `${BASE_URL}/${id}/videos?api_key=${API_KEY}`;

			try {
				const resDetail = await fetch(REQ_URL_DETAIL);
				const dataDetail = await resDetail.json();
				console.log(dataDetail);
				setDetail(dataDetail);

				const resTrailer = await fetch(REQ_URL_TRAILER);
				const dataTrailer = await resTrailer.json();
				const officialTrailer = dataTrailer?.results.find(
					(vid) => vid.type === 'Trailer' && vid.site === 'YouTube'
				);
				console.log('officialTrailer', officialTrailer);
				setTrailer(officialTrailer);
			} catch (err) {
				console.log(err);
			} finally {
				console.log('complete');
				setLoading(false);
			}
		};
		fetchData();
	}, [id]);
	return (
		<section className='w-full h-screen min-h-[800px] theme-bg relative px-[10vw] pt-[17vh] pb-[6vh] overflow-hidden max-xl:overflow-auto max-xl:h-auto flex flex-wrap'>
			{Detail && (
				<>
					<BgDetail Detail={Detail} />
					<MovieInfo
						Detail={Detail}
						Trailer={Trailer}
						setOpen={() => setOpen(true)}
					/>

					{Loading && <Spinner />}
					<ReviewForm />

					<Modal open={Open} onClose={() => setOpen(false)}>
						<h2>영화 예고편</h2>
						<iframe
							src={`https://www.youtube.com/embed/${Trailer?.key}`}
							className='size-full object-cover'
						/>
					</Modal>
				</>
			)}
		</section>
	);
}
