import { useRef, useState } from 'react';

export default function ReviewForm() {
	const [Reviews, setReviews] = useState([]);
	const refTextarea = useRef(null);
	console.log(Reviews);

	const handleSubmit = (e) => {
		e.preventDefault();

		const formData = new FormData(e.target);
		console.log(formData);

		const newReview = formData.get('review');
		setReviews([newReview, ...Reviews]);
		refTextarea.current.value = '';
	};
	return (
		<div className='relative flex flex-wrap content-end gap-5 w-3/12 h-full theme-text max-xl:w-full'>
			<article className='relative w-full h-3/5 overflow-y-auto custom-scroll'>
				<ul className='flex flex-col gap-2'>
					{Reviews.map((el, idx) => (
						<li key={idx} className='panel p-3'>
							{el}
						</li>
					))}
				</ul>
			</article>

			<article className='panel w-full h-2/5 max-xl:h-auto'>
				<h2 className='font-noto text-base font-[700] opacity-70 mb-4'>
					Leave a Review
				</h2>

				<form onSubmit={handleSubmit}>
					<textarea
						placeholder='영화 한줄평 입력'
						rows={5}
						name='review'
						ref={refTextarea}
						className='w-full bg-black/6 resize-none rounded p-3 shadow-inner mb-2'
					></textarea>
					<input
						type='reset'
						value={'CANCEL'}
						className='btn hue-rotate-30 mr-4'
					/>
					<input type='submit' value={'SEND'} className='btn' />
				</form>
			</article>
		</div>
	);
}
