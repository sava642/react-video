import { useOutletContext } from "react-router-dom";
import { useState, useEffect } from 'react';
import { fetchMovieIDCredits } from 'api';

export const Cast = () => {
	const [cast, setCast] = useState([])

	const { movieID } = useOutletContext();

	useEffect(() => {
		const url = `movie/${movieID}/credits`
		async function fetchMovie() {
			try {
				//setIsLoading(true);
				const credits = await fetchMovieIDCredits(url);
				setCast(credits.cast)
			} catch (error) {
				console.log(error.massage)
			} finally {
				//setIsLoading(false);
			}
		}
		fetchMovie()
	}, [movieID])
	const path = 'https://image.tmdb.org/t/p/w200'
	return (
		<section>
			<div>
				{cast.map(({ cast_id, name, character, profile_path }) => (
					<div key={cast_id}>
						{profile_path && <img src={`${path}${profile_path}`} alt="" />}
						<p>{name}</p>
						<p>Character: {character}</p>
					</div>))}
			</div>
		</section>
	);
};