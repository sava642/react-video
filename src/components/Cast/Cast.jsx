import { useOutletContext } from "react-router-dom";
import { useState, useEffect } from 'react';
import { fetchMovieIDCredits } from 'api';

const Cast = () => {
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

	return (
		<div className="card-group row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3 ">
			{cast.map(({ cast_id, name, character, profile_path }) => (
				<div className="col" key={cast_id}>
					<div className="card h-100" >
						<div className="card-body ">
							{profile_path && <img src={`https://image.tmdb.org/t/p/w200${profile_path}`} class="card-img-top " alt="" />}
						</div>
						<div class="card-body p-3">
							<h6 class="card-title">{name}</h6>
							<h6 class="card-title">Character: {character}</h6>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};
export default Cast;

