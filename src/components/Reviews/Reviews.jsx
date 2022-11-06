import { useOutletContext } from "react-router-dom";
import { useState, useEffect } from 'react';
import { fetchMovieIDReviews } from 'api';


export const Reviews = () => {

	const [contentRewiews, setContentRewiews] = useState([])
	const { movieID } = useOutletContext();

	useEffect(() => {
		const url = `movie/${movieID}/reviews`
		async function fetchMovie() {
			try {
				const reviews = await fetchMovieIDReviews(url);

				if (reviews.results) {
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

	return (
		<section>
			{contentRewiews ?
				contentRewiews.map((el, index) => (
					<ul key={index}>
						<li><h3>Author: {el.author}</h3></li>
						<br />
						<p>
							{el.content}
						</p>
					</ul>
				)) :
				(<p>Not reviews</p>)
			}
		</section>
	);
};