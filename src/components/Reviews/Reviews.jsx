import { useOutletContext } from "react-router-dom";
import { useState, useEffect } from 'react';
import { fetchMovieIDReviews } from 'api';

const Reviews = () => {
	const [contentRewiews, setContentRewiews] = useState([])
	const { movieID } = useOutletContext();

	useEffect(() => {
		const url = `movie/${movieID}/reviews`
		async function fetchMovie() {
			try {
				const reviews = await fetchMovieIDReviews(url);
				if (reviews.results.length) {
					const contentRewiews = reviews.results.map(({ author, content }) => {
						return { author, content };
					});
					setContentRewiews(contentRewiews)
				} else {
					setContentRewiews([])
				}
				return;
			} catch (error) {
				console.log(error)
			}
		}
		fetchMovie()
	}, [movieID])

	if (!contentRewiews) {
		return;
	}

	return (
		<div className="container border-bottom border-dark ">
			{contentRewiews.length ?
				contentRewiews.map((el, index) => (
					<ul key={index}>
						<li><h5 className="card-title">Author: {el.author}</h5></li>
						<br />
						<p>{el.content}</p>
					</ul>
				)) :
				(<p className="mb-3">Not reviews</p>)
			}
		</div>
	);
};
export default Reviews;